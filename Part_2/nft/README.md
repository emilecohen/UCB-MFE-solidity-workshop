# Non Fungible Tokens (ERC-721 / ERC-1555)

Non-fungible tokens (NFTs) are cryptographic assets on a blockchain with unique identification (ERC-721) - or in low supply (ERC-1155) -  codes and metadata that distinguish them from each other. Unlike cryptocurrencies, they cannot be traded or exchanged at equivalency. This differs from fungible tokens like cryptocurrencies, which are identical to each other and, therefore, can serve as a medium for commercial transactions.

## Intro

From [Forbes](https://www.forbes.com/advisor/investing/cryptocurrency/nft-non-fungible-token/):
- NFTs are also generally one of a kind, or at least one of a very limited run, and have unique identifying codes. 
- “Essentially, NFTs create digital scarcity,”
- This stands in stark contrast to most digital creations, which are almost always infinite in supply. Hypothetically, cutting off the supply should raise the value of a given asset, assuming it’s in demand.
- $174 million has been spent on NFTs since November 2017.

## Major projects to date

### PFPs (Profile Pictures)
- [Bored Ape Yacht Club (BAYC)](https://boredapeyachtclub.com/#/) --> more than $1.8B of volume to date 

Contract: https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d

- [Crypto Punks](https://www.larvalabs.com/cryptopunks) --> more than $1.9B of volume. Crypto Punks are not ERC-721 because they were created before the standard

Contract: https://etherscan.io/address/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb#code

### Unique Piece
- The First 5000 Days is another one of Beeples high grossing NFT projects. It is a collage of 5000 individual NFTs that Beeples created for his Everyday’s series. It sold for an astonishing $69 million (42.329 ETH) in 2021 at the [Christies Auction house](https://onlineonly.christies.com/s/beeple-first-5000-days/beeple-b-1981-1/112924). This is the most expensive NFT ever to be sold to an individual investor.



## Major Marketplaces
- [Opensea](https://opensea.io)
- [LooksRare](https://looksrare.org)
- [Rarible](https://rarible.org)

Interesting read on LooksRare vampire attack on Opensea [here](https://blog.coinbase.com/vampire-attack-looksrare-vs-opensea-c3b4107cd4db)



Have a a look at [Dune Analytics](https://dune.com/browse/dashboards) for good analytic dashboard about any blockchain topic.

## Metadata

Without metadata, NFTs are reduced to a number (uint256) on-chain. Metadata uniquely defines the NFT and is associated to the Token Id (number of the nft, on-chain identifier). 
Metadata gathers:
- Attributes about the NFT
- Image / Video / Music that can be displayed on NFT marketplaces

This metadata is usually stored:
- On [IPFS](https://docs.ipfs.io/concepts/what-is-ipfs/#decentralization) (Interplanetary File System): peer-to-peer protocol for saving multimedia files

IPFS provides a way to ensure immutability of the metadata. [Pinata](https://docs.pinata.cloud) is a pinning service widely used to store and pin (make sure data does not get deleted on IPFS nodes) data to IPFS.

- On a private server (metadata can here be manipulated without any further mechanism)

Metadata example:
- [Bored Apes #6476](https://cloudflare-ipfs.com/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/6476)
## Deployment

## NFT Drop
