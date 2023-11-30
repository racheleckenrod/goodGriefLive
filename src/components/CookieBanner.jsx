// CookieBanner.jsx
import React, { useEffect, useState } from 'react';

const CookieBanner = ({ showBanner, onAccept, onDecline }) => {
    return showBanner ? (
        <div id="cookieBanner" style={{ display: 'block', position: 'fixed', top: '0', left: '0', width: '100%', background: '#f0f0f0', padding: '10px', textAlign: 'center', zIndex: '1000' }}>
            <p>This website uses cookies. By using this site, you agree to our use of cookies.</p>
            <button className="button style1 small" onClick={onAccept}>
                Accept
            </button>
            <button className="button style1 small" onClick={onDecline}>
                Decline
            </button>
            <p>
                Our <a href="/privacyPolicy">Privacy Policy</a>
            </p>
        </div>
    ) : null;
};

export default CookieBanner;
