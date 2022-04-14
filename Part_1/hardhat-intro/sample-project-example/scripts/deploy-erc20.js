const hre = require("hardhat");

const supply = ethers.BigNumber.from('1000000000000000000000');

async function main() {
  const ERC20 = await hre.ethers.getContractFactory("MFECoin");
  const erc20 = await ERC20.deploy("MFE Coin", "MFEC", supply);

  await erc20.deployed();

  console.log("Coin deployed to:", erc20.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
