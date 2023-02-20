# Hardhat-template

<div align=center style="background:lightgrey">
<img src="./logo.svg" width=250" height="100" />
</div>
<div align=center>
<img src="https://img.shields.io/badge/solidity-^0.8.17-blue"/>
<img src="https://img.shields.io/badge/hardhat-^2.10.2-red"/>
<img src="https://img.shields.io/badge/etherjs-v5-green"/>
<img src="https://img.shields.io/badge/@openzeppelin-^4.8.0-green"/>
</div>

[English](./README.md) | 简体中文

## 快速开始

```bash

npm install -g yarn

yarn install

```

## 快捷命令

```bash
    # 执行合约编译
    yarn compile
    # 执行合约部署
    yarn deploy
    # 执行合约测试用例
    yarn test
    # 合约测试覆盖率
    yarn test:coverage
    # 合约大小检测
    yarn test:size-contracts
    # 合约格式化检测
    yarn lint:sol
    # 合约格式化执行
    yarn lint:sol:fix

```

## Hardhat命令

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

## 其他命令

部署合约到特定网络

```shell
  npx hardhat run --network rinkeby deploy/deploy.ts
```

验证已部署的合约

```shell
npx hardhat verify --network rinkeby "DEPLOYED_CONTRACT_ADDRESS" "constructor-args1" "constructor-args2"
```
