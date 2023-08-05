import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import "./styles.css";
import "leaflet/dist/leaflet.css";

const position = [51.505, -0.09];

export default function App() {
  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="..."
      />
      <Marker position={position}>
        <Popup>
          A marker with a popup.
        </Popup>
      </Marker>
    </MapContainer>
  );
}