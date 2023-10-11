// deploy/00_deploy_my_contract.js
module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();
    await deploy('Token', {
      from: deployer,
      args: [1000000000000],
      log: true,
    });
  };
  module.exports.tags = ['Token'];