import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';
dotenv.config();

const config: HardhatUserConfig = {
  solidity: '0.8.28',
  networks: {
    sepolia: {
      url: 'https://sepolia.infura.io/v3/7a2f1e9b214448069fe349701c066903',
      accounts: [
        process.env.PRIVATE_KEY || '', // Todo: Kairos에서 제공하는 프라이빗 키 사용(.env 파일을 사용합니다)
      ],
    },
  },
};

export default config;
