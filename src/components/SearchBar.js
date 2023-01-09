import React, { useState,useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import Favourites from "./Favourites";
import DisplayFavourites from "./DisplayFavourites";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [favouritesArray,setArray]=useState([]);
  const [datas,setDataa]=useState([]);
  const [set,setSettings]=useState(false);

  let dataa=[];
  for(let i=0; i<data.length; i++){
    const id=i;
    const city=data[i].city
    const lat=data[i].lat
    const lng=data[i].lng
    const obj = { id: id, city: city, lat: lat,lng: lng ,favourite: false};
    dataa.push(obj)
  }

  useEffect(() => {
    setDataa(dataa)  
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = datas.filter((value) => {
      return value.city.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter.slice(0,5));
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const addToFavourites = (id) => {

     filteredData.map( obj => {
      if( obj.id ===id){
        obj.favourite=true;
      }
     })
     const addFav=filteredData.find((o) => o.id===id)
     const modFavv={
      ...addFav,
      favourite: true
     }

     setArray([...favouritesArray,modFavv])
     
  };
  const removeFromFavourites = (id) => {
    filteredData.map( obj => {
      if( obj.id ===id){
        obj.favourite=false;
      }
     })
     
    var filter=favouritesArray.filter((value) => value.id!==id);
     setArray(filter)
    
 };

  return (
    <div className="search">
      <div className="row">  
        <DisplayFavourites data={favouritesArray}/>
     <div className="column">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value) => {
            return(
              <Favourites
                key={value.id}
                value={value}
                addToFavourites={() => addToFavourites(value.id)}
                removeFromFavourites={() => removeFromFavourites(value.id)}
            />
          )})}
        </div>
      )}
      </div>
      </div>
    </div>
  );
}

export default SearchBar;