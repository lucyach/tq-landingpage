import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import LandingPage from './components/landingPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <LandingPage />
    </React.StrictMode>
);