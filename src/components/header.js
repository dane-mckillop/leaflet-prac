import { Alert } from 'react-bootstrap';
import Search from "./search.js";

/**
 * Header component that holds the search and main widget components.
 * Every page includes the header, and is placed above the route content.
 * 
 * @param {*} props 
 * @returns 
 */
export default function Header(props) {
    const { position, setPosition, city, setCity, country, setCountry, articles, setArticles, showAlert, setShowAlert } = props;

    return (
        <div className="header-container">
            {articles !== null && (
                <div className="btn-articles-container">
                    <button className="btn-articles" onclick="openNav()">&#9776;</button>
                </div>
            )}
            <div className="search-container">
                {showAlert ? /* consider changing to Notification in future, transparent fade in/out */
                    <Alert className='missing-city' variant='info'>
                        Location not found!
                    </Alert>
                    :
                    <Search position={position} setPosition={setPosition} city={city} setCity={setCity} country={country} setCountry={setCountry} articles={articles} setArticles={setArticles} setShowAlert={setShowAlert} className="search" />
                }
            </div>
        </div>
    );
}