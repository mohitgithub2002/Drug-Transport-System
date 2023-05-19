import React, { useState } from 'react';
import Swal from 'sweetalert2'
import '../pages.css';
import {contract} from '../connectContract';

function AddDrug() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const drug = await contract.addDrugPack( name, quantity)
    const txreceipt = await drug.wait();
    
    Swal.fire({
      icon: 'success',
      title: 'Drug Details',
      text: 'New drug added successfully'
  })
  }

  return (
    <div className='field'>
      
        <div>
          <form onSubmit={handleSubmit} className="form">
            <div className='input' >
            <label className='label'>
              Drug Name:
            </label>
            <input
              type="text"
              placeholder='name'
              value={name}
              className='form-input'
              onChange={(event) => setName(event.target.value)}
            />
            </div>
            
            
            <div className='input' >
            <label className='label'>
              Amount:
            </label>
              <input
                type="number"
                value={quantity}
                className='form-input'
                placeholder='quantity'
                onChange={(event) => setQuantity(event.target.value)}
              />
            </div>
            <br />
            <button type="submit" className='form-btn'>Add Drug</button>
          </form>
        </div>
        
    </div>
  );
}

export default AddDrug;
