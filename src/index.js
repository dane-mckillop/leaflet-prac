import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {useState} from 'react';

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>React Leaflet Training - Capitals</h1>
    <App />
  </StrictMode>
);
