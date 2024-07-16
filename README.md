# Hardhat-template

<div align=center style="background:lightgrey">
<img src="./logo.svg" width=250" height="100" />
</div>
<div align=center>
<img src="https://img.shields.io/badge/solidity-^0.8.26-blue"/>
<img src="https://img.shields.io/badge/hardhat-^2.22.0-red"/>
<img src="https://img.shields.io/badge/etherjs-v6-green"/>
<img src="https://img.shields.io/badge/@openzeppelin-^5.0.0-green"/>
</div>

English | [简体中文](./README_zh.md)

## Quick Start

```bash

npm install -g pnpm

pnpm install

pnpm prepare

```

## Quick Commands

    # Compile the contract
    pnpm compile
    # Deploy the contract
    pnpm deploy
    # Run contract test cases
    pnpm test
    # Check contract code coverage
    pnpm coverage
    # Check contract size
    pnpm size
    # Export ABI file
    pnpm abi
    # Perform global formatting check
    pnpm lint
    # Perform global formatting write
    pnpm lint:fix

## Hardhat Commands

```bash
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix

```

## Other Commands

Deploy the contract to a specific network

```shell
  npx hardhat run --network rinkeby deploy/deploy.ts
```

Validate deployed contracts

```shell
npx hardhat verify --network rinkeby "DEPLOYED_CONTRACT_ADDRESS" "constructor-args1" "constructor-args2"
```
