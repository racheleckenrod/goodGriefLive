import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import { useSocket } from  './utils/socketContext.jsx';
import { useCookies } from 'react-cookie';
import axios from '/src/utils/axiosConfig';
import LandingPage from './components/landingPage/LandingPage';
import './App.css';
import CookieBanner from './components/CookieBanner';
import PrivacyPolicy from './components/PrivacyPolicy';
import Lobby from './components/lobby/Lobby';
import Login from './components/Login';
import Signup from './components/signup/Signup';
import Welcome from './components/Welcome.jsx';
import Profile from './components/profile/Profile'
import ChatRoom from './components/chatRoom/ChatRoom';

let userStatus = "guest";

const App = () => {

  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [cookies, setCookie] = useCookies(['consentCookie']);
  const [acceptedCookies, setAcceptedCookies] = useState(document.cookie.includes('consentCookie=true'));
  const socket = useSocket();
  const [agreedToRules, setAgreedToRules] = useState(false);


  useEffect(() => {
    console.log("App Component mounted no dependancies");
    return () => {
      console.log("App Component will unmount no dependancies");
    };
  }, []);
  

  useEffect(() => {
    console.log("window.location check")
    if (window.location.pathname === '/privacyPolicy') {
      return;
    }

    if (window.location.pathname !== '/' && !acceptedCookies) {
      console.log("navigate cookies?", acceptedCookies)
      navigate('/')
    }

    return () => {
      console.log("return window.location check")
    }

  }, [acceptedCookies]);


  const handleConsent = () => {
    console.log("handling consent")
    setAcceptedCookies(true);
    setCookie('consentCookie', true, { maxAge: 365 * 24 * 60 * 60, path: '/'});
   console.log(document.cookie.includes('consentCookie=true'), acceptedCookies)
  };



  const handleRemoveCookies = async () => {
    console.log("handle remove cookies")
    try {
        const response = await axios.get('/api/removeCookies');
        if (response.status === 200) {
            setMessage(response.data.message); 
            setAcceptedCookies(false);
        } else {
            console.error('Unexpected response status:', response.status);
        }
    } catch (error) {
        console.error('Error making request', error);
    }
    // logic to handle revoking consent
    navigate('/privacyPolicy');
  };



  useEffect(() => {
    console.log("App useEffect with conditional accepted cookies ")
    if (acceptedCookies && !socket.connected) {

      console.log("accepted cookies before socket", acceptedCookies);

      socket.connect();
          
        
      socket.on('disconnect', (reason) => {
        console.log(`socket disconnected from App... ${reason} attempting to reconnect`);
      });

      socket.on('connect', () => {
      console.log('Socket App connection Status:', socket.connected, socket);
      
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
        console.log("APP userStatus=", userStatus, socket.id);
        });


        socket.io.on("reconnect_attempt", (attemptNumber) => {
          // Handle reconnect attempt
          console.log("Reconnect attempt", attemptNumber);
          // console.log(`Attempt numbrt : (attempt ${attemptNumber})`);
        });
        
        socket.io.on('reconnect', (attemptNumber) => {
          // console.log("trying")
          console.log(`Reconnected after ${attemptNumber} attempts`);
          // Handle any reconnection logic here.
        });
          

      socket.on('connect', () => {
        console.log("socket connected", socket)
      });

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
    console.log("not accepted cookies in the route", acceptedCookies)
    return (
      <div>
      
      {<CookieBanner setAcceptedCookies={setAcceptedCookies} />}
      <Routes>
        <Route exact path="/" element={<LandingPage acceptedCookies={acceptedCookies} setAgreedToRules={setAgreedToRules} />} />
        <Route exact path="/privacyPolicy" element={<PrivacyPolicy acceptedCookies={acceptedCookies} handleRemoveCookies={handleRemoveCookies} handleConsent={handleConsent} message={message} />} />
      </Routes>
    </div>
    );

  }
  
  return (
    // <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage setAcceptedCookies={setAcceptedCookies} setAgreedToRules={setAgreedToRules} />} />
          <Route exact path="/privacyPolicy" element={<PrivacyPolicy acceptedCookies={acceptedCookies} handleRemoveCookies={handleRemoveCookies}/>} />
          <Route exact path="/chat" element={<Lobby />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/welcome' element={<Welcome />} />
          <Route exact path='/profile' element={<Profile />} />
        </Routes>
      </div>
     
    // </Router>
  )
}

export default App;
