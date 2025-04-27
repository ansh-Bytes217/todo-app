import React from "react";
import ReactDOM from "react-dom/client"; 
import App from "./App"; 
import "./index.css"; 

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement); // Using the React 18+ createRoot method

// Rendering the App component into the DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
