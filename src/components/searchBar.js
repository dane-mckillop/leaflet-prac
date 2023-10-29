
/**
 * Search bar allowing text input to search for countries and capitals.
 * Also includes a clear search button.
 * 
 * @param {*} props 
 * @returns 
 */
export default function SearchBar(props) {
    const { innerSearch, setInnerSearch, searchInputRef, handleKeyDown, handleSearch, clearSearch } = props;

    return (
        <div className="search-bar">
            <input
                aria-labelledby="search-button"
                name="search"
                id="search"
                type="search"
                value={innerSearch}
                onChange={(e) => setInnerSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                ref={searchInputRef}
            />
            <button
                className="search-button"
                onClick={handleSearch}
            >
                &#128269;
            </button>
            <button
                className="clear-button"
                onClick={clearSearch}
            >
                &#10060;
            </button>
        </div>
    )
}