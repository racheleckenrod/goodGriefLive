import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, redirect, Route, Routes, useNavigate } from 'react-router-dom';
import io from  'socket.io-client';
import { useCookies } from 'react-cookie';
import LandingPage from './components/landingPage/LandingPage';
import './App.css';
import CookieBanner from './components/CookieBanner';
import PrivacyPolicy from './components/PrivacyPolicy';
// import PageHead from './components/PageHead';
import Lobby from './components/lobby/Lobby';
import ChatRoom from './components/chatRoom/ChatRoom';

let userStatus;

const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log("from APP userTimeZone=", userTimeZone);

const userLang = navigator.language || navigator.userLanguage;
console.log("APP userLang=", userLang)

const App = () => {

  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['consentCookie']);
  const [acceptedCookies, setAcceptedCookies] = useState(() => {
    console.log("accepted cookies state=", cookies)
    return cookies.consentCookie === 'true';
  });

  const handleCookieAcceptance = () => {
    console.log("checking handleCookieAcceptance",acceptedCookies)
    setCookie('consentCookie', true, { maxAge: 365 * 24 * 60 * 60, path: '/'});
    setAcceptedCookies(true);
    console.log("cookies", acceptedCookies)
  };

  useEffect(() => {
    const userAcceptedCookies = document.cookie.includes('consentCookie=true');
    console.log("userAcceptedCookies", userAcceptedCookies)
    setAcceptedCookies(userAcceptedCookies);
  }, []);

  useEffect(() => {
    console.log("Cookies updated:", acceptedCookies);
  }, [acceptedCookies]);

  useEffect(() => {

    if (window.location.pathname === '/privacyPolicy') {
      return;
    }

    // if (!acceptedCookies) {
    //   console.log("navigate cookies?", acceptedCookies)
    //   navigate('/')
    // }


    if (acceptedCookies) {
      console.log("accepted cookies before socket", acceptedCookies)
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
  

      socket.on('setStatus', (onlineStatus) => {
        userStatus = onlineStatus;
        console.log("APP userStatus=", userStatus, onlineStatus);
        });

      // socket.on('connect', () => {
      //   console.log("socket connected", socket)
      // });

      return () => {
        console.log("cleanup function")
        socket.disconnect();
      }
    }
  }, [acceptedCookies, navigate, userTimeZone, userLang])
  
  return (
    // <Router>
      <div>
      
        {/* {!acceptedCookies && <CookieBanner onAccept={handleCookieAcceptance} />} */}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route exact path="/chat" element={<Lobby />} />
        </Routes>
      </div>
     
    // </Router>
  )
}

export default App;
