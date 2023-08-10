import {useState, useRef} from 'react';

export default function SearchBar(props) {
    const [innerSearch, setInnerSearch] = useState("");
    const [test, setTest] = useState("");
    const { position, setPosition } = props;
    const searchInputRef = useRef(null);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && event.target === searchInputRef.current) {
            setPosition(innerSearch);
        }
    };

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
            //onClick={setTest(innerSearch)} //UPDATE TO SOME API CALL
        >
            Search
        </button>
    </div>
    )
}