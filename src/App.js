import './App.css';
import React, { useState } from 'react';
import SearchBar from "./components/SearchBar"
import Data from './gradovi.json';
import "./components/SearchBar.css";
import {
  Link
} from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';

const App = ( ) => {


  return (
  <div>
    <h2 style={{fontSize:"300%"}}><span style={{color:"#71cccc", fontWeight: "bold"}}>Meteo app</span> </h2>
    <Link to="/Settings" className='set'><SettingsIcon style={{fontSize: "50px"}}> </SettingsIcon></Link>
    <div className=''>
      <SearchBar placeholder="Input city.." data={Data} />
    </div>  

  </div>


  );
}

export default App;
