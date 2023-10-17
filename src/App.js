import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {Alert} from 'react-bootstrap';
import L from 'leaflet';
import iconURL from "./icons/placeholder.png"
import "./styles.css";
import "leaflet/dist/leaflet.css";

import SearchBar from "./components/search.js";
import NewsBar from './components/newsBar.js';

const baseMarker = L.icon({
  iconUrl: iconURL,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

/**
 * Main application page. Contains the map, search and title.
 * 
 * @returns 
 */
export default function App() {
  const defaultPosition = [51.5074, -0.1278];
  const defaultCity = "London";
  const defaultCountry = "United Kingdom";
  const baseZoom = 13;
  const [position, setPosition] = useState(defaultPosition)
  const [city, setCity] = useState(defaultCity);
  const [country, setCountry] = useState(defaultCountry);
  const [articles, setArticles] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const markerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.leafletElement.setLatLng(position);
    }
    if (mapRef.current) {
      mapRef.current.setView(position, baseZoom);
    }
  }, [position]);

 /* 
  * Resets the showAlert to false 2 seconds after set true.
  * Responsible for displaying the alert message.
 */
  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [showAlert]);

  return (
    <div className="app-container">
      {showAlert ?
        <Alert key='missing-city' variant='info'>
          Location not found!
        </Alert>
        :
        <SearchBar position={position} setPosition={setPosition} city={city} setCity={setCity} country={country} setCountry={setCountry} articles={articles} setArticles={setArticles} setShowAlert={setShowAlert} className="search-bar" />
      }
      {/*<NewsBar articles={articles}></NewsBar> To be fixed, breaks map and app*/}
      <MapContainer center={position} zoom={baseZoom} ref={mapRef} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="..."
        />
        <Marker position={position} icon={baseMarker}>
          <Popup>
            {city}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}