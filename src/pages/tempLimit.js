import React, { useState } from 'react';
import '../pages.css';
import {contract} from '../connectContract';

function SetCarrier() {
  const [upper, setUpper] = useState('');
  const [lower, setLower] = useState('');

  const [result, setResult] = useState(true);  //for showing the form submission and print response
  

  async function handleSubmit(event) {
    event.preventDefault();
    const carrier = await contract.setTemperatureLimits( upper, lower)
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
              Maximum Temperature:
            </label>
            <input
              type="number"
              placeholder='upper limit'
              value={upper}
              className='form-input'
              onChange={(event) => setUpper(event.target.value)}
            />
            </div>
            
            
            <div className='input' >
            <label className='label'>
              Minimum Temperature:
            </label>
              <input
                type="number"
                value={lower}
                className='form-input'
                placeholder='lower limit'
                onChange={(event) => setLower(event.target.value)}
              />
            </div>
            <br />
            <button type="submit" className='form-btn'>Set Temperature</button>
          </form>
        </div>
        :
        <div className='result-section'>
          <h1>Temperature limit is updated succesfully.</h1>
        </div>
      }
    </div>
  );
}

export default SetCarrier;
