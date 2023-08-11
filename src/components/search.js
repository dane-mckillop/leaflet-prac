import { useState, useRef, useEffect } from 'react';

/**
 * Allows a user to search for a city by name.
 * Moves the marker if successful, else shows error.
 * 
 * @param {*} props position of the marker 
 * @returns 
 */
export default function SearchBar(props) {
    const { position, setPosition } = props;
    const [innerSearch, setInnerSearch] = useState("");
    const [isMounted, setMounted] = useState(false);
    const [test, setTest] = useState("");
    const searchInputRef = useRef(null);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && event.target === searchInputRef.current) {
            setPosition(innerSearch);
        }
    };

    //onClick handler rerenders endlessly without this function
    const handleSearch = () => {
        setTest(innerSearch);
    };

    useEffect(() => {
        if (isMounted) {
            console.log(test);
        } else {
            setMounted(true);
        }
    }, [test]);

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