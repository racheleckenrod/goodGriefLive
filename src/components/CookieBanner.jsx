// CookieBanner.jsx
import React from 'react';
import { useCookies } from 'react-cookie'


const CookieBanner = ({ setAcceptedCookies }) => {

    const [cookies, setCookie] = useCookies(['consentCookie']);
    // const [acceptedCookies, setAcceptedCookies] = useState(false)

    const onAccept = () => {

        setCookie('consentCookie', true, { maxAge: 365 * 24 * 60 * 60, path: '/'});
        setAcceptedCookies(true);
    };


    const onDecline = () => {
        alert("By declining, you may not have access to the site.");
        // Additional logic if needed
    };
   
    return (
        <div id="cookieBanner" className="style1 actions" style={{ display: 'block', position: 'fixed', top: '0', left: '0', width: '100%', background: '#f0f0f0', padding: '10px', textAlign: 'center', zIndex: '1000' }}>
            <p style={{ marginTop: '1em'}}>This website uses cookies. Before using this site, you must agree to our use of cookies.</p>
            
                <button className="button style1 small" style={{margin: '1em'}} onClick={onAccept}>
                Accept
            </button>
                <button className="button style1 small" style={{margin: '1em'}} onClick={onDecline}>
                Decline
            </button>
            
            
           
            <p style={{ marginTop: '1em'}}>
                Our <a  href="/privacyPolicy">Privacy Policy</a>
            </p>
        </div>
    );
};

export default CookieBanner;
