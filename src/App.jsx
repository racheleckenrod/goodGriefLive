import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import { useSocket } from  './utils/socketContext.jsx';
// import { useCookies } from 'react-cookie';
import LandingPage from './components/landingPage/LandingPage';
import './App.css';
import CookieBanner from './components/CookieBanner';
import PrivacyPolicy from './components/PrivacyPolicy';
import Lobby from './components/lobby/Lobby';
import ChatRoom from './components/chatRoom/ChatRoom';

let userStatus;

const App = () => {

  const navigate = useNavigate();
  // const [cookies, setCookie] = useCookies(['consentCookie']);
  const [acceptedCookies, setAcceptedCookies] = useState(document.cookie.includes('consentCookie=true'));
  const socket = useSocket();

  // useEffect(() => {
  //   const userAcceptedCookies = document.cookie.includes('consentCookie=true');
  //   console.log("userAcceptedCookies", userAcceptedCookies)
  //   setAcceptedCookies(userAcceptedCookies);
  // }, []);

  // useEffect(() => {
  //   console.log("Cookies updated:", acceptedCookies);
  // }, [acceptedCookies]);

  

  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component will unmount");
    };
  }, []);
  

  useEffect(() => {

    if (window.location.pathname === '/privacyPolicy') {
      return;
    }

    if (window.location.pathname !== '/' && !acceptedCookies) {
      console.log("navigate cookies?", acceptedCookies)
      navigate('/')
    }

    return () => {

    }

  }, []);

  useEffect(() => {
    if (acceptedCookies && !socket.connected) {

      console.log("accepted cookies before socket", acceptedCookies);

      socket.connect();
          
        
      socket.on('disconnect', (reason) => {
        console.log(`socket disconnected from App... ${reason} attempting to reconnect`);
      });

      socket.on('connect', () => {
      console.log('Socket connection Status:', socket.connected, socket);
      
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
  
      socket.emit('setStatus', userStatus)

      socket.on('setStatus', (userStatus) => {
        userStatus = userStatus;
        console.log("APP userStatus=", userStatus);
        });

      // socket.on('connect', () => {
      //   console.log("socket connected", socket)
      // });

      return () => {
        socket.off('connect');
        socket.off('setCookie');
        socket.off('setStatus');
        console.log("cleanup socket function")
        socket.disconnect();
      }
    }
  }, [acceptedCookies]);

  if (!acceptedCookies) {
    console.log("not accepted cookies in the route")
    return (
      <div>
      
      {<CookieBanner setAcceptedCookies={setAcceptedCookies} />}
      <Routes>
        <Route exact path="/" element={<LandingPage acceptedCookies={acceptedCookies} />} />
        <Route exact path="/privacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
    );

      }
  
  return (
    // <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage setAcceptedCookies={setAcceptedCookies} />} />
          <Route exact path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route exact path="/chat" element={<Lobby />} />
        </Routes>
      </div>
     
    // </Router>
  )
}

export default App;
