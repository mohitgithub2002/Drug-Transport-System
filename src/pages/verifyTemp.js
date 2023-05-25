import React, { useState } from 'react';
import '../pages.css';
import Swal from 'sweetalert2'
import {contract} from '../connectContract';

function VerifyTemp() {
  
  const [temp, setTemp] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const settemp = await contract.checkTemperature(temp)
    
    
    Swal.fire({
      icon: 'info',
      title: 'Tempreature ',
      text: settemp
  })
  }

  return (
    <div className='field'>
      
        <div>
          <form onSubmit={handleSubmit} className="form">
            
            <div className='input' >
            <label className='label'>
              Temperature
            </label>
              <input
                type="number"
                value={temp}
                className='form-input'
                placeholder='Current temperature'
                onChange={(event) => setTemp(event.target.value)}
              />
            </div>
            <br />
            <button type="submit" className='form-btn'>Check Temperature</button>
          </form>
        </div>
        
    </div>
  );
}

export default VerifyTemp;
