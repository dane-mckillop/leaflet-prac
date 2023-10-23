import { useState, useRef, useEffect } from 'react';
import data from "../data/locations.json";
import FetchNews from "../api/fetchNews.js";
import SearchBar from "./searchBar.js";

/**
 * Allows a user to search for a city by name.
 * Moves the marker if successful, else shows error.
 * 
 * @param {*} props position of the marker 
 * @returns 
 * @todo implement event handling for string search of a location
 */
export default function Search(props) {
    const { position, setPosition, city, setCity, country, setCountry, articles, setArticles, setShowAlert } = props;
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
            setPosition([foundLocation.latitude, foundLocation.longitude])
            setCity(`${foundLocation.name}`);
            setCountry(`${foundLocation.country}`)
            FetchNews(foundLocation.country)
                .then((response) => {
                    console.log(articles);
                })
                .catch((error) => {
                    console.error('Error fetching stories:', error);
                });
        } else {
            setShowAlert(true);
        }
    };

    /**
     * Checks if the application has mounted, then outputs the results of test.
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
    */
    useEffect(() => {
        if (isMounted) {
            console.log(articles);
        } else {
            setMounted(true);
        }
    }, [articles]);

    return (
        <SearchBar innerSearch={innerSearch} setInnerSearch={setInnerSearch} searchInputRef={searchInputRef} handleKeyDown={handleKeyDown} handleSearch={handleSearch} />
    )
}