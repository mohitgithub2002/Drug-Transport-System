import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import React, { useState } from 'react';
import '../pages.css'
import {contract} from '../connectContract';
function Home (){

    const[result, setResult] = useState("Drug Transport System");

    const navigate = useNavigate();
  
    const showtemplimit = async() => {
        const templimit = await contract.getTemperatureLimits();
        Swal.fire({
            icon: 'info',
            title: 'Tempreature limit',
            text: templimit.toString()
        })
    }
    const drugowner = async() => {
        
        const drugowner = await contract.getDrugOwner();
        Swal.fire({
            icon: 'info',
            title: 'Drug Owner',
            text: drugowner
        })
    }
    const getmanufacturer = async() => {
        const manufacturer = await contract.getManufacturer();
        Swal.fire({
            icon: 'info',
            title: 'Manufacturer',
            text: manufacturer
        })
    }
    const getcarrier = async() => {
        const carrier = await contract.getCarrier();
        Swal.fire({
            icon: 'info',
            title: 'Carrier Details',
            text: carrier
        })
    }
    const getcity = async() => {
        const city = await contract.getCity();
        Swal.fire({
            icon: 'info',
            title: 'Carrier City',
            text: city
        })
    }
    const drugcount = async() => {
        const drugcount = await contract.getDrugPacksCount();
        Swal.fire({
            icon: 'info',
            title: 'Total Drug Packs',
            text: drugcount.toString()
        })
    }
    const drugdetail = () => {
        navigate('drugdetails');
    }

return (
    
    <div className="view-field">
        <div className = "home-section">
        <button onClick={showtemplimit} className="button" >Show Temp Limit</button><br />
        <button onClick={drugowner} className="button">Drug Owner</button><br />
        <button onClick={getmanufacturer} className="button"> Manufacturer</button><br />
        <button onClick={getcarrier} className="button">Carrier Details</button><br />
        <button onClick={getcity} className="button">Carrier City</button><br />
        <button onClick={drugcount} className="button">Total Drug Packs</button><br />
        <button onClick={drugdetail} className="button">Drug Details</button><br />
        </div>
    </div>
)
}

export default Home;