require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture strategy rival pave code hundred light army gas'; 
let testAccounts = [
"0x0fbac2cd04d60c011350417325f8ae7a2253f14f8d07bcfa9c93fa8e10fbb971",
"0xfe29221f1e7a764e5e7a526f6774dd4486d4de584837cfff8e1587107d9e837b",
"0x56fdc6c51d6abd116c30ad21e38bc520aebdb37d0c6a5fbec3bc9511ed9abce5",
"0xb3c5eb3ef9138e8b42b737e058ffd3e47d045116045f3943adb3a2c72ace9aae",
"0x9b32e24fc3886f318479063b37887250789b3e4ed34f1e549d60885e458a20e1",
"0xddf1cff40522ce3613b7406debb3b4695d58d9f9b0e8f3eedcee7d9edefae79d",
"0x61701d67c7dc4b7a51c2588ec1e4374f6d428dfb52929f03e0465b03ceacb9d9",
"0x0136444c20716da19724eb7bb2c333cc3f89dbd79561a2072c95a25d80f8b601",
"0xb24441be2b9adfeb52205cbd72a69db636c5dfbca1b79a91ca9c098aa482e575",
"0xc0bf29eb098a7b0dad4cca9a5e8f988df4cb929d73e3fd61838cfe74517b7d51"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

