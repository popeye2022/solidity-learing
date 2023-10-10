import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  defaultNetwork: "bsctest",
  networks: {
    hardhat: {
    },
    bsctest: {
      url: "https://data-seed-prebsc-2-s1.bnbchain.org:8545",
      accounts: ["19f06508e4e954c5ccca43b7d2eb7a3c2a69cefbca836eef348c3ec701674ac1"],
      chainId: 97
    }
  }
};

// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });


export default config;
