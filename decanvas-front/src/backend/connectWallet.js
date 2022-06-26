import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import data from './abi.json'
import { getAddress } from "ethers/lib/utils.js";
import { updateData } from "./database.js";

const ConnectWallet = (props) => {
    console.log(props.sqId);
    console.log(props.sqColor)
    const [currentAccount, setCurrentAccount] = useState("");

    const checkIfWalletIsConnected = async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                console.log("Make sure you have metamask!");
                return;
            } else {
                console.log("We have the ethereum object", ethereum);
            }

            const accounts = await ethereum.request({ method: "eth_accounts" });

            if (accounts.length !== 0) {
                const account = accounts[0];
                console.log("Found an authorized account:", account);
                setCurrentAccount(account);
            } else {
                console.log("No authorized account found")
            }
        } catch (error) {
            console.log(error);
        }
    }

    /**
    * Implement your connectWallet method here
    */
    const connectWallet = async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                alert("Get MetaMask!");
                return;
            }

            const accounts = await ethereum.request({ method: "eth_requestAccounts" });

            console.log("Connected", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error)
        }
    }

    const Canvas = async () => {
        try {
            const { ethereum } = window;

            if (ethereum) {

                const provider = new ethers.providers.Web3Provider(ethereum);
                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner();
                // const provider = new ethers.getDefaultProvider("https://polygon-mumbai.g.alchemy.com/v2/14P4Hn_rrP0FgmgvwI2ndrHR-xDRvghb")
                const abi = data.abi;
                //const wallet = ethers.Wallet.createRandom();
                //const signer = provider.getSigner(currentAccount);
                const signeraddress = signer.getAddress();
                const CanvasContract = new ethers.Contract("0x4484b06AbEdebd1208d930433141BB9C1eC6fB7a", abi, signer);

                let paintTxn = await CanvasContract.paint(parseInt(props.sqId), parseInt(props.sqColor));
                // console.log(sqID, sqColor);
                console.log(`Transaction hash: ${paintTxn.hash}`);
                const receipt = await paintTxn.wait()
                const paintEvents = await CanvasContract.queryFilter('Paint',
                    receipt.blockNumber,
                    receipt.blockNumber
                );
                console.log(paintEvents);
                let update = await updateData(parseInt(props.sqId),parseInt(props.sqColor).toString(16));
            } else {
                console.log("Ethereum object doesn't exist!");
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, [])

    return (
        (<>
            <button className="CanvasButton" onClick={connectWallet}>
                Connect Wallet
            </button>
            <button className="TransactionButton" onClick={Canvas}>
                Paint
            </button>
        </>
        )
    );

}

export default ConnectWallet;