import {assert, expect} from "chai";
import {ethers, network} from "hardhat";
import {describe} from "mocha";
import {parseEther} from "ethers/lib/utils";
import {BigNumber} from "ethers";
import {time} from "@nomicfoundation/hardhat-network-helpers";

import "./util/types"


async function sleepSeconds(seconds: number) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

console.log("=========================");
console.log("Using Network: " + network.name);
console.log("=========================");

describe("Test All", async function () {

    before(async () => {

    });


// test ERC20
    describe("DemoHello", async function () {
        it(
            "ConstructorParams:" ,
            async function () {
                assert.isTrue(1==1);
            }
        );

    });

})

