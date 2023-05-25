import React, { useState } from 'react';
import Swal from 'sweetalert2'
import '../pages.css';
import {contract} from '../connectContract';

function SetCarrier() {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    try{const carrier = await contract.setCarrier( address, city)
    const txreceipt = await carrier.wait();
    Swal.fire({
      icon: 'success',
      title: 'Carrier Details',
      text: 'carrier deatils set successfully'
  })}catch(error){
    Toast.fire({
      icon: 'error',
      title: 'Only the drug owner or manufacturer can set the carrier address and city'
    })
  }
  }

  return (
    <div className='field'>
      
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
              Carrier City:
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
        
    </div>
  );
}

export default SetCarrier;
