# ERC20

## Intro to ERCs

- Code is immutable. 
- Blockchain is an open source environment where composability and integration is key. 

Those two elements make a strong case for a need of **standards**. If standards of functions are used accross different smart contracts, it will be easier for application to interact with smart contracts.

This is why [ERCs](https://eips.ethereum.org/erc) - Ethereum Requests for Comments - are so important. They define the standards developers should use when defining smart contracts. 
Developers can propose Ethereum Improvement Proposals (EIPs) that will be peer reviewed and validated before becoming ERCs.

ERC-20 (fungible token) and ERC-721 (the famous NFT contract) are the two most famous ERCs. The number is simply the number of the request for comment - ERC-20 is way older than ERC721. 

There are more than $500,000$ ERC-20 tokens on Ethereum.

## ERC20 

ERC-20 was initially proposed in 2015 and provides the following functionalities:
- transfer tokens from one account to another
- get the current token balance of an account
- get the total supply of the token available on the network
- approve whether an amount of token from an account can be spent by a third-party account

It materializes by a set of functions and events that will be shared by all ERC-20 contracts:

**Methods**
```solidity
function name() public view returns (string)
function symbol() public view returns (string)
function decimals() public view returns (uint8)
function totalSupply() public view returns (uint256)
function balanceOf(address _owner) public view returns (uint256 balance)
function transfer(address _to, uint256 _value) public returns (bool success)
function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)
function approve(address _spender, uint256 _value) public returns (bool success)
function allowance(address _owner, address _spender) public view returns (uint256 remaining)
```

**Events**
```solidity
event Transfer(address indexed _from, address indexed _to, uint256 _value)
event Approval(address indexed _owner, address indexed _spender, uint256 _value)
```

## OpenZeppelin

[OpenZeppelin](https://openzeppelin.com) has been a huge vector of standardization. They have provided open-source implemenation of major ERCs as well as smart contract security tools. OpenZeppelin is today the reference when starting a web3 project. 
It also comes with a great documentation and tutorial, for anyone to construct contracts, secure it and deploy it.

**Usage:** You can import their library through Hardhat, and directly inherit from their contracts in you smart-contract implementation.

```bash
npm install @openzeppelin/contracts
npm install --save-dev @openzeppelin/hardhat-upgrades
npm install --save-dev @nomiclabs/hardhat-ethers ethers # peer dependencies
```


## Testing, Deployment and Contract Interaction

Have a look at ```./contracts/erc20.sol```.
The contract inherits from ERC20 implementation of OpenZeppelin and simply adds an owner. We can add other funtionalities, such as whitelist, upgradeability ... thanks to OpenZeppelin library.

### Test
You can have a look at ```test/token-test.js``` and run ```npx hardhat test ./test/token-test.js```

### Deployment
Run:
- Deploy: ```npx hardhat run ./scripts/deploy-erc20.js --network <network>```
- Transfer token to a list of addresses: ```npx hardhat run ./scripts/transfer.js --network <> ```
