const hre = require('hardhat')

async function main() {
  
  const NFT = await hre.ethers.getContractFactory('NFT');
  const nft = await NFT.deploy();
  await nft.deployed();

  return nft.address
}

main()
.then(function (response) {
  console.log(response)
})
  
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })