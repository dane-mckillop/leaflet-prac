import {Alert} from 'react-bootstrap';
import Search from "./search.js";

export default function Header(props) {
    const { position, setPosition, city, setCity, country, setCountry, articles, setArticles, showAlert, setShowAlert } = props;

    return (
        <div className="header-container">
            {showAlert ? /* consider changing to Notification in future, transparent fade in/out */
                <Alert className='missing-city' variant='info'>
                    Location not found!
                </Alert>
                :
                <Search position={position} setPosition={setPosition} city={city} setCity={setCity} country={country} setCountry={setCountry} articles={articles} setArticles={setArticles} setShowAlert={setShowAlert} className="search" />
            }
        </div>
    )
}