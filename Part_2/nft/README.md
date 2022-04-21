# Non Fungible Tokens (ERC-721 / ERC-1555)

Non-fungible tokens (NFTs) are cryptographic assets on a blockchain with unique identification (ERC-721) - or in low supply (ERC-1155) -  codes and metadata that distinguish them from each other. Unlike cryptocurrencies, they cannot be traded or exchanged at equivalency. This differs from fungible tokens like cryptocurrencies, which are identical to each other and, therefore, can serve as a medium for commercial transactions.

## Intro

From [Forbes](https://www.forbes.com/advisor/investing/cryptocurrency/nft-non-fungible-token/):
- NFTs are also generally one of a kind, or at least one of a very limited run, and have unique identifying codes. 
- “Essentially, NFTs create digital scarcity”
- This stands in stark contrast to most digital creations, which are almost always infinite in supply. Hypothetically, cutting off the supply should raise the value of a given asset, assuming it’s in demand.
- $174 million has been spent on NFTs since November 2017.

## Some big projects

### PFPs (Profile Pictures)
- [Bored Ape Yacht Club (BAYC)](https://boredapeyachtclub.com/#/) --> more than $1.8B of volume to date 

Contract: https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d

- [Crypto Punks](https://www.larvalabs.com/cryptopunks) --> more than $1.9B of volume. Crypto Punks are not ERC-721 because they were created before the standard

Contract: https://etherscan.io/address/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb#code


### Unique Piece
- The First 5000 Days is another one of Beeples high grossing NFT projects. It is a collage of 5000 individual NFTs that Beeples created for his Everyday’s series. It sold for an astonishing $69 million (42.329 ETH) in 2021 at the [Christies Auction house](https://onlineonly.christies.com/s/beeple-first-5000-days/beeple-b-1981-1/112924). This is the most expensive NFT ever to be sold to an individual investor.


Have a a look at [Dune Analytics](https://dune.com/browse/dashboards) for good analytic dashboard about any blockchain topic.


## Major Marketplaces
- [Opensea](https://opensea.io)
- [LooksRare](https://looksrare.org)
- [Rarible](https://rarible.org)

Interesting read on LooksRare vampire attack on Opensea [here](https://blog.coinbase.com/vampire-attack-looksrare-vs-opensea-c3b4107cd4db)


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

Follow the steps of [hardhat-intro](../../Part_1/hardhat-intro/) on basic deployment and apply them in the [code](../code/) folder.


## Additional content

### ERC-1155 implementation

ERC-1155 is a standard interface for contracts that manage multiple token types. A single deployed contract may include any combination of fungible tokens, non-fungible tokens or other configurations (e.g. semi-fungible tokens). It is called a semi-fungible token.

- [ERC-1155 Proposal](https://eips.ethereum.org/EIPS/eip-1155)
- [Most gas-efficient NFT with ERC-1155](https://medium.com/donkeverse/introducing-erc1155d-the-most-efficient-non-fungible-token-contract-in-existence-c1d0a62e30f1)

### Pre Sale Allow List

- Implementing a PreSale AllowList: choose between mapping, signature or merkle root method (see [here](https://medium.com/donkeverse/hardcore-gas-savings-in-nft-minting-part-2-signatures-vs-merkle-trees-917c43c59b07))

[TIPS] We will need to use the gas reporter from Hardhat to compare those:
- ```npm install hardhat-gas-reporter --save-dev```
- in hardhat.config.js, ```require("hardhat-gas-reporter");```
- in ```.env```, add ```REPORT_GAS=true```

This will generate a gas report everytime we are testing a solidity file.


### MarketPlace tutorial

As for ERC-20, the ERC-721 / ERC-1155 does not include anything for selling / buying those assets. You would need transactional smart contracts like Opensea ones. One good tutorial can be found [here](https://dev.to/dabit3/building-scalable-full-stack-apps-on-ethereum-with-polygon-2cfb)

### Fractionalization and bridge to DeFi

Entry point for most NFTs is way higher than the average portfolio size. This creates a chain of problems including limited price discovery and illiquidity. Thus, one hot topic around NFTs is **fractionalization**. This brings NFT world and DeFi world together: you will be able to create NFT Indexes, lend your NFTS, swap on AMMs, even create NFT derivatives ...

Two promising projects are:
- [Fractional Art](https://fractional.art/)
- [Bridgesplit](https://docs.bridgesplit.com/main/) on Solana