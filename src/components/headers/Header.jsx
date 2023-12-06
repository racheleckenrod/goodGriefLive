import React from 'react';



const Header = () => {

    return (


        <div>
        {/* <PageHead /> */}
            <div className="homepage">
            {/* <h1>Welcome to the landing Page</h1> */}

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
            </div>

        </div>
    );
};

export default Header;