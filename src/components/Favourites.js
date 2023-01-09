import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./SearchBar.css";

const Favourites = ({ value, addToFavourites, removeFromFavourites }) => {
  const favourite = value.favourite;

  return (
    <div className="row">
      {!favourite ? (
        <>          
          <button className="dataItem" onClick={addToFavourites}>{value.city}
            <StarBorderIcon />
          </button>
        </>
      ) : (
        <>     
          <button className="dataItem" onClick={removeFromFavourites}>{value.city}
            <StarIcon />
          </button>
        </>
      )}
    </div>
  );
};

export default Favourites;
