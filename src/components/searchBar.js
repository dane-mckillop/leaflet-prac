

export default function SearchBar(props) {
    const {innerSearch, setInnerSearch, searchInputRef, handleKeyDown, handleSearch, clearSearch} = props;

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
                Search
            </button>
            <button
            className="clear-button"
            onClick={clearSearch}
            >
                X
            </button>
        </div>
    )
}