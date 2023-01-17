import React from 'react';
import "./Settings.css";
import {
  Link
} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

const Settings = () => {
 
   const defaultSet = ()  =>{
     return;
}

const deleteFav = () =>{
   return;
}

 return(
   <div>
   <h2 style={{fontSize:"300%"}}><span style={{color:"#71cccc", fontWeight: "bold"}}>Settings</span> </h2>
   <Link to="/" className='set'><HomeIcon style={{fontSize: "50px"}} /></Link>
    <div className='temperature'> 
          <label>Temperature Unit</label>
      <div className='row'>
      <input type="radio" value="C" name="temperature" /> Celsius 
      <input type="radio" value="F" name="temperature" /> Fahrenheit
      </div>
      </div>
      <div className='wind'> 
      <label>Wind Speed Unit</label>
      <div className='row'>
      <input type="radio" value="km/h" name="wind" /> km/h 
      <input type="radio" value="m/s" name="wind" /> m/s
      <input type="radio" value="mph" name="wind" /> mph 
      <input type="radio" value="kn" name="wind" /> kn
      </div>
      </div>
      <div className='percipitation'>
      <label>Percipitation Unit</label>
      <div className='row'>
      <input type="radio" value="mm" name="perc" /> Milimeter 
      <input type="radio" value="inch" name="perc" /> Inch
      </div>
      </div>
      <div className='timezone'>
      <label>Timezone</label>
      <div className='row'>
      <select>
        <option value="utc">UTC</option>
        <option value="Europe/Berlin">Europe/Berlin</option>
        <option value="USA">USA</option>
      </select>
      </div>
      </div>
      <div className='pastdays'>
      <label>Past days</label>
      <div className='row'>
      <select>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      </div>
      </div>
      
 </div>
 
 )
 }

export default Settings;