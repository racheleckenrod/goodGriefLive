import React from "react";
import GuestHeader from "./headers/GuestHeader";
import Footer from "./footers/Footer";

const Login = () => {
    return (
        <>
        <GuestHeader />

        <section id="main" className="wrapper style2">
            <div className="title">Login</div>
            <div className="container">

                <main className="container">
                    <div className="row ">
                        <section className="wrapper off-1">
            
                            <form action="/login" method="POST">
                                <div className="">
                                    <input type="hidden" name="timezone" id="timezone" value="" />
                                    <label htmlFor="exampleInputEmail1" className="form-label"
                                        >Email address</label>
                                    <input
                                        type="email"
                                        className="form-control "
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        name="email"
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        name="password"
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