import React from "react";

const Footer  = () => {

    return (

        <div>   
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
                                    <div className="row"> 
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
        </div>
    );
};

export default Footer;