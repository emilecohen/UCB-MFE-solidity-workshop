const hre = require("hardhat");
const { ethers } = require("ethers");

// Following addresses are extracted from the Hardhat Localnet
// They MUST NOT be used on mainnet and should be replaced
OWNER_ADDRESS = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266';
const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const addresses = [
    '0x23618e81e3f5cdf7f54c3d65f7fbc0abf5b21e8f',
    '0xbcd4042de499d14e55001ccbb24a551f3b954096'
];

const amount = ethers.BigNumber.from('1000000000000000000');

async function main() {
  const ERC20 = await hre.ethers.getContractFactory("MFECoin");
  const contract = ERC20.attach(CONTRACT_ADDRESS);

  const initialBalance = await contract.balanceOf(OWNER_ADDRESS);
  console.log('Initial Owner Balance:', initialBalance);

  for (let i = 0; i < addresses.length; i++) { 
    await contract.transfer(addresses[i], amount)  ;
    console.log("Coins transferred to :", addresses[i]);
  }

  const finalBalance = await contract.balanceOf(OWNER_ADDRESS);
  console.log('Final Owner Balance:', finalBalance);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
