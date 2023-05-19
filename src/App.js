import './App.css';
import { useState } from 'react';
import connectContract from './connectContract'

import Routes from './Routes';

function App() {
  const [account, setAccount] = useState(false);
  
  // page rendering
  
  //connect to metamask
  const { ethereum } = window;
  const connectMetamask = async () => {
    if(window.ethereum !== undefined){
      const accounts = await ethereum.request({method: 'eth_requestAccounts'});
      setAccount(accounts[0]);
    }
    
  }

  //connect to contract
   connectContract();


  return (
    <div className="App">
      
      <header className="App-header">
        <h1>Drug Transportation</h1>
        
        <button onClick = {connectMetamask}  >{account? `${account.substring(0,4)}....${account.substring(((account.length)-4),(account.length))}`:"Connect to Metamask" }</button> <br />
      </header>
      <div className = "content">
        <div >
          <Routes />
        </div>
      </div>
      <footer>
        All rights reserved @2023
      </footer>
    </div>
  );
}



export default App;
