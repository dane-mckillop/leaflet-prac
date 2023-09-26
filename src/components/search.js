import { useState, useRef, useEffect } from 'react';
import data from "../data/locations.json";

/**
 * Allows a user to search for a city by name.
 * Moves the marker if successful, else shows error.
 * 
 * @param {*} props position of the marker 
 * @returns 
 * @todo implement event handling for string search of a location
 */
export default function SearchBar(props) {
    const { position, setPosition, city, setCity, country, setCountry, articles, setArticles } = props;
    const [innerSearch, setInnerSearch] = useState("");
    const [isMounted, setMounted] = useState(false);
    const searchInputRef = useRef(null);
    const defaultPosition = [51.505, -0.09];

    //activates the onClick handler if the user presses enter.
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && event.target === searchInputRef.current) {
            handleSearch();
        }
    };

    //onClick handler rerenders endlessly without this function
    //include setPosition. More ideal version uses remote API service.
    //consider hosting JSON as remote file for practice.
    const handleSearch = () => {
        const locationToSearch = innerSearch.trim();
        const foundLocation = data.find(location => {
            const lowerCaseSearch = locationToSearch.toLowerCase();
            return (
              location.name.toLowerCase() === lowerCaseSearch ||
              location.country.toLowerCase() === lowerCaseSearch
            );
          });
    
        if (foundLocation) {
            setPosition([foundLocation.latitude, foundLocation.longitude]);
            setCity(`${foundLocation.city}`);
            setCountry(`${foundLocation.country}`);
            
        } else {
            console.log("Location not found.");
        }
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
            console.log(position);
        } else {
            setMounted(true);
        }
    }, [position]);

    /**
     * Outputs the articles each time a news-api call is made.
     * 
     * @todo Move this useEffect to component such as sidebar. More sophistication than console.log.
     * @param {*} props articles to be presented to user.
     * @returns Stories relating to the searched country
     */
        useEffect(() => {
            if (isMounted) {
                console.log(articles);
            } else {
                setMounted(true);
            }
    }, [articles]);

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
        </div>
    )
}