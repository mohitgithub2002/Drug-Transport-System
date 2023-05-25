import React, { useState } from 'react';
import Swal from 'sweetalert2'
import '../../pages.css';
import {contract} from '../../connectContract';

function DrugDetail() {
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
  
  const [index, setIndex] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    try{const setdrug = await contract.getDrugPack(index)
    //const txreceipt = await setdrug.wait();
    Swal.fire({
      icon: 'info',
      title: 'Drug Details',
      text: 'Name: '+setdrug[0]+'Quantity: '+setdrug[1]
  })
  }catch(error){
    Toast.fire({
      icon: 'error',
      title: error.reason
    })
}
  }

  return (
    <div className='field'>
      
        <div>
          <form onSubmit={handleSubmit} className="form">
            
            <div className='input' >
            <label className='label'>
              Drug Index
            </label>
              <input
                type="number"
                value={index}
                className='form-input'
                placeholder='index'
                onChange={(event) => setIndex(event.target.value)}
              />
            </div>
            <br />
            <button type="submit" className='form-btn'>Show Details</button>
          </form>
        </div>
        
    </div>
  );
}

export default DrugDetail;
