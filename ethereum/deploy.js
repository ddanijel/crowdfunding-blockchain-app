const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory')

const provider = new HDWalletProvider(
    'multiply whale dutch venue grunt purity erode wheat spy link tomorrow hurt',
    'https://rinkeby.infura.io/t4riaPPtqtIId9aHk38H');


const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account: ', accounts[0]);
    // https://ethereum.stackexchange.com/questions/47482/error-the-contract-code-couldnt-be-stored-please-check-your-gas-limit
    const result = await new web3
        .eth
        .Contract(JSON.parse(compiledFactory.interface))
        .deploy({data: '0x' + compiledFactory.bytecode})
        .send({gas: 1500000, from: accounts[0]});

    console.log('Contract deployed to: ', result.options.address);
};

deploy().catch(error => {
    console.log(error)
});