import React, {useState} from 'react';
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
  const [position, setPosition] = useState([51.505, -0.09])

  return (
    <div className="app-container">
      <SearchBar position={position} setPosition={setPosition} className="search-bar"/>
      <MapContainer center={position} zoom={13} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="..."
        />
        <Marker position={position} icon={baseMarker}>
          <Popup>
            A marker with a popup.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}