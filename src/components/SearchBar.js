import React, {useState} from "react";

function SearchBar(){

    const [searchText, setSearchText] = useState("");

    function changeHandler(eventObj){
        setSearchText(eventObj.target.value);
    }

    return (
        <>
            <label htmlFor="searchText">Search :</label>
            <input id="searchText" type="text" name="searchInput" value={searchText} onChange = {changeHandler} />
        </>
    )
}


export default SearchBar;