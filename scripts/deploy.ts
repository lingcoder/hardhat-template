import {
  ethers,
  /* run */
} from "hardhat";

async function main() {
  const ethValue = ethers.parseEther("0.0000000001");

  const instance = await ethers.deployContract("Greeter", [], {
    value: ethValue,
  });

  await instance.waitForDeployment();

  // const timeWait = 15;
  // console.log(`waiting for ${timeWait} seconds... to verify contract`);
  // await new Promise((resolve) => setTimeout(resolve, timeWait * 1000));
  // run("verify:verify", {
  //   address: instance.target,
  //   constructorArguments: [],
  // });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
