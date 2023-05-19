import React, { useState } from 'react';
import Swal from 'sweetalert2'
import '../pages.css';
import {contract} from '../connectContract';

function SetManufacturer() {
  
  const [manufacturer, setManufacturer] = useState('');  

  async function handleSubmit(event) {
    event.preventDefault();
    const setmanu = await contract.setManufacturer(manufacturer)
    const txreceipt = await setmanu.wait();
    Swal.fire({
      icon: 'success',
      title: 'Manufacturer Details',
      text: 'Manufacturer deatils updated successfully'
  })
  }

  return (
    <div className='field'>
      
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
        
    </div>
  );
}

export default SetManufacturer;
