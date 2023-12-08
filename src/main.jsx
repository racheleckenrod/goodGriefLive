import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SocketProvider } from './utils/socketContext.jsx';
import io from 'socket.io-client';
import App from './App.jsx';


const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const userLang = navigator.language || navigator.userLanguage;

const socket = io('http://localhost:3030', {
  reconnection: true,
  reconnectionAttempts: 10,
  reconnectionDelay: 5000,
  reconnectionDelayMax: 30000,  // 30 seconds
  query: { userTimeZone: userTimeZone, userLang: userLang  },
  withCredentials: true,
  autoConnect: false,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <HelmetProvider>
    <SocketProvider socket={socket}>
      <Router>
        <React.StrictMode> 
          <App />
        </React.StrictMode>
      </Router>
    </SocketProvider> 
  </HelmetProvider>,

);
