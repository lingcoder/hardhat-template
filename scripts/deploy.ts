import { ethers } from "hardhat";

async function main() {
  const ethValue = ethers.parseEther("0.0000000001");

  const instance = await ethers.deployContract("Greeter", [], {
    value: ethValue,
  });

  await instance.waitForDeployment();

  console.log(`Greeter with ${ethers.formatEther(ethValue)}ETH  deployed to ${instance.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
