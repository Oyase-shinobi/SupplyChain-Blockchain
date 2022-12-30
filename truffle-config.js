const HDWalletProvider = require("@truffle/hdwallet-provider");
var mnemonic = "drop prosper buffalo evolve biology review obey damage owner birth nothing mobile";

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*",
        },
        ropsten: {
            provider: function () {
                return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/db7278945d1741a4963fdcaa6a0c47e6");
            },
            network_id: 3,
            gas: 4500000,
            gasPrice: 10000000000
        },
        
        celo : {
            provider: function () {
                return new HDWalletProvider(mnemonic, "https://celo-alfajores.infura.io/v3/7ce2a29ad3ea4e5aae4e47875212c659");
            },
            network_id: 1,
            gas: 7500000,
            gasPrice: 10000000000
        }
    }
};
