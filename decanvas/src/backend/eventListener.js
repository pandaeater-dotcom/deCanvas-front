import Web3 from 'web3';
import abi from '/abi.json'


const web3 = new Web3('https://polygon-mumbai.g.alchemy.com/v2/14P4Hn_rrP0FgmgvwI2ndrHR-xDRvghb');
const ABI = abi;
const CONTRACT_ADDRESS = '0x7f390c2c7bbb4955cd4006ff8ec41b4099c1a916';
const myContract = new Web3.Contract(ABI, CONTRACT_ADDRESS);


