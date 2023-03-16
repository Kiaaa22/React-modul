import React from "react";
import {Routes, Route} from 'react-router-dom';
//import { Button } from 'semantic-ui-react'

import Beranda from "./Home";
import TentangSaya from "./TentangSaya";
import Kontak from "./Kontak";
import Gallery from "./Gallery";
import Home from "./Home";

const Utama = () => (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/TentangSaya" element={<TentangSaya/>} />
        <Route path="/Gallery" element={<Gallery/>} />
        <Route path="/Kontak" element={<Kontak/>} />
    </Routes>
    
)

export default Utama;