import React, {useState } from "react";
import "./DisplayFavourites.css";


const DisplayFavourites = ({data}) => {
  const [sortArr,setSort]=useState(false);


 const sortArray = ()=>{
     if(sortArr===false){
        data.sort((a, b) => b.city.localeCompare(a.city))
        setSort(true)
     }else{
        data.sort((a, b) => a.city.localeCompare(b.city))
        setSort(false)
     }
 }


 return(  
    <div className="sidebar">
        <h2 style={{fontSize:"300%"}}><span style={{color:"#ebfae9", fontWeight: "bold"}}>Favourites</span> </h2>
        <button className="sortbutton" onClick={sortArray}>{sortArr ? "Sort alphabetically": "Sort alphabetically backwards"}
        </button>
        {data.map((o) => {
        return(
            <div>
                <a className="favourite" href={`https://api.open-meteo.com/v1/forecast?latitude=${o.lat}&longitude=${o.lng}&hourly=temperature_2m&current_weather=true&timeformat=unixtime&timezone=Europe%2FBerlin&past_days=1`} target="_blank">{o.city}</a>
            </div>
        )
    })}
    </div>
   
 )
}

export default DisplayFavourites;

