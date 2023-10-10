import { time } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ethers } from "hardhat";
import { expect } from "chai";
import hre from "hardhat";

describe("Lock",function(){
    it("Should set right unlockTime",async function(){
        const lockedAmount = 1_000_000_000;
        const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
        const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;
        
        const lock = await ethers.deployContract("Lock",[unlockTime],{
            value: lockedAmount
        });

        expect(await lock.unlockTime()).to.equal(unlockTime)
    });
});