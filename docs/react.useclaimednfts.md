<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@thirdweb-dev/react](./react.md) &gt; [useClaimedNFTs](./react.useclaimednfts.md)

## useClaimedNFTs() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Use this to get a list of \*claimed\* (minted) NFT tokens of your ERC721 Drop contract.

<b>Signature:</b>

```typescript
export declare function useClaimedNFTs(contract: RequiredParam<NFTDrop>, queryParams?: QueryAllParams): import("react-query").UseQueryResult<NFT<NFTDrop>[], unknown>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  contract | [RequiredParam](./react.requiredparam.md)<!-- -->&lt;NFTDrop&gt; | an instace of a  |
|  queryParams | QueryAllParams | <i>(Optional)</i> query params to pass to the query for the sake of pagination |

<b>Returns:</b>

import("react-query").UseQueryResult&lt;[NFT](./react.nft.md)<!-- -->&lt;NFTDrop&gt;\[\], unknown&gt;

a response object that includes an array of NFTs that are claimed

## Remarks

Equivalent to using [useNFTs()](./react.usenfts.md)<!-- -->.

## Example


```javascript
const { data: claimedNFTs, isLoading, error } = useClaimedNFTs(<YourERC721DropContractInstance>, { start: 0, count: 100 });
```
