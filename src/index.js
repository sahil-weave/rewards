import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PatientProvider } from './Utils/patientContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PatientProvider>
        <App />
    </PatientProvider>
  </React.StrictMode>
);

