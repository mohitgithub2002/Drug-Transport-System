import React, { Component } from "react";
import {  Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Carrier from './pages/carrier';
import Drug from './pages/drug';
import Temperature from './pages/verifyTemp';
import SetLimit from './pages/tempLimit';
import SetManufacturer from './pages/manufacturer';
import ViewDetails from './pages/viewDetails';
import DrugDetails from './pages/viewdetails/drugdetails';
export default class routes extends Component {
    render() {
        return (
            
                <Routes>
                    <Route path="/"  element={<Home />} />
                    <Route path="/settemplimit" element={<SetLimit />} />
                    <Route path="/manufacturer" element={<SetManufacturer />} />
                    <Route path="/carrier" element={<Carrier />} />
                    <Route path="/drug" element={<Drug />} />
                    <Route path="/temperature" element={<Temperature />} />
                    <Route path="/viewdetails" element={<ViewDetails />} />
                    <Route path="/viewdetails/drugdetails" element={<DrugDetails />} />
                </Routes>
            
        )
    }
}