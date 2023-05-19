import React, { useState , useEffect} from 'react';
import '../pages.css';
import Swal from 'sweetalert2'
import {contract} from '../connectContract';

function VerifyTemp() {
  
  const [temp, setTemp] = useState('');
  const [msg, setMsg] = useState('Tempreature of drugs are in limit');  //for showing the form submission and print response
  
  useEffect(() => {
    // Subscribe to the event when the component mounts
    if (contract) {
      contract.on('TemperatureAlert', (message) => {
        console.log('Event data:', message);
        setMsg(message);
      });
    }

    return () => {
      // Unsubscribe from the event when the component unmounts
      if (contract) {
        contract.removeAllListeners('TemperatureAlert');
      }
    };
  }, [contract]);

  async function handleSubmit(event) {
    event.preventDefault();
    const settemp = await contract.checkTemperature(temp)
    const txreceipt = await settemp.wait();
    
    Swal.fire({
      icon: 'info',
      title: 'Tempreature ',
      text: msg
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
