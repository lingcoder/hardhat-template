"use strict";

// eslint-disable-next-line no-redeclare
import { ethers, run } from "hardhat";

async function main() {
  console.log("Deploying USDT contract...");

  const instance = await ethers.deployContract("USDT", [], {
    gasLimit: BigInt("5000000"), 
  });

  await instance.waitForDeployment();

  const deployedAddress = await instance.getAddress();
  console.log(`USDT deployed to: ${deployedAddress}`);

  const timeWait = 15;
  console.log(`waiting for ${timeWait} seconds... to verify contract`);
  await new Promise((resolve) => setTimeout(resolve, timeWait * 1000));
  await run("verify:verify", {
    address: instance.target,
    constructorArguments: [],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
