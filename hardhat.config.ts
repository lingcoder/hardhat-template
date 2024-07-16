import "./task/accounts";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "@nomiclabs/hardhat-solhint";
import "@openzeppelin/hardhat-upgrades";
import "dotenv/config";
import "hardhat-abi-exporter";

export default {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
      // forking: {
      //     url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      //     blockNumber: 15522419
      // }
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
      saveDeployments: true,
      live: true,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
      saveDeployments: true,
      timeout: 10 * 60 * 1000,
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
      timeout: 10 * 60 * 1000,
    },
    bnb: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 56,
      live: true,
      saveDeployments: true,
    },
    bnbTest: {
      url: "https://data-seed-prebsc-2-s2.binance.org:8545/",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 97,
      live: true,
      saveDeployments: true,
    },
    arbitrum: {
      accounts: [process.env.PRIVATE_KEY],
      url: `https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    arbitrumGoerli: {
      url: `https://arbitrum-goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    optimism: {
      url: `https://optimism-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    optimisGoerli: {
      url: `https://optimism-goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    linea: {
      url: `https://linea-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    lineaGoerli: {
      url: `https://linea-goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    near: {
      url: `https://near-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    nearTest: {
      url: `https://near-testnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    harmony: {
      url: `https://api.harmony.one`,
      accounts: [process.env.PRIVATE_KEY],
    },
    harmonyTest: {
      url: `https://api.s0.b.hmny.io`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  mocha: {
    timeout: 10 * 60 * 1000,
  },
  etherscan: {
    // Your API key for Etherscan
    // To see the full list of supported networks, run `npx hardhat verify --list-networks`
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY,
      goerli: process.env.ETHERSCAN_API_KEY,
      sepolia: process.env.ETHERSCAN_API_KEY,
      optimisticGoerli: process.env.ETHERSCAN_API_KEY,
      optimisticEthereum: process.env.ETHERSCAN_API_KEY,
      arbitrumGoerli: process.env.ETHERSCAN_API_KEY,
      arbitrumTestnet: process.env.ETHERSCAN_API_KEY,
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
      polygon: process.env.POLYGONSCAN_API_KEY,
      harmony: process.env.HARMONYSCAN_API_KEY,
      harmonyTest: process.env.HARMONYSCAN_API_KEY,
      bsc: process.env.BSCSCAN_API_KEY,
      bscTestnet: process.env.BSCSCAN_API_KEY,
    },
  },
  gasReporter: {
    currency: "USDT",
    enabled: !!process.env.REPORT_GAS,
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
    only: [],
  },
  abiExporter: {
    path: "abi",
    clear: true,
    flat: false,
  },
  solidity: {
    version: "0.8.26",
    settings: {
      optimizer: {
        enabled: false,
        runs: 10000,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: "none",
      },
    },
  },
};
