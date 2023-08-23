import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import { ethers } from "hardhat";
import { getContractFactory } from "hardhat/types";

async function sleep(seconds: number) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

async function main() {
  console.log("start deploy......");
  const Token: getContractFactory = await ethers.getContractFactory("Greeter");

  const token: Contract = await Token.deploy();
  await token.deployed();
  console.log("contract deployed to: ", token.address);
  const sec = 15;
  console.log("waiting " + sec + " seconds");
  await sleep(15);
  console.log("starting to verify: ", token.address);
  await run("verify:verify", {
    address: token.address,
    constructorArguments: [],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
