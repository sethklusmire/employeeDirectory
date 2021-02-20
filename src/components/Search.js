import React from "react";

const Search = (props) => {
    return (
        <div>
            <input type="text" className="input" onChange={props.handleInputChange} value={props.search} placeholder="Search for Employee" />






        </div>





    )




}



export default Search;