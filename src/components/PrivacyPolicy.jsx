import React, { useState } from 'react';
import CookieBanner from './CookieBanner';

const PrivacyPolicy = () => {
    // const [showCookieBanner, setShowCookieBanner] = useState(true);
    const [cookiesAccepted, setCookiesAccepted] = useState(false);


        // Handlers for cookie consent
    const handleAccept = () => {
        // Your logic to handle cookie acceptance
        // For example, set a cookie or update the state in your app
        setShowCookieBanner(false);
    };

    const handleDecline = () => {
        // Your logic to handle declining cookies
        // For example, show a message or perform other actions
        setShowCookieBanner(false);
    };



    const handleConsent = () => {
        setCookiesAccepted(true);
    };

    const handleRevokeConsent = () => {
        // logic to handle revoking consent
        setCookiesAccepted(false);
    };

    return (

        <div className="homepage">
            <div id="page-wrapper">
                {/* <CookieBanner showBanner={showCookieBanner} onAccept={handleAccept} onDecline={handleDecline} /> */}

                {/*  Header */}
                <section id="header" className="wrapper">

                    {/*  Logo */}
                    <div id="logo">
                        <h1><a href="/">Live Grief Support</a></h1>
                        <p>A special place to honor our loved ones.</p>					
                    </div>

                    {/*  Nav  */}
                    <nav id="nav">
                        <ul>
                            <li className="current"><a href="/chat">the Lobby</a></li>
                            <li>
                                <a href="/chat">Chat Rooms</a>
                                <ul>
                                    <li><a href="/chat/room/Child/%>" className="openModalButton" data-modal="chatRoom">I have lost a child.</a></li>
                                    <li><a href="/chat/room/Parent/%>" className="openModalButton" data-modal="chatRoom">I have lost a parent.</a></li>
                                    <li><a href="/chat/room/Spouse%2FPartner/%>" className="openModalButton" data-modal="chatRoom">I have lost my spouse/partner.</a></li>
                                    <li><a href="/chat/room/Sibling/%>" className="openModalButton" data-modal="chatRoom">I have lost a sibling.</a></li>
                                    <li><a href="/chat/room/Friend/%>" className="openModalButton" data-modal="chatRoom">I have lost a friend</a></li>
                                    <li><a href="/chat/room/Suicide/%>" className="openModalButton" data-modal="chatRoom">I have lost someone to suicide.</a></li>
                                    <li><a href="/chat/room/Terminal/%>" className="openModalButton" data-modal="chatRoom">I have a terminal diagnosis.</a></li>
                                    <li>
                                        <a href="/chat/room/Community/%>" className="openModalButton" data-modal="chatRoom">Community tragedy.</a>
                                        <ul>
                                            <li><a href="/chat/room/Natural%20Disaster/%>" className="openModalButton" data-modal="chatRoom">Natural Disaster</a></li>
                                            <li><a href="/chat/room/Act%20of%20Violence/%>" className="openModalButton" data-modal="chatRoom">Act of Human Violence</a></li>
                                            <li><a href="/chat/room/Global%20Pandemic/%>" className="openModalButton" data-modal="chatRoom">Global Pandemic</a></li>
                                            <li><a href="/chat/room/Poverty/%>" className="openModalButton" data-modal="chatRoomM">Poverty</a></li>
                                            <li><a href="/chat/room/War/%>" className="openModalButton" data-modal="chatRoom">War</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/chat/room/Different/%>" className="openModalButton" data-modal="chatRoom">My grief is different</a></li>
                                                    
                                </ul>
                            </li>
                            <li><a href="/profile" className="openModalButton" data-modal="profile">Profile</a></li>
                            <li><a href="/post/newPost/:id" className="openModalButton" data-modal="newPost">New Post</a></li>
                            <li><a href="/feed" className="openModalButton" data-modal="feed">Community</a></li>
                            <li><a href="/logout">Logout</a></li>
                        </ul>
                    </nav>

                </section>
            
               
            
            
                


                {/* Main */}
                <section id="main" className="wrapper style2">
                    <div className="title">Our Privacy Policy</div>
                    <div className="container">

                        <main className="container">
                            <div className="row ">
                    

                                <div>
                                    <h2>Privacy Policy</h2>

                                    <p>Last Updated: 11/12/2023</p> 

                                    <p>1. **Introduction**</p>

                                    <p>Welcome to Good Grief Live ("we", "our", or "us"). We are committed to protecting your privacy and maintaining the confidentiality of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website.</p>

                                    <p>2. **Information We Collect**</p>

                                    <p>**Personal Information:** We may collect personal information, such as your name, email address, and other details when you voluntarily provide it to us.</p>

                                    <p>**Non-Personal Information:** We may also collect non-personal information such as browser type, operating system, and other analytics data to improve our website and services.</p>

                                    <p>3. **How We Use Your Information**</p>

                                    <p>We may use the information we collect for various purposes, including:</p>

                                    <p>- Providing and maintaining our website</p>
                                    <p>- Personalizing your experience</p>
                                    <p>- Improving our website and services</p>
                                    <p>- Sending periodic emails</p>
                                    <p>- Responding to your inquiries or requests</p>

                                    <p>4. **Disclosure of Information**</p>

                                    <p>We do not sell, trade, or transfer your personal information to third parties. However, we may share information with trusted third parties who assist us in operating our website, conducting our business, or servicing you.</p>

                                    <p>5. **Security**</p>

                                    <p>We implement security measures to protect your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.</p>

                                    <p>6. **Cookies**</p>

                                    <p>Our website uses cookies to enhance your experience. You can set your browser to refuse cookies or alert you when cookies are being sent.</p>

                                    <p>7. **Third-Party Links**</p>

                                    <p>Our website may contain links to third-party websites. We have no control over the content or privacy policies of these sites and encourage you to review their policies.</p>

                                    <p>8. **Your Choices**</p>

                                    <p>You may choose to restrict the collection or use of your personal information. However, limiting certain features may affect your experience.</p>

                                    <p>9. **Changes to This Privacy Policy**</p>

                                    <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with the last modified date.</p>

                                    <p>10. **Contact Us**</p>

                                    <p>If you have questions or concerns about our Privacy Policy, please contact us at <a href="mailto:goodgrieflive@gmail.com">goodgrieflive@gmail.com</a>.</p>

                                    <p>Thank you for trusting us at Good Grief Live.</p>

                        
                                        <div className="">
                                            <ul className="actions">
                                                <li><a href="#" onClick={handleConsent} className="button style3 large"> I give my consent </a></li>
                                                <li><a href="/" className="button style3 large"> No, thanks </a></li>
                                                <li><a href="/removeCookies" onClick={handleRevokeConsent} className="button style3 large">Revoke Consent</a></li>
                                                <p>Please clear my cookies.</p>
                                            </ul>
                                        </div>
                                    
                                </div>
                            </div>
                        </main>
                    </div>
                </section>
        


                     {/* Footer  */}

                    <section id="footer" className="wrapper">
                        <div className="title">Our Sponsors</div>
                        <div className="container">
                            <header className="style1">
                                <h2>Looking to be in touch with us?</h2>
                                <p>
                                    We value and appreciate you.
                                </p>
                            </header>
                            <div className="row">
                                <div className="col-6 col-12-medium">

                                    {/*  Contact Form  */}
                                        <section>
                                            <div className=""> 
                                                <p className="style1">
                                                    Your comments are welcome here, <br />please report any issuse you discover as you explore the site. We are working to improve it!
                                                </p>
                                            </div>
                                            <form method="POST" action="/feedback">
                                                <div className="row gtr-50">
                                                    <div className="col-6 col-12-small">
                                                        <input type="text" name="inputName" id="contact-name" placeholder="Name" />
                                                    </div>
                                                    <div className="col-6 col-12-small">
                                                        <input type="text" name="email" id="contact-email" placeholder="Email" />
                                                    </div>
                                                    <div className="col-12">
                                                        <textarea type="text" name="message" id="contact-message" placeholder="Message" rows="4"></textarea>
                                                    </div>
                                                
                                                    <div className="col-12">
                                                        <ul className="actions">
                                                            <li><input type="submit" className="style1" value="Send" /></li>
                                                            <li><input type="reset" className="style2" value="Reset" /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </form>
                                        </section>

                                </div>
                                <div className="col-6 col-12-medium">

                                    {/* Contact  */}
                                        <section className="feature-list small">
                                            <div className="row">
                                                <div className="col-6 col-12-small">
                                                    <section>
                                                        <h3 className="icon solid fa-home">Mailing Address</h3>
                                                        <p>
                                                            Back into Balance<br />
                                                            10799 Townline Rd<br />
                                                            Charlevoix, MI 49720
                                                        </p>
                                                    </section>
                                                </div>
                                                <div className="col-6 col-12-small">
                                                    <section>
                                                        <h3 className="icon solid fa-comment">Social</h3>
                                                        <p>
                                                            <a href="http://www.racheleckenrod.com">www.racheleckenrod.com</a><br />
                                                            <a href="https://www.linkedin.com/in/rachel-eckenrod/">linkedin.com/rachel-eckenrod</a><br />
                                                            <a href="https://www.facebook.com/rachel.eckenrod">facebook.com/rachel.eckenrod</a>
                                                        </p>
                                                    </section>
                                                </div>
                                                <div className="col-6 col-12-small">
                                                    <section>
                                                        <h3 className="icon solid fa-envelope">Email</h3>
                                                        <p>
                                                            <a href="mailto:goodgrieflive@gmail.com">goodgrieflive@gmail.com</a>
                                                        </p>
                                                    </section>
                                                </div>
                                                <div className="col-6 col-12-small">
                                                    <section>
                                                        <h3 className="icon solid fa-phone">Phone</h3>
                                                        <p>
                                                            (000) 555-0000
                                                        </p>
                                                    </section>
                                                </div>
                                            </div>
                                        </section>

                                </div>
                            </div>
                            <div id="copyright">
                                <ul>
                                    <li>&copy; Untitled.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li><li><a href="/privacyPolicy">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>

            </div>
        </div>


    );
};

export default PrivacyPolicy;