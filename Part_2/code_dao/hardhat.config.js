require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("Deploy", "Deploys a COMPound style governance system")
.addParam("token", "The address to receive the initial supply")
.addParam("timelock", "The timelock administrator")
.addParam("guardian", "The governor guardian").setAction(async taskArgs => {
    
  const { deploy } = require("./scripts/Deploy");

    await deploy({
      tokenRecipient: taskArgs.token,
      timeLockAdmin: taskArgs.timelock,
      guardian: taskArgs.guardian
    });

})


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.5.16",
    networks: {
        ropsten: {
          url: process.env.ROPSTEN_URL || '',
          accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        },
        rinkeby: {
          url: process.env.RINKEBY_URL || '',
          accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        },
        network_name: {
          url: process.env.RINKEBY_URL || '',
          accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        },
      },
      gasReporter: {
        enabled: process.env.REPORT_GAS !== undefined,
        currency: 'USD',
      },
      etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
      },
};