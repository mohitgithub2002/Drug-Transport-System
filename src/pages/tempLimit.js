import React, { useState } from 'react';
import '../pages.css';
import Swal from 'sweetalert2'
import {contract} from '../connectContract';

function SetCarrier() {
  const [upper, setUpper] = useState('');
  const [lower, setLower] = useState('');

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
  

  async function handleSubmit(event) {
    event.preventDefault();
    try{
    
    const carrier = await contract.setTemperatureLimits( upper, lower)
    const txreceipt = await carrier.wait();
    Swal.fire({
      icon: 'success',
      title: 'Tempreature limit',
      text: 'tempreature limit set successfully'
    })}catch(error){
      Toast.fire({
        icon: 'error',
        title: 'Only Owner can set the temperature limit'
      })
    }
  }

  return (
    <div className='field'>
     
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
        
      
    </div>
  );
}

export default SetCarrier;
