import React, { useEffect, useState } from 'react';
import axios from '/src/utils/axiosConfig';
import '/src/assets/Bradstyle.css';
import Header from '../headers/Header';
import ChatRoom from '/src/components/chatRoom/ChatRoom'
// import '/src/assets/js/script.js';

const Lobby = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        let ignore = false;

        const fetchData = async () => {
            try {
                // make a GET request to the server endpoint
                const response = await axios.get('/chat', {
                    withCredentials: true,
                });
                
                if (!ignore) {
                    setData(response.data);
                    console.log("is this the console log?", response.data)
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

         return () => {
          console.log("Lobby unmounted");
        ignore = true;
        };
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
    <>
        <div>
            <section className="homepage">
		        <div id="page-wrapper">

			       <Header data={data} />
            
                    { /* Highlights */}
				    <section id="highlights" className="wrapper style3">
					    <div className="title">Today's Top Posts</div>
					    <div className="container">
						    <div className="row aln-center">
							    <div className="col-4 col-12-medium">
                                    <section className="highlight">
                                        <a href="/post/{ `${data.posts[0]._id}`}" className="image featured"><img src= { data.posts[0].image } alt="most popular post" /></a>
                                        <h3><a href="/post/{ `${data.posts[0]._id}`}">{ data.posts[0].title }</a></h3>
                                        <p>{ data.posts[0].caption }</p>
                                        <p>Likes: { data.posts[0].likes }</p>
                                        <ul className="actions">
                                            <li><a href="/post/{ `${data.posts[0]._id}`}" className="button style1 openModalButton" data-modal="comment">Comment</a></li>
                                        </ul>
                                    </section>
							    </div>
                            
                                <div className="col-4 col-12-medium">
                                    <section className="highlight">
                                        <a href="/post/{ `${data.posts[1]._id}`}" className="image featured"><img src= { data.posts[1].image } alt="second most popular post" /></a>
                                        <h3><a href="/post/{ `${data.posts[1]._id}`}">{ data.posts[1].title }</a></h3>
                                        <p>{ data.posts[1].caption }</p>
                                        <p>Likes: { data.posts[1].likes }</p>
                                        <ul className="actions">
                                            <li><a href="/post/{ `${data.posts[1]._id}`}" className="button style1 openModalButton" data-modal="comment">Comment</a></li>
                                        </ul>
                                    </section>
                                </div>

                                <div className="col-4 col-12-medium">
                                    <section className="highlight">
                                        <a href="/post/{ `${data.posts[2]._id}`}" className="image featured"><img src= { data.posts[2].image } alt="third most popular post" /></a>
                                        <h3><a href="/post/{ `${data.posts[2]._id}`}">{ data.posts[2].title }</a></h3>
                                        <p>{ data.posts[2].caption }</p>
                                        <p>Likes: { data.posts[2].likes }</p>
                                        <ul className="actions">
                                            <li><a href="/post/{ `${data.posts[2]._id}`}" className="button style1 openModalButton" data-modal="comment">Comment</a></li>
                                        </ul>
                                    </section>
                                </div>
						    </div>
					    </div>
				    </section>
                    { data && <ChatRoom data={data} />}
                    {/* <section id="chat" className="wrapper style1">
                        <div className="title">The Lobby Chat Room</div>
                        <section id="" className="wrapper style1">
                            <div className="chat-container container">
                                <header className="chat-header">
                                
                                    <h2 id="username">{ data.userName }</h2>
                                
                                    <h1><i className="fas fa-heart-broken"></i> Live Grief Support</h1>
                                    <span id="_id">{ data._id }</span>
                                </header>
                                <main className="chat-main">
                                    <div className="chat-sidebar">
                                    <h3><i className="fas fa-dove"></i> Room Name:</h3>
                                    <h2 id="room-name">The Lobby</h2>
                                    <h3><i className="fas fa-hand-holding-heart"></i> Click on Group Members</h3>
                                    
                                    <ul id="chatUsers"></ul>
                                    </div>
                                    <div className="chat-messages"></div>
                                </main>
                                <div className="chat-form-container">
                                    <form id="chat-form">
                                    <input
                                        id="msg"
                                        type="text"
                                        placeholder="Enter Message"
                                        required
                                        autoComplete="off"
                                    />
                                    <button className="btn button style1"><i className="fas fa-paper-plane"></i> Send</button>
                                    </form>
                                </div>
                            </div>
                            <div className="">
                                <ul id="intro" className="actions">
                                    <li><a href="/login" className="button style3 large">Login</a></li>
                                    <li><a href="/signup" className="button style3 large">Signup</a></li>
                                </ul>
                            </div>        
                        </section> 
                    </section> */}

                    {/* <!-- Features --> */}
                    <section id="main" className="wrapper style2">
                        <div className="title">Public Chat Roooms</div>
                        <div className="container">
            
                            <header className="style1">
                                <h2>We have chat rooms centered around your loss.</h2>
                                <p id="currently"></p>
                                <p id="time"></p>
                            
                                <h1>Welcome, <span id="username">{ data.userName }</span></h1>
                                
                                <h3>Our lobby is currently undergoing some major renovations. <br /> If you are a registered user, you can click on the titles below to go to the chat rooms. Otherwise, please sign up to have access to the full features of our site.</h3>
                            </header>

                            <div className="feature-list">
                                <div className="row">
                                    <div className="col-6 col-12-medium">
                                        <section>
                                            <a href={`chat/room/Child/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom"><h3 className="icon solid fa-baby" >I have lost a child.</h3></a>
                                            <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                            {/* <!-- <div className="chat-messages"></div> --> */}
                                        </section>
                                    </div>
                                    <div className="col-6 col-12-medium">
                                        <section>
                                            <a href={`chat/room/Parent/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom"><h3 className="icon solid fa-users">I have lost a parent.</h3></a>
                                            <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                        </section>
                                    </div>
                                    <div className="col-6 col-12-medium">
                                        <section>
                                            <a href={`chat/room/Spouse%2FPartner/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom"><h3 className="icon solid fa-people-arrows">I have lost my Spouse/Partner.</h3></a>
                                            <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                            <h2 id="Parent"></h2>
                                        </section>
                                    </div>
                                    <div className="col-6 col-12-medium">
                                        <section>
                                            <a href={`chat/room/Sibling/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom"><h3 className="icon solid fa-people-carry">I have lost a sibling.</h3></a>
                                            <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>

                                        </section>
                                    </div>
                                    <div className="col-6 col-12-medium">
                                        <section>
                                            <a href={`chat/room/Suicide/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom"><h3 className="icon solid fa-user">I have lost a loved one to suicide.</h3></a>
                                            <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                        </section>
                                    </div>
                                    <div className="col-6 col-12-medium">
                                        <section>
                                            <a href={`chat/room/Friend/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom"><h3 className="icon solid fa-user-friends">I have lost a friend.</h3></a>
                                            <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                        </section>
                                    </div>
                                    <div className="col-6 col-12-medium">
                                        <section>
                                            <a href={`chat/room/Community%20Tragedy/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom"><h3 className="icon solid fa-person-booth">I am suffering from a community tragedy.</h3></a>
                                            <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                        </section>
                                    </div>
                                    <div className="col-6 col-12-medium">
                                        <section>
                                            <a href={`chat/room/Different/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom"><h3 className="icon solid fa-user-injured">My grief is different.</h3></a>
                                            <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate et magna feugiat laoreet vel velit lorem.</p>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        
                            {/* <!-- <ul className="actions special"> */}
                                {/* <li><form action={`chat/room?" method="post"><a className="button style1 large" value="child">join child</a></form></li> */}
                                {/* <li><a href="#" className="button style2 large">More Info</a></li> */}
                            {/* </ul> --> */}
                            {/* </section> */}
                        </div>
                    </section>

                    {/* // <!-- Footer --> */}
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
                                                Your comments are welcome here, please report any issuse you discover as you explore the site. We are working to improve it!
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
                                                    <textarea name="message" id="contact-message" placeholder="Message" rows="4"></textarea>
                                                </div>
                                                {/* { if (locals.messages && locals.messages.errors) { }
                                                    { locals.messages.errors.forEach( el => { }
                                                        <div className="alert alert-danger">{ el.msg }</div>
                                                    { }) }    
                                                { } }
                                                { if (locals.messages && locals.messages.info) { }
                                                    { locals.messages.info.forEach( el => { }
                                                        <div className="alert alert-info">{ el.msg }</div>
                                                    { }) }    
                                                { } } */}
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
                </div>
            </section>

        </div>

    </>
    );
};

export default Lobby;
