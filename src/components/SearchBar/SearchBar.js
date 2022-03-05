import React from "react";
import classes from "./SearchBar.css";
import { MdSearch, MdClose } from "react-icons/md";

const SearchBar = (props) => {
  return (
    <div className={classes.search}>
      <div className={classes.searchInputs}>
        <input
          type="text"
          placeholder="Enter any name of the product"
          value={props.searchval}
          onChange={props.handleType}
        />
        {/* If Any Search Value is present then display this Close Icon to clear out the data */}
        <div className={classes.searchIcon}>
          {!props.searchval ? (
            <MdSearch />
          ) : (
            <MdClose id="clearBtn" onClick={props.handleClear} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
