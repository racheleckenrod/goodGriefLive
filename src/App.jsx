import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import io from  'socket.io-client'
import LandingPage from './components/landingPage/LandingPage';
import './App.css';
import CookieBanner from './components/CookieBanner'
// import PageHead from './components/PageHead';
import Lobby from './components/lobby/Lobby';
import ChatRoom from './components/chatRoom/ChatRoom';

let userStatus;

const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log("from APP userTimeZone=", userTimeZone);

const userLang = navigator.language || navigator.userLanguage;
console.log("APP userLang=", userLang)
const App = () => {

  const [acceptedCookies, setAcceptedCookies] = useState(false);

  const handleCookieAcceptance = () => {
    setAcceptedCookies(true);
  };

  useEffect(() => {
    if (acceptedCookies) {
      // const socket = createSocket();

     
const socket = io('http://localhost:3030', {
  reconnection: true,
  reconnectionAttempts: 10,
  reconnectionDelay: 5000,
  reconnectionDelayMax: 30000,  // 30 seconds
  query: { userTimeZone: userTimeZone, userLang: userLang  },
  withCredentials: true,
});

      // console.log('Socket connection Status:', socket.connected);

  socket.on('connect', () => {
  console.log('Socket connection Status:', socket.connected, socket);

  // console.log('socket connected', socket.id);

  
  });

      socket.on('setStatus', (onlineStatus) => {
      userStatus = onlineStatus;
      console.log("APP userStatus=", userStatus);
      });

      socket.on('setCookie', (GuestID) => {
          document.cookie = `guestID=${GuestID}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
          console.log("cookie set??NOW?", GuestID, socket)
      });

      const cookies = document.cookie.split(";");
      let guestID = null;
      for(const cookie of cookies) {
          const [name, value] = cookie.trim().split('=');
          if (name === 'guestID') {
          guestID = value;
          break;
          }
      }
  


      socket.on('connect', () => {
        console.log("socket connected", socket)
      });

      return () => {
        console.log("cleanup function")
        socket.disconnect();
      }
    }
  }, [acceptedCookies])
  
  return (
    <Router>
      <div>
        {/* <PageHead /> */}
        <CookieBanner />
        <Routes>
          <Route exact path="/" element={<LandingPage onCookieAcceptance={handleCookieAcceptance} acceptedCookies={acceptedCookies} />} />
          <Route exact path="/chat" element={<Lobby />} />
          {/* <Route path="/chat" render={(props) => <Chat {...props} socket={socket} />} /> */}
        </Routes>
      </div>
     
    </Router>
  )
}

export default App;
