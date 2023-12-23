import { React, useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import GuestHeader from "../headers/GuestHeader";
import Footer from "../footers/Footer";
import axios from "/src/utils/axiosConfig";

const Signup = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',

    });

    const [flashMessage, setFlashMessage] = useState(null);

    const validateUserName = (event) => {
        return event.key.charCodeAt(0) !== 32;
    };

    const showUserNameHelp = () => {
        document.querySelector('#userNameHelp').setAttribute('style', 'display:inline-block')
    };

    const hideUserNameHelp = () => {
        document.querySelector('#userNameHelp').setAttribute('style', 'display: none')

    };

    const handleInputChange = (e) => {
        // const { name, value } = e.target;
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    

    const handleSignup = async (e) => {
        e.preventDefault();

        const {userName, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            console.error('Passwords do not match');
            setFlashMessage('Passwords do not match');

            return;
        }

        try {
            const response = await axios.post("/signup", formData, {
                withCredentials: true,
            });
            
            console.log("Form submitted", formData, response.data, response.data.success);
            
            if (response.status === 200) {
                navigate("/welcome");
                setFlashMessage(response.data.message)
            } else {
                console.log("Signup failed:", response.data.message);

                setFlashMessage(response.data.message);
            }
        } catch (error) {
            console.error("Error during Login:", error);
        }
    };


    return (
        <>
        <GuestHeader />

            <section id="main" className="wrapper style2">
                <div className="title">Sign Up</div>
                <div className="container">
                    <main className="container">
                        <div className="">
                            <section className="">
                                {flashMessage && <div className="flash-message">{flashMessage}</div>}

                                <form onSubmit={handleSignup}>
                                    <input type="hidden" name="timezone" id="timezone" value="" />
                                    <div className="mb-3">
                                        <label htmlFor="userName" className="form-label">User Name</label>
                                        <input type="text" className="form-control" onKeyPress={validateUserName} id="userName" name="userName" onFocus={showUserNameHelp} onBlur={hideUserNameHelp} onChange={handleInputChange}/>
                                        <div id="userNameHelp" style={{ display: 'none' }} className="form-text">No spaces are allowed in User Name.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"  onChange={handleInputChange} />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" name="password" onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" onChange={handleInputChange} />
                                    </div>
                                        <button type="submit" className="button style1 large">Submit</button>
                                </form>
                            </section>
                        </div>
                    </main>

                </div>
            </section>

        <Footer />
        </>
    )
}

export default Signup;