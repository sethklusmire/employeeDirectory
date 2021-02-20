import React from "react";

const Search = (props) => {
    return (
        <form>
            <input type="text" className="input" onChange={props.handleInputChange} value={props.search} placeholder="Search for Employee" />

        </form>

    )

}


export default Search;