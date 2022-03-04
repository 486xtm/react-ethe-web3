import type { Chain as WagmiChain } from "wagmi";

export type Chain = WagmiChain;

const chain = {
  mainnet: {
    id: 1,
    name: "Mainnet",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    blockExplorers: [
      {
        name: "Etherscan",
        url: "https://etherscan.io",
      },
    ],
  },
  // ropsten: {
  //   id: 3,
  //   name: "Ropsten",
  //   nativeCurrency: {
  //     name: "Ropsten Ether",
  //     symbol: "ropETH",
  //     decimals: 18,
  //   },
  //   rpcUrls: ["https://ropsten.infura.io/v3"],
  //   blockExplorers: [
  //     {
  //       name: "Etherscan",
  //       url: "https://ropsten.etherscan.io",
  //     },
  //   ],
  //   testnet: true,
  // },
  rinkeby: {
    id: 4,
    name: "Rinkeby",
    nativeCurrency: {
      name: "Rinkeby Ether",
      symbol: "rETH",
      decimals: 18,
    },
    rpcUrls: ["https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    blockExplorers: [
      {
        name: "Etherscan",
        url: "https://rinkeby.etherscan.io",
      },
    ],
    testnet: true,
  },
  goerli: {
    id: 5,
    name: "Goerli",
    nativeCurrency: {
      name: "Goerli Ether",
      symbol: "gETH",
      decimals: 18,
    },
    rpcUrls: ["https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    blockExplorers: [
      {
        name: "Etherscan",
        url: "https://goerli.etherscan.io",
      },
    ],
    testnet: true,
  },
  // kovan: {
  //   id: 42,
  //   name: "Kovan",
  //   nativeCurrency: {
  //     name: "Kovan Ether",
  //     symbol: "kETH",
  //     decimals: 18,
  //   },
  //   rpcUrls: ["https://kovan.infura.io/v3"],
  //   blockExplorers: [
  //     {
  //       name: "Etherscan",
  //       url: "https://kovan.etherscan.io",
  //     },
  //   ],
  //   testnet: true,
  // },
  // optimisticEthereum: {
  //   id: 10,
  //   name: "Optimistic Ethereum",
  //   nativeCurrency: {
  //     name: "Optimistic Ether",
  //     symbol: "OETH",
  //     decimals: 18,
  //   },
  //   rpcUrls: ["https://mainnet.optimism.io"],
  //   blockExplorers: [
  //     {
  //       name: "Etherscan",
  //       url: "https://optimistic.etherscan.io",
  //     },
  //   ],
  // },
  // optimisticKovan: {
  //   id: 69,
  //   name: "Optimistic Kovan",
  //   nativeCurrency: {
  //     name: "Kovan Ether",
  //     symbol: "KOR",
  //     decimals: 18,
  //   },
  //   rpcUrls: ["https://kovan.optimism.io"],
  //   blockExplorers: [
  //     {
  //       name: "Etherscan",
  //       url: "https://optimistic.etherscan.io",
  //     },
  //   ],
  //   testnet: true,
  // },
  polygonMainnet: {
    id: 137,
    name: "Polygon Mainnet",
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: [
      "https://polygon-rpc.com",
      "https://rpc-mainnet.matic.network",
      "https://matic-mainnet.chainstacklabs.com",
      "https://rpc-mainnet.maticvigil.com",
      "https://rpc-mainnet.matic.quiknode.pro",
      "https://matic-mainnet-full-rpc.bwarelabs.com",
    ],
    blockExplorers: [
      {
        name: "Polygonscan",
        url: "https://polygonscan.com",
      },
    ],
  },
  polygonTestnetMumbai: {
    id: 80001,
    name: "Polygon Testnet Mumbai",
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: [
      "https://matic-mumbai.chainstacklabs.com",
      "https://rpc-mumbai.maticvigil.com",
      "https://matic-testnet-archive-rpc.bwarelabs.com",
    ],
    blockExplorers: [
      {
        name: "Polygonscan",
        url: "https://mumbai.polygonscan.com",
      },
    ],
    testnet: true,
  },
  // arbitrumOne: {
  //   id: 42161,
  //   name: "Arbitrum One",
  //   nativeCurrency: {
  //     name: "Ether",
  //     symbol: "AETH",
  //     decimals: 18,
  //   },
  //   rpcUrls: ["https://arb1.arbitrum.io/rpc"],
  //   blockExplorers: [
  //     {
  //       name: "Arbiscan",
  //       url: "https://arbiscan.io",
  //     },
  //     {
  //       name: "Arbitrum Explorer",
  //       url: "https://explorer.arbitrum.io",
  //     },
  //   ],
  // },
  // arbitrumRinkeby: {
  //   id: 421611,
  //   name: "Rinkeby Arbitrum",
  //   nativeCurrency: {
  //     name: "Rinkeby ArbEther",
  //     symbol: "rinkArbETH",
  //     decimals: 18,
  //   },
  //   rpcUrls: ["https://rinkeby.arbitrum.io/rpc"],
  //   blockExplorers: [
  //     {
  //       name: "Arbitrum Explorer",
  //       url: "https://rinkeby-explorer.arbitrum.io",
  //     },
  //   ],
  //   testnet: true,
  // },
  avalanche: {
    id: 43114,
    name: "Avalanche",
    nativeCurrency: {
      name: "AVAX",
      symbol: "AVAX",
      decimals: 18,
    },
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    blockExplorers: [
      {
        name: "SnowTrace",
        url: "https://snowtrace.io/",
      },
    ],
    testnet: false,
  },
  // avalancheFuji: {
  //   id: 43113,
  //   name: "Avalanche FUJI",
  //   nativeCurrency: {
  //     name: "AVAX",
  //     symbol: "AVAX",
  //     decimals: 18,
  //   },
  //   rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
  //   blockExplorers: [
  //     {
  //       name: "SnowTrace",
  //       url: "https://testnet.snowtrace.io/",
  //     },
  //   ],
  //   testnet: true,
  // },
  // custom added (non wagmi standard)
  fantom: {
    id: 250,
    name: "Fantom Opera",
    nativeCurrency: {
      name: "Fantom",
      symbol: "FTM",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ftm.tools"],
    blockExplorerUrls: [
      {
        name: "FTMScan",
        url: "https://ftmscan.com/",
      },
    ],
    testnet: false,
  },
} as const;
export const defaultSupportedChains = Object.values(chain);

export type SupportedChainId = typeof defaultSupportedChains[number]["id"];

export type SupportedChain = SupportedChainId | Chain;
