<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@thirdweb-dev/react](./react.md) &gt; [useMintNFT](./react.usemintnft.md)

## useMintNFT() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Use this to mint a new NFT on your [NFTContract](./react.nftcontract.md)

<b>Signature:</b>

```typescript
export declare function useMintNFT<TContract extends NFTContract>(contract: RequiredParam<TContract>): import("react-query").UseMutationResult<MintNFTReturnType<TContract>, unknown, MintNFTParams<TContract>, unknown>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  contract | [RequiredParam](./react.requiredparam.md)<!-- -->&lt;TContract&gt; | an instace of a [NFTContract](./react.nftcontract.md) |

<b>Returns:</b>

import("react-query").UseMutationResult&lt;[MintNFTReturnType](./react.mintnftreturntype.md)<!-- -->&lt;TContract&gt;, unknown, [MintNFTParams](./react.mintnftparams.md)<!-- -->&lt;TContract&gt;, unknown&gt;

a mutation object that can be used to mint a new NFT token to the connected wallet

## Example


```jsx
const Component = () => {
  const {
    mutate: mintNft,
    isLoading,
    error,
  } = useMintNFT(NFTContract);

  if (error) {
    console.error("failed to mint nft", error);
  }

  return (
    <button
      disabled={isLoading}
      onClick={() => mintNft({ name: "My awesome NFT!" })}
    >
      Mint!
    </button>
  );
};
```
