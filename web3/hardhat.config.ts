import dotenv from 'dotenv';
import '@nomiclabs/hardhat-ethers';

dotenv.config();

export default {
  solidity: {
    version: '0.8.16',
    settings: {
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
  networks: {
    sphinx: {
      url: 'https://sphinx.shardeum.org/',
      accounts: [process.env.pk],
      // gas: 'auto',
      // timeout: 200000,
    },
    mumbai: {
      url: 'https://rpc.ankr.com/polygon_mumbai',
      accounts: [process.env.pk],
    },
  },
}
