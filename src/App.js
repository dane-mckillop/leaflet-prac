import React, {useState, useEffect, useRef} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import iconURL from "./icons/placeholder.png"
import "./styles.css";
import "leaflet/dist/leaflet.css";

import SearchBar from "./components/search.js";

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
  const [position, setPosition] = useState(defaultPosition)
  const [city, setCity] = useState(defaultCity);
  const markerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.leafletElement.setLatLng(position);
    }
    if (mapRef.current) {
      mapRef.current.setView(position);
    }
  }, [position]);

  return (
    <div className="app-container">
      <SearchBar position={position} setPosition={setPosition} city={city} setCity={setCity} className="search-bar"/>
      <MapContainer center={position} zoom={13} ref={mapRef} className="map-container">
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