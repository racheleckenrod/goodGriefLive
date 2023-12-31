// LandingPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie'
// import CookieBanner from "../CookieBanner";  // Update the path accordingly
// import PageHead from "../PageHead";
import Header from "../headers/Header";
import Footer from "../footers/Footer";
import axios from '/src/utils/axiosConfig';
import RulesModal from "../modals/RulesModal";
import NavBar from "../navBar/NavBar";
import '../modals/modals.css';

const LandingPage = ({ acceptedCookies, setAcceptedCookies, handleRemoveCookies, message, userStatus, socketConnected }) => {
    const [ data, setData] = useState(null);
    const [ isRulesModalOpen, setIsRulesModalOpen ] = useState(false);
    const [ modalRoute, setModalRoute ] = useState('')
    const [ cookies, setCookie, removeCookie ] = useCookies(['rulesCookie', 'consentCookie']);
    const [ isCheckboxChecked, setIsCheckboxChecked ] = useState(document.cookie.includes('rulesCookie=true'));
    const navigate = useNavigate();
    
    console.log("acceptedCookies=", acceptedCookies)

    const handleCheckboxChange= () => {
        console.log("check acceptedCookies", acceptedCookies)
        if (!acceptedCookies) {
           alert("You must accept cookies first.")
        } else {
            console.log("checkbox change", )
            const newCheckboxState = !isCheckboxChecked;
            setIsCheckboxChecked(newCheckboxState);

            setCookie('rulesCookie', newCheckboxState, {path: '/' , maxAge:( 365 * 24 * 60 * 60)});
            const checkCookie = document.cookie.includes('rulesCookie=true')
            console.log("checking cookie=", checkCookie)
        }
        }
        

    const openRulesModal = () => {
        setIsRulesModalOpen(true);
    };

    const closeRulesModal = () => {
        setIsRulesModalOpen(false);
    }

    const handleContinue = (modalRoute) => {
        console.log('handling continue from landing page route=', modalRoute)
        setIsRulesModalOpen(false);
        if (cookies.rulesCookie) {
            navigate(modalRoute)
        } else {
            closeRulesModal();
        }
    }
        


    const handleRulesModal = (route) => {
        console.log("handling rulesModal", route)
        const isRulesCookieTrue = cookies.rulesCookie === true;
        console.log(isRulesCookieTrue)
        if (!isRulesCookieTrue) {
            console.log("where is my rulesModal?????????")
            setIsRulesModalOpen(true);
            setModalRoute(route);
        } else {
            console.log("RUNNING THE ELSE", route)
            // navigate(route);
            window.location.href = `${route}`;

        }
    }

    useEffect(() => {

        let ignore = false;

        console.log("LandingPage going to fetch data if acceptedCookies mounted");

        if (acceptedCookies) {
            // connectSocket();
            console.log("fetching data")
            fetchData();
        }

         return () => {
            console.log("LandingPage unmounted dependancy of acceptedCookies");
          ignore = true;
          };
       
    }, [acceptedCookies, socketConnected]);

    useEffect(() => {
        console.log("Simple Check LandingPage mounted");
        return () => {
          console.log("Simple Check LandingPage unmounted");
        };
      }, []);
      

    const fetchData = async () => {
        try {
            const response = await axios.get('/', {
                    withCredentials: true,
                });
                console.log('Request URL:', response.config.url);

                setData(response.data)

            console.log('Data from server:', response.data);
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }


    return ( 
        <div id="pageWrapper">

            {isRulesModalOpen && 
            (<RulesModal
            isOpen={isRulesModalOpen}
            onClose={closeRulesModal}
            modalRoute={modalRoute}
            onContinue={handleContinue}
            handleCheckboxChange={handleCheckboxChange}
            />
            )}

        
            <Header data={data} />
        
    
            {/* Intro */}
            <section id="intro" className="wrapper style1">

                <div className="title">Join Our Community</div>

                <div className="container">
                    <p className="style1">You don't need to be alone in your grief.</p>
                    <p className="style2">
                        Connect with real people <br className="mobile-hide" />who know what you are going through.
                        
                    </p>
                    <p className="style1">Share photos, poetry, thoughts, feelings and more  &ndash;  Right here where people care. </p>
                    <div>
                        <p>Our Story and Rules</p>
                        <p>After spending most of my life, at this point, without my son, Sam, alive on Earth, I have put together this site that I hope can bring you great comfort in your times of need, and joy in celebrating with others successes we can share. It is my hope that you are supported when you need it most, and don't need to have a reason to stay and connect deeply with those who can offer a safe and supportive environment. Please be aware that being a member of this community is a privilege, and we expect you to follow certain rules in order to participate. Kindness is mandatory. As is maintaining respect for others as well as yourself. Violating these rules will result in you being banned from the site. If you ever feel bullied or experience abuse, we want to know about it right away. We will make every effort to keep this an emotionally safe space. May you find compassionate understanding here and enjoy sharing memories of your loved ones, challenges you face, and victories you have- as you offer yourself to those who have an understanding of your losses. May we learn to support each other. </p>
                        {/* <!-- Checkbox --> */}
                        <div style={{marginBottom: '2em'}}>
                            <label htmlFor="agreeCheckbox">I agree to the rules</label>
                            <input type="checkbox" id="agreeCheckbox" checked={isCheckboxChecked} onChange={handleCheckboxChange} />
                        </div>

                        <p style={{marginBottom: '0'}}>Guests:</p>
                        <p>You are welcome to participate in a limited way as a guest. We have a live chat in our lobby where you can chat with other guests and users of the site. We encourage you to sign up and become a member. You will then be able to create your own profile, share your story, and post photos, comments and likes. You can view other members profiles and get to know who you are talking to. We also have a community feed that stays updated with users posts. The three most liked posts display in The Lobby.</p>

                    </div>
                    
                    <ul className="actions">
                        <p style={{marginBottom: '0'}}>Sounds great! Sign me up.</p>
                        <li><a style={{marginBottom: '3em', marginTop: '1em'}} href="/signup" className="button style3 large" onClick={(event) => { event.preventDefault(); handleRulesModal('/signup')}} >Signup</a></li>
                        <p style={{marginBottom: '0'}}>I'm already a member.</p>
                        <li><a style={{marginBottom: '3em', marginTop: '1em'}} href="/login" className="rules button style3 large"  onClick={(event) => { event.preventDefault(); handleRulesModal('/login')}} >Log in</a></li>
                        <p style={{marginBottom: '0'}}>I'm interested, continue as a guest.</p>
                        <li><a style={{marginBottom: '3em', marginTop: '1em'}} href="/chat" className="button style3 large" onClick={(event) => { event.preventDefault(); handleRulesModal('/chat')}} >To The Lobby</a></li>
                        <p style={{marginBottom: '0'}}>This is not for me.</p>
                        <li><a style={{marginTop: '1em'}} onClick={handleRemoveCookies} className="button style3 large"> No, thanks </a></li>
                        {message && <p>{message}</p>}
                    </ul>
                </div>
            </section>

            {/* <!-- Main --> */}
            <section id="main" className="wrapper style2">
                <div className="title">The Details</div>
                <div className="container">

                    {/* <!-- Image --> */}
                        <a href="#" className="image featured">
                            <img src="images/pic01.jpg" alt="" />
                        </a>

                    {/* <!-- Features --> */}
                        <section id="features">
                            <header className="style1">
                                <h2>We have chat rooms centered around your loss.</h2>
                                <p>Please sign up or log in to enter chat rooms.</p>
                            </header>
                            <div className="feature-list">
                                <div className="row">
                                    <div className="col-6 col-12-medium">
                                        <section>
                                            <h3 className="icon solid fa-baby">I have lost a child.</h3>
                                            <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                        </section>
                                    </div>
                                    <div className="col-6 col-12-medium">
                                        <section>
                                            <h3 className="icon solid fa-users">I have lost a parent.</h3>
                                            <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                        </section>
                                    </div>
                                    <div className="col-6 col-12-medium">
                                        <section>
                                            <h3 className="icon solid fa-people-arrows">I have lost my spouse/partner.</h3>
                                            <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                        </section>
                                    </div>
                                    <div className="col-6 col-12-medium">
                                        <section>
                                            <h3 className="icon solid fa-people-carry">I have lost a sibling.</h3>
                                            <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                        </section>
                                    </div>
                                    <div className="col-6 col-12-medium">
                                        <section>
                                            <h3 className="icon solid fa-user">I have lost a loved one to suicide.</h3>
                                            <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                        </section>
                                    </div>
                                    <div className="col-6 col-12-medium">
                                        <section>
                                            <h3 className="icon solid fa-user-friends">I have lost a friend.</h3>
                                            <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                        </section>
                                    </div>
                                    <div className="col-6 col-12-medium">
                                        <section>
                                            <h3 className="icon solid fa-person-booth">I am suffering from a community tragedy.</h3>
                                            <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                        </section>
                                    </div>
                                    <div className="col-6 col-12-medium">
                                        <section>
                                            <h3 className="icon solid fa-user-injured">My grief is different.</h3>
                                            <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <ul className="actions special">
                                <li><a href="/signup" className="rules button style1 large" onClick={(event) => { event.preventDefault(); handleRulesModal('/signup')}} >Get Started</a></li>
                                
                            </ul>
                        </section>

                </div>

            </section>
        
            {/* <!-- Footer --> */}
            <Footer />

        </div>
    );
};

export default LandingPage;
