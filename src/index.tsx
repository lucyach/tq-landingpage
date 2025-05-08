import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import LandingPage from './components/landingPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.2/dist/tailwind.min.css" rel="stylesheet"></link>
        <LandingPage />
    </React.StrictMode>
);