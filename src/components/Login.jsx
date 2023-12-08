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
            <div className="title">Login</div>
            <div className="container">

                <main className="container">
                    <div className="row ">
                        <section className="wrapper off-1">
            
                            <form onSubmit={handleSubmit}>
                                <div className="">
                                    <label htmlFor="exampleInputEmail1" className="form-label"
                                        >Email address</label>
                                    <input
                                        type="email"
                                        className="form-control "
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="">
                                    <label
                                    htmlFor="exampleInputPassword1" 
                                    className="form-label">
                                    Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    />
                                </div>
                
                                <button type="submit" className="button style1 large">Submit</button>
                            </form>

                            <div className="">
                                <a href="/passwordResetRequest" className="button style3 large">Forgot Password?</a>
                            </div>

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