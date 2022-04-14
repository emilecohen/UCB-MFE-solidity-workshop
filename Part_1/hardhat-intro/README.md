# Hardhat Intro

''' Hardhat is a development environment to compile, deploy, test, and debug your Ethereum software. It helps developers manage and automate the recurring tasks that are inherent to the process of building smart contracts and dApps, as well as easily introducing more functionality around this workflow. This means compiling, running and testing smart contracts at the very core.

Hardhat comes built-in with Hardhat Network, a local Ethereum network designed for development. Its functionality focuses around Solidity debugging, featuring stack traces, console.log() and explicit error messages when transactions fail. '''

You can find more about Hardhat [here](https://hardhat.org/getting-started/)

## Basics

We will use Hardhat to:
- debug a basic smart contract
- deploy a basic smart contract on testnet


### Installation

In the root of your project (```./sample-project-students```), run:
```
npm install --save-dev hardhat
```


### Project Set Up

1. **Hardhat**
- Run ```npx hardhat```
- Choose *Create a basic sample project*
- Choose the root of your project (keep suggested root)
- Add a .gitignore
- Copy paste package.json from ```Part_1/hardhat-intro/sample-project-example```
- Run ```npm install```

2. **Environment Variables for Testnet Deployment**
Environment Variables are:
- ```PRIVATE_KEY``` 
Eth Private Key - Export it from Metamask ([guidelines](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key))


- ```RINKEBY_URL```
In order to deploy to a testnet, we will need to interact with the blockchain through a node. Either by running your own blockchain node or connecting to a node provider. 
Biggest node providers on Ethereum are [Infura](https://infura.io) and [Alchemy](https://www.alchemy.com): we will use Alchemy in this workshop.
To create a new API KEY, you can follow the following [tutorial](https://docs.alchemy.com/alchemy/introduction/getting-started)


### Debug & Test with Hardhat

**Debug**
- Check Compilation
```npx hadhat compile```

- Localnet: you can deploy your code on a a local network with predefined addresses to test smart contract methods quicker.
```npx hardhat node```

- .log(): hardhat offers the possibility to log variables directly from Solidity code. 

- Deploy to localnet
```npx hardhat run ./scripts/sample-script.js --network localhost```



**Test**
Once deployed, code is immutable, and user's money is at stake: planning all edge cases through thorough testing is primordial.

Hardhat combined with [Chai](https://www.chaijs.com) and [ethers.js](https://docs.ethers.io/v5/) is powerful to test all possible:
- *Hardhat* uses built-in local network 
- *Chai* allows to write effective tests in JS or TS
- *ethers.js* is used to interact with the network

Run test: ```npx hardhat test```



### Deploy to testnet with Hadhat

When deploying to testnet or mainnent, you will need:
- Connect to a node (Alchemy)
- Use your private key to sign transactions and pay gas (you need ETH to deploy)

Deploy contract: ```npx hardhat run ./scripts/sample-script.js --network <network>```

- ```<network>``` needs to be defined in ```hardhat.config.js```