import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "hardhat-deploy"
import "hardhat-deploy-ethers"
import "@nomicfoundation/hardhat-verify"

/** hard配置信息
 * https://hardhat.org/hardhat-runner/docs/config
 */
const config: HardhatUserConfig = {
  solidity: "0.8.20",
  defaultNetwork: "bsctest",
  networks: {
    hardhat: {
    },
    bsctest: {
      url: "https://data-seed-prebsc-2-s1.bnbchain.org:8545",
      accounts: ["19f06508e4e954c5ccca43b7d2eb7a3c2a69cefbca836eef348c3ec701674ac1"],
      chainId: 97,
    }
  },
  namedAccounts: {
    deployer: {
        default: "0xd8A48D65Df9523f13e5D650483f17722e0a8eE58", // here this will by default take the first account as deployer
        97: "0xd8A48D65Df9523f13e5D650483f17722e0a8eE58", // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        4: '0xd8A48D65Df9523f13e5D650483f17722e0a8eE58', // but for rinkeby it will be a specific address
        "goerli": '0x84b9514E013710b9dD0811c9Fe46b837a4A0d8E0', //it can also specify a specific netwotk name (specified in hardhat.config.js)
    },
},
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    // apiKey: {
    //   test: '4H5NXUVT1DCPTQR2HHNRZ9DD61XQJJU2G3'
    // }
    apiKey: "4H5NXUVT1DCPTQR2HHNRZ9DD61XQJJU2G3"
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
    deploy: "./deploy"
  },
};

// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });


export default config;
