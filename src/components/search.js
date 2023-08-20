import { useState, useRef, useEffect } from 'react';

/**
 * Allows a user to search for a city by name.
 * Moves the marker if successful, else shows error.
 * 
 * @param {*} props position of the marker 
 * @returns 
 * @todo implement event handling for string search of a location
 */
export default function SearchBar(props) {
    const { position, setPosition } = props;
    const [innerSearch, setInnerSearch] = useState("");
    const [isMounted, setMounted] = useState(false);
    const searchInputRef = useRef(null);

    //activates the onClick handler if the user presses enter.
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && event.target === searchInputRef.current) {
            handleSearch();
        }
    };

    //onClick handler rerenders endlessly without this function
    const handleSearch = () => {
        fetch('../data/locations.json')
            .then((response) => response.json())
            .then((json) => console.log(json));
    };

    /**
     * Checks if the application has mounted, then outputs the results of test.
     * 
     * @todo when "innersearch" state changes, update position location. Check if innersearch is a valid location.
     * @param {*} props position of the marker
     * @returns
     */
    useEffect(() => {
        if (isMounted) {
            setPosition('')
            console.log(position);
        } else {
            setMounted(true);
        }
    }, [position]);

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
                onClick={handleSearch} //CHANGE LATER TO SOME API CALL
            >
                Search
            </button>
        </div>
    )
}