// deploy/00_deploy_my_contract.js
module.exports = async ({getNamedAccounts, deployments}) => {
    const decimals = 18;
    const input = "1000"; // Note: this is a string, e.g. user input
    const initSupply = ethers.parseUnits(input, decimals)

    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();
    console.log("deployer = ",deployer)
    await deploy('Token', {
      from: deployer,
      args: [initSupply],
      log: true,
    });
  };
  module.exports.tags = ['Token'];