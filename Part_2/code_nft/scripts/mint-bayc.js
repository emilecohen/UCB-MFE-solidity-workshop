const hre = require('hardhat')
const proc = require("process");


const WALLET_ADDRESS = '0xa3BddF923370ffaE55A0D412462320cb8D9e48be'
const CONTRACT_ADDRESS = '0xAEa8005FFd31Be2f662ED260667cEBcbACe89198'


async function main() {
  const NFT = await hre.ethers.getContractFactory('NFT')

  const contract = NFT.attach(CONTRACT_ADDRESS);
  const response = await contract.mint(WALLET_ADDRESS);
  const res = await response.wait();

  return res
}

main()
  .then(function (res) {
    console.log(JSON.stringify(res));
  process.exit(0)
})
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })

