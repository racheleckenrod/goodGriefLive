import { React, useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import GuestHeader from "./headers/GuestHeader";
import Footer from "./footers/Footer";
import axios from "../utils/axiosConfig";

const Login = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""

    });
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/login", formData, {
                withCredentials: true,
            });
            
            console.log("Form submitted", formData, response.data, response.data.success);
            
            if (response.data.success) {
                navigate("/chat");
            } else {
                console.log("login failed");
            }
        } catch (error) {
            console.error("Error during Login:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
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
                           
                                <form action="/signup" method="POST">
                                    <input type="hidden" name="timezone" id="timezone" value="" />
                                    <div className="mb-3">
                                        <label htmlFor="userName" className="form-label">User Name</label>
                                        <input type="text" className="form-control" onkeypress="return event.key.charCodeAt(0) != 32" id="userName" name="userName" onfocus="{document.querySelector('#userNameHelp').setAttribute('style', 'display:inline-block')}" />
                                        <div id="userNameHelp" style="display:none"className="form-text">No spaces are allowed in User Name.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" name="password" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" />
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

export default Login;