import React, {useState} from 'react';

function SearchBar({onSearch}) {
    //when the onSearch event occurs, destructure off of whatever is input to useState
    // setting a search input as state varible and setSearch input as setter function
    const [searchInput, setSearchInput] = useState("");
    const handleSearch = (e) => {
        onSearch(searchInput)
    }
    
    return (
        <div>
            <input type="text" placeholder="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
        </div>
    )
}
export default SearchBar