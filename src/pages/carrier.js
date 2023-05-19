import React, { useState } from 'react';
import '../pages.css';
import {contract} from '../connectContract';

function SetCarrier() {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  const [result, setResult] = useState(true);  //for showing the form submission and print response
  

  async function handleSubmit(event) {
    event.preventDefault();
    const carrier = await contract.setCarrier( address, city)
    const txreceipt = await carrier.wait();
    console.log(txreceipt);
    setResult(false);
  }

  return (
    <div className='field'>
      {result?
        <div>
          <form onSubmit={handleSubmit} className="form">
            <div className='input' >
            <label className='label'>
              Carrier Address:
            </label>
            <input
              type="text"
              placeholder='wallet address'
              value={address}
              className='form-input'
              onChange={(event) => setAddress(event.target.value)}
            />
            </div>
            
            
            <div className='input' >
            <label className='label'>
              Password:
            </label>
              <input
                type="text"
                value={city}
                className='form-input'
                placeholder='city'
                onChange={(event) => setCity(event.target.value)}
              />
            </div>
            <br />
            <button type="submit" className='form-btn'>Set Carrier</button>
          </form>
        </div>
        :
        <div className='result-section'>
          <h1>Carrier with {address} in {city} is registered</h1>
        </div>
      }
    </div>
  );
}

export default SetCarrier;
