require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strong riot rural mistake just neck flock trend'; 
let testAccounts = [
"0x6f540609d6bcc37c77da4a94e2933d9d3425ca4066e124c71c01fcb7ea181e37",
"0xc4e77cd221c0e69a383fe5aa5ae17861e6c61b36b2685985ed5ea645fe370260",
"0x6f6bf93a9792bcdce6d818c6b6ce99dab6bff3603b2094b28a35179240622ac6",
"0x8123bc0cca1d805fb092e793a6e817b085ecc9890e2385aa8d1335001f358628",
"0xe1fb4d5b8aa6888604e1dda31e79c37e684bc249d724feca1b84b4f9694d776d",
"0xe71637e5cacbf442628388238332e0f69a3358ac49f6166e86124e21171c4b57",
"0xd4b8dde65cd845f9c0d46123cca970d5306dbf34c0dd91acd188bf2ea0f6727f",
"0xc8f90388964d761039e80e2e6081c803d7a22123526924cfd38a06a818f7a66a",
"0x41fa53874739d492a0553bada78b7fa969fc3f332b2a6adbd8cf90f55f39a13c",
"0x1d5342dfdcbc2efa5f759de26d3fbef5d9f7309ffd6c039e5726c046e3ca1170"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

