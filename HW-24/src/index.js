import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

const rootElement = createRoot(root);

rootElement.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();