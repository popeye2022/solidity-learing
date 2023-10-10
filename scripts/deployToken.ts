import { ethers } from "hardhat";

async function main() {

  const decimals = 18;
  const input = "1000"; // Note: this is a string, e.g. user input
  const initSupply = ethers.parseUnits(input, decimals)

  const token = await ethers.deployContract("Token", [initSupply], {});

  await token.waitForDeployment();

  console.log(
    `Token initSupply ${initSupply} deployed to ${token.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
