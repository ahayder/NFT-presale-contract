require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const GOERLI_API_KEY_URL = process.env.GOERLI_API_KEY_URL;

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: GOERLI_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};