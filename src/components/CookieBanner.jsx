// CookieBanner.jsx
import React from 'react';

const CookieBanner = ({ onAccept, onDecline, setAcceptedCookies }) => {

    const handleAcceptClick = () => {

        onAccept();
        setAcceptedCookies(true);
    };

    // const handleDeclineClick = () => {
    //     onDecline();
    // }
   
    return (
        <div id="cookieBanner"  style={{ display: 'block', position: 'fixed', top: '0', left: '0', width: '100%', background: '#f0f0f0', padding: '10px', textAlign: 'center', zIndex: '1000' }}>
            <p>This website uses cookies. By using this site, you agree to our use of cookies.</p>
            <button className="button style1 small" onClick={handleAcceptClick}>
                Accept
            </button>
            <button className="button style1 small" onClick={onDecline}>
                Decline
            </button>
            <p>
                Our <a href="/privacyPolicy">Privacy Policy</a>
            </p>
        </div>
    );
};

export default CookieBanner;
