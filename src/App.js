import { ethers } from "ethers";
import { useEffect } from "react";

import logo from "./logo.svg";

import "./App.css";

// The ERC-20 Contract ABI, which is a common contract interface
// for tokens (this is the Human-Readable ABI format)
const daiAbi = [
  // Some details about the token
  "function name() view returns (string)",
  "function symbol() view returns (string)",

  // Get the account balance
  "function balanceOf(address) view returns (uint)",

  // Send some of your tokens to someone else
  "function transfer(address to, uint amount)",

  // An event triggered whenever anyone transfers to someone else
  "event Transfer(address indexed from, address indexed to, uint amount)",
];

function App() {
  useEffect(() => {
    const x = async function () {
      //const provider = new ethers.providers.Web3Provider(window.ethereum);
      const provider2 = new ethers.providers.JsonRpcProvider();
      //const acc = await provider2.listAccounts();

      const wallet = ethers.Wallet.createRandom();
      console.log(
        wallet.privateKey,
        wallet.publicKey,
        wallet.address,
        wallet.mnemonic
      );

      provider2.getNetwork();
      // const a = await provider2.getSigner(1);
      // const bal = await a.getBalance();
      // console.log("ACCCCC", bal.toString());

      // const tx = signer.sendTransaction({
      //   to: "0x0d787a4a1548f673ed375445535a6c7a1ee56180",
      //   value: ethers.utils.parseEther("0.0000002"),
      // });
    };
    x();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'></header>
    </div>
  );
}

export default App;
