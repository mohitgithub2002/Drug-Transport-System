import React, { useState } from 'react';
import '../pages.css';
import {contract} from '../connectContract';

function SetManufacturer() {
  
  const [manufacturer, setManufacturer] = useState('');

  const [result, setResult] = useState(true);  //for showing the form submission and print response
  

  async function handleSubmit(event) {
    event.preventDefault();
    const setmanu = await contract.setManufacturer(manufacturer)
    const txreceipt = await setmanu.wait();
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
              Manufacturer address: 
            </label>
              <input
                type="text"
                value={manufacturer}
                className='form-input'
                placeholder='address'
                onChange={(event) => setManufacturer(event.target.value)}
              />
            </div>
            <br />
            <button type="submit" className='form-btn'>Update Manufacturer</button>
          </form>
        </div>
        :
        <div className='result-section'>
          <h1> Manufacturer detail updated</h1>
        </div>
      }
    </div>
  );
}

export default SetManufacturer;
