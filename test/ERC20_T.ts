import { ethers } from "hardhat";
import { expect } from "chai";
import hre from "hardhat";

import {
    time,
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
  
describe("ERC20",function(){
    async function deployOneToken(){
        const decimals = 18;
        const input = "1000"; // Note: this is a string, e.g. user input
        const initSupply = ethers.parseUnits(input, decimals)
        const erc20 = await ethers.deployContract("Token",[initSupply]);
        return {erc20,initSupply}

    }

    it("Should set right Token Name",async function(){
        const { erc20,initSupply } = await loadFixture(deployOneToken);
        expect(await erc20.name()).to.equal("XIANYANBAO")
    });


    it("Should set right Token Symbol",async function(){
        const { erc20,initSupply } = await loadFixture(deployOneToken);
        expect(await erc20.symbol()).to.equal("XYB")
    });


    it("Should set right Token decimal",async function(){
        const { erc20,initSupply } = await loadFixture(deployOneToken);
        expect(await erc20.decimals()).to.equal(18)
    });

    it("Should set right Token total supply",async function(){
        const { erc20,initSupply } = await loadFixture(deployOneToken);
        expect(await erc20.totalSupply()).to.equal(initSupply)
    });
});