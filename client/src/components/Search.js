import React from "react";

function Search({search, searchChange}) {
    

    return(
        <form>
            <input
                type="text"
                name="search"
                placeholder="search for a god"
                value={search}
                onChange={e => searchChange(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default Search