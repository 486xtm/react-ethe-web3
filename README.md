# Thirdweb react SDK

The thirdweb React SDK provides a collection of hooks to use in your React apps to interact with your thirdweb contracts.

This library doesn't come with any UI, only the logic parts. This allows you to use your own styles and components, without the hassle of managing the data flows yourself.

## Installation

### via NPM

```sh
npm install @thirdweb-dev/react@nightly @thirdweb-dev/sdk@nightly ethers
```

### via Yarn

```sh
yarn add @thirdweb-dev/react@nightly @thirdweb-dev/sdk@nightly ethers
```

## Quick Start

### 1. Wrap your application in the Provider

At the top level of your application, add a `ThirdwebProvider` that will handle maintaining connection states and provide quick access to the [thirdweb SDK](https://github.com/thirdweb-dev/typescript-sdk/).

```jsx title="App.jsx"
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

const App = () => {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
      <YourApp />
    </ThirdwebProvider>
  );
};
```

### 2. Add a way for your users to connect your wallet somewhere in your app

We provide an easy way to handle wallet connections with a variety of dedicated [connector hooks](https://github.com/thirdweb-dev/react/tree/main/src/hooks/connectors/).

```jsx title="ConnectMetamaskButton.jsx"
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

export const ConnectMetamaskButtonComponent = () => {
  // get a function to connect to a particular wallet
  // options: useMetamask() - useCoinbase() - useWalletConnect()
  const connectWithMetamask = useMetamask();
  // once connected, you can get the connected wallet information from anywhere (address, signer)
  const address = useAddress();
  return (
    <div>
      {address ? (
        <h4>Connected as {address}</h4>
      ) : (
        <button onClick={connectWithMetamask}>Connect Metamask Wallet</button>
      )}
    </div>
  );
};
```

### 3. Interact with a thirdweb contract

Once connected, you can easily interact with your deployed contracts with dedicated [contract hooks](https://github.com/thirdweb-dev/react/tree/main/src/hooks/contracts/).

```jsx title="NFTList.jsx"
import { useNFTCollection } from "@thirdweb-dev/react";

const NFTListComponent = () => {
  // get an instance of your own contract
  const nftCollection = useNFTCollection("{{your nft contract address}}");

  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    if (nftCollection) {
      // call functions on your contract
      nftCollection
        .getAll()
        .then((nfts) => {
          setNfts(nfts);
        })
        .catch((error) => {
          console.error("failed to fetch nfts", error);
        });
    }
  }, [nftCollection]);

  return (
    <ul>
      {nfts.map((nft) => (
        <li key={nft.id}>{nft.name}</li>
      ))}
    </ul>
  );
};
```

## Advanced Configuration

These all the configuration options of the `<ThirdwebProvider />`.
We provide sane defaults for all of these, but you customize them to suit your needs.

```jsx title="App.jsx"
import { ThirdwebProvider, ChainId, IpfsStorage } from "@thirdweb-dev/react";

const KitchenSinkExample = () => {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Mainnet}
      chainRpc={{ [ChainId.Mainnet]: "https://mainnet.infura.io/v3" }}
      dAppMeta={{
        name: "Example App",
        description: "This is an example app",
        isDarkMode: false,
        logoUrl: "https://example.com/logo.png",
        url: "https://example.com",
      }}
      storageInterface={new IpfsStorage("https://your.ipfs.host.com")}
      supportedChains={[ChainId.Mainnet]}
      walletConnectors={[
        "walletConnect",
        { name: "injected", options: { shimDisconnect: false } },
        {
          name: "walletLink",
          options: {
            appName: "Example App",
          },
        },
      ]}
      sdkOptions={{
        gasSettings: { maxPriceInGwei: 500, speed: "fast" },
        readonlySettings: {
          chainId: ChainId.Mainnet,
          rpcUrl: "https://mainnet.infura.io/v3",
        },
        gasless: {
          openzeppelin: {
            relayerUrl: "your-relayer-url",
          },
        },
      }}
    >
      <YourApp />
    </ThirdwebProvider>
  );
};
```
