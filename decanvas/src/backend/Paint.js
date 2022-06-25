import Web3 from 'web3';
import abi from '/abi.json'


const web3 = new Web3('https://polygon-mumbai.g.alchemy.com/v2/14P4Hn_rrP0FgmgvwI2ndrHR-xDRvghb');
const ABI = abi;
const CONTRACT_ADDRESS = '0x4484b06AbEdebd1208d930433141BB9C1eC6fB7a';
const deCanvasContract = new Web3.Contract(ABI, CONTRACT_ADDRESS);


const Paint = () => {

    const PaintCell = async () => {
        const PaintObject = await deCanvasContract.methods.paint(100, 100).send();

        let options = {
            fromBlock: 0,
            address: [],    //Only get events from specific addresses
            topics: []
        };

        let subscription = web3.eth.subscribe('logs', options, (err, event) => {
            if (!err)
                console.log(event)
        });

        subscription.on('data', event => console.log(event))
        subscription.on('changed', changed => console.log(changed))
        subscription.on('error', err => { throw err })
        subscription.on('connected', nr => console.log(nr))
    }

    return (
        <button className="PaintButton" onClick={PaintCell}>
            Paint
        </button>
    );
}


export default Paint;
