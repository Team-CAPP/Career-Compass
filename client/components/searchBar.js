function SearchBar({onSearch}) {
//when the onSearch event occurs, destructure off of whatever is input to useState
// setting a search input as state varible and setSearch input as setter function
const [searchInput, setSearchInput] = useState("");
const handleSearch = () => {
    onSearch(searchTerm)
}
}

return (
    <div>
        <input type="text" placeholder="Search" value={searchTerm} onChange={(e)=setSearchTerm(e.target.value)}/>
        <button onCLick={handleSearch}>Search</button>
    </div>
)