import React, { useState } from "react";
import axios from "../../utils/axiosConfig";
import validator from "validator";

const Footer  = () => {
    const [inputName, setInputName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccessMessage('');
        setErrorMessage('');

        // Validation checks
        const validationErrors = [];

        if (!validator.isEmail(email))
            validationErrors.push({ msg: 'Please enter a valid email address.' });

        if (!validator.isLength(inputName, { min: 1 }))
            validationErrors.push({ msg: 'Please enter a name.' });

        if (validationErrors.length > 0) {
            setErrorMessage(validationErrors[0].msg);
            return;
        }


        try {
            

            const response = await axios.post("/feedback", {
                inputName,
                email,
                message,
            });

            console.log("response from server:", response.data);

            // reset form fields if successful
            handleReset();

            setSuccessMessage(response.data.message)
           
        } catch (error) {
            console.error("Error submitting feedback:", error);
            setErrorMessage("An error occurred while submitting feedback.");
        }
    };

    const handleReset = () => {
        setInputName("");
        setEmail("");
        setMessage("");
        setSuccessMessage("");
        setErrorMessage("");

    }

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
                                            Your comments are welcome here, <br />please report any issues you discover as you <br />explore the site. We are working to improve it!
                                        </p>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row gtr-50">
                                            <div className="col-6 col-12-small">
                                                <input type="text" name="inputName" id="contact-name" placeholder="Name" value ={inputName} onChange={(e) => setInputName(e.target.value)} />
                                            </div>
                                            <div className="col-6 col-12-small">
                                                <input type="text" name="email" id="contact-email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <div className="col-12">
                                                <textarea type="text" name="message" id="contact-message" placeholder="Message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                                            </div>
                                            {successMessage && (
                                                <div className="success-message">{successMessage}</div>
                                            )}
                                            {errorMessage && (
                                                <div className="error-message">{errorMessage}</div>
                                            )}
                                        
                                            <div className="col-12">
                                                <ul className="actions">
                                                    <li><input type="submit" className="style1" value="Send" /></li>
                                                    <li><input type="reset" className="style2" value="Reset" onClick={handleReset} /></li>
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