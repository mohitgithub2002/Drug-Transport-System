import React, { useState } from 'react';
import '../../pages.css';
import {contract} from '../../connectContract';

function DrugDetail() {
  
  const [index, setIndex] = useState('');

  const [result, setResult] = useState(true);  //for showing the form submission and print response
  
  const [drug, setDrug] = useState('');  //for drug details

  async function handleSubmit(event) {
    event.preventDefault();
    const setdrug = await contract.getDrugPack(index)
    //const txreceipt = await setdrug.wait();
    console.log(setdrug);
    setDrug(setdrug);
    setResult(false);
  }

  return (
    <div className='field'>
      {result?
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
        :
        <div className='result-section'>
          <h1> Drug Name : {drug[0]}
            <br />
               Quantity : {drug[1].toString()}
          </h1>
        </div>
      }
    </div>
  );
}

export default DrugDetail;
