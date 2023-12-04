// LandingPage.jsx
import React, { useEffect, useState } from "react";
// import { useCookies } from 'react-cookie'
// import CookieBanner from "../CookieBanner";  // Update the path accordingly
// import PageHead from "../PageHead";
import axios from '/src/utils/axiosConfig';

const LandingPage = ({ acceptedCookies }) => {

    // const [showBanner, setShowBanner] = useState(false);
    // const [cookies, setCookie] = useCookies(['consentCookie']);


    useEffect(() => {

        let ignore = false;

        console.log("LandingPage userAcceptedCookies mounted");

        if (acceptedCookies) {
            // connectSocket();
            fetchData();
        }

        return () => {
            console.log("LandingPage userAcceptCookies unmounted");
          };

         return () => {
            console.log("LandingPage unmounted");
          ignore = true;
          };
       
    }, [acceptedCookies]);

    useEffect(() => {
        console.log("LandingPage mounted");
        return () => {
          console.log("LandingPage unmounted");
        };
      }, []);
      

    // const acceptCookies = () => {
    //     setCookie('consentCookie', true, { maxAge: 365 * 24 * 60 * 60, path: '/'});

    //     // document.cookie = 'consentCookie=true; max-age=' + (365 * 24 * 60 * 60) + '; path=/';
    //     setShowBanner(false);
    //     // connectSocket();
    //     fetchData();
    // };

    // const declineCookies = () => {
    //     alert("By declining, you may not have access to the site.");
    //     // Additional logic if needed
    // };

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3030/api');
            console.log('Data from server:', response.data);
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }


    return ( 
        <div>
            {/* <PageHead /> */}
                <div className="homepage">
                <h1>Welcome to the landing Page</h1>

                    <div id="page-wrapper">

                        {/* <!-- Header --> */}
                        <section id="header" className="wrapper">

                            {/* <!-- Logo --> */}
                            <div id="logo">
                                <h1><a href="/">Live Grief Support</a></h1>
                                <p>A special place to honor our loved ones.</p>					
                            </div>

                            {/* <!-- Nav --> */}
                            <nav id="nav">
                                <ul>
                                    <li className="current"><a href="/chat" className="rules">The Lobby</a></li>
                                    <li>
                                        <a href="#" className="loginReqRoute" data-modal="chatRoom">Chat Rooms</a>
                                        <ul>
                                            <li><a href="/login" className="rules" data-route="/login">Login</a></li>
                                            <li><a href="/signuo" className="rules" data-route="/signup">Sign Up</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/profile" className="loginReqRoute" data-modal="profile" >Profile</a>
                                        <ul>
                                            <li><a href="/login" className="rules" data-route="/login" >Login</a></li>
                                            <li><a href="/signup" className="rules" data-route="/signup">Sign Up</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/post/newPost/:id" className="loginReqRoute" data-modal="newPost">New Post</a>
                                        <ul>
                                            <li><a href="/login" className="rules" data-route="/login">Login</a></li>
                                            <li><a href="/signup" className="rules" data-route="/signup">Sign Up</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/feed" className="loginReqRoute" data-modal="feed" >Community</a>
                                        <ul>
                                            <li><a href="/login" className="rules" data-route="/login">Login</a></li>
                                            <li><a href="#" className="rules" data-route="/signup">Sign Up</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/logout">Logout</a></li>
                                </ul>
                            </nav>

                        </section>
                    </div>
                

            


			{/* <!-- Intro --> */}
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
                            <p>After spending most of my life, at this point, without my child alive on Earth, I have put together this site that I hope can bring you great comfort in your times of need, and joy in celebrating with others successes we can share. It is my hope that you are supported when you need it most, and don't need to have a reason to stay and connect deeply with those who can offer a safe and supportive environment. Please be aware that being a member of this community is a privilege, and we expect you to follow certain rules in order to participate. Kindness is mandatory. As is maintaining respect for others as well as yourself. Violating these rules will result in you being banned from the site. If you ever feel bullied or experience abuse, we want to know about it right away. We will make every effort to keep this an emotionally safe space. May you find compassionate understanding here and enjoy sharing memories of your loved ones, challenges you face, and victories you have- as you offer yourself to those who have an understanding of your losses. May we learn to support each other. </p>

							{/* <!-- Checkbox --> */}
							<label htmlFor="agreeCheckbox">I agree to the rules</label>
							<input type="checkbox" id="agreeCheckbox" />


                            <p>Guests</p>
                            <p>You are welcome to participate in a limited way as a guest. We have a live chat in our lobby where you can chat with other guests and users of the site. We encourage you to sign up and become a member. You will then be able to create your own profile, share your story, and post photos, comments and likes. You can view other members profiles and get to know who you are talking to. We also have a community feed that stays updated with users posts. The three most liked posts display in The Lobby.</p>

                        </div>
                       
						<ul className="actions">
                            <p>Sounds great! Sign me up.</p>
                            <li><a href="/signup" className="rules button style3 large">Signup</a></li>
							<p>I'm already a member.</p>
                            <li><a href="/login" className="rules button style3 large">Log in</a></li>
                            <p>I'm interested, continue as a guest.</p>
                            <li><a href="/chat" className="rules button style3 large">To The Lobby</a></li>
                            <p>This is not for me.</p>
							<li><a href="/removeCookies" className="button style3 large"> No, thanks </a></li>
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
									<li><a href="/signup" className="rules button style1 large">Get Started</a></li>
									
								</ul>
							</section>

					</div>

                </section>
			
{/* <!-- Footer --> */}
    

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

                {/* <!-- Contact Form --> */}
                    <section>
						<div className=""> 
                            <p className="style1">
                                 Your comments are welcome here, <br />please report any issuse you discover as you <br />explore the site. We are working to improve it!
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

                {/* <!-- Contact --> */}
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




{/* <!-- Scripts --> */}
{/* <script src="/socket.io/socket.io.js"></script> */}
{/* <script src="/scr/styles/js/jquery.min.js"></script> */}
{/* <script src="/scr/styles/js/jquery.dropotron.min.js"></script> */}
{/* <script src="/scr/styles//js/browser.min.js"></script> */}
{/* <script src="/scr/styles/js/breakpoints.min.js"></script> */}
{/* <script src="/scr/styles/js/util.js"></script> */}
{/* <script src="/scr/styles/js/main.js"></script> */}
{ console.log("script tags") }
{/* <!-- <script type="module" src="/js/shared.js"></script> --> */}
{/* <script id="sharedScript"></script> */}
{/* <script type="module" src="/landingPage.js"></script> */}

  


</div>




        </div>
    );
};

export default LandingPage;
