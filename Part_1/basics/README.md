# Smart Contract Basics

## What is a the Ethreum Virtual Machine (EVM)?

The Ethereum Virtual Machine (EVM) is what defines the rules for computing a new valid state from block to block. The EVM is a powerful, sandboxed virtual stack embedded within each full Ethereum node, responsible for executing contract bytecode. Contracts are typically written in higher level languages, like Solidity, then compiled to EVM bytecode.

EVM enables smart contract(solidity) to be executed on any computer(OS agnostic). EVM is installed on the computer(operating system) and works as a middle layer between a smart contract and operating system. Once Solidity code is compiled to bytecode, EVM can read to execute.

Read these articles for a more granular explanation: 
- https://medium.com/@eiki1212/what-is-evm-ethereum-virtual-machine-f38310130114
- https://ethereum.org/en/developers/docs/evm/


- **EVM compatible chains**
EVM compatible chains create a code execution environment similar to EVM, allowing developers on Ethereum to deploy smart contracts to these chains easily and quickly, without having to write smart contract code from scratch.

Binance Smart Chain, Polygon, xDAI, TRON, Fantom, Avalanche C-Chain, Evmos, Moonbeam

Solana, Cosmos, Polkadot are not EVM compatible.

## What is [Solidity](https://docs.soliditylang.org/en/v0.8.13/)?

" Solidity is an object-oriented, high-level language for implementing smart contracts. Smart contracts are programs which govern the behaviour of accounts within the Ethereum state.

Solidity is a curly-bracket language designed to target the Ethereum Virtual Machine (EVM). It is influenced by C++, Python and JavaScript. You can find more details about which languages Solidity has been inspired by in the language influences section.

Solidity is statically typed, supports inheritance, libraries and complex user-defined types among other features.

With Solidity you can create contracts for uses such as voting, crowdfunding, blind auctions, and multi-signature wallets." 