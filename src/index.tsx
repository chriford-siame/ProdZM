import React from 'react';
import 'animate.css'
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import BaseProvider from './providers/BaseProvider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="793744695975-7mcj1857jd9ieomtvauim07vrvvbpt9j.apps.googleusercontent.com">
      <BaseProvider>
        <App />
      </BaseProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
reportWebVitals();
