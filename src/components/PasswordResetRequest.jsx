import { React, useState, useEffect } from "react";
import axios from "../utils/axiosConfig";
import Header from "./headers/Header";
import Footer from "./footers/Footer";

const PasswordResetRequest = () => {

    const [data, setData] = useState('null');
    const [message, setMessage] = useState([]);
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    useEffect(() => {
        let ignore = false;

        const fetchData = async () => {
            try {
                // make a GET request to the server endpoint
                const response = await axios.get('/passwordResetRequest', {
                    withCredentials: true,
                });
                
                if (!ignore) {
                    setData(response.data);
                    const { success, error } = response.data;
                    setMessage({ success, error })
                    console.log("response.data:", response.data)
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

         return () => {
          console.log("Password Reset Request unmounted");
        ignore = true;
        };
    }, [setMessage]);

    console.log("message:", message)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/passwordResetRequest', { email });
                console.log("password reset data", response.data);
                const { success, error } = response.data;

                setMessage({ success, error })
            
        } catch (error) {
            console.error('Error submitting password reset request:', error);
            const { success } = response.data;

            setMessage({ success, error })
        }

    }

    return (
        <>
            <Header data={data} />
            <section id="main" className="wrapper style2">
            <div className="title">Reset Your Password</div>
            <div className="container">
                <main className="container">
                    <div className="">
                        <section className="">
                           
                                {/* <div className="alert alert-danger">{ el.msg }</div> */}
                               
                                <div className="alert alert-danger">
                                <ul>
                                   
                                    {/* <li>{ error }</li> */}
                                </ul>
                                </div>

                                { message && message.error && (
                                    <div key={index} className="alert alert-danger">{ message.error }</div>
                                )}
                                    
                             
                          
                                { message && message.info && (
                                     <div className="alert alert-info">{ message.info }</div>
                                )}
                          
                                
                                { message && message.success && (
                                    <div className="alert alert-success">{ message.success }</div>
                                )} 
                            {/* <form action="/passwordResetRequest" method="POST"> */}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                name="email" 
                                value={email} 
                                onChange={handleEmailChange}
                                required 
                                />
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>  */}
                                </div>
                                <p>Enter your email and we will send you a link to create a new password. <br />Be sure to check your spam/junk email if you haven't added us as a contact.</p>
                                <button type="submit" className="button style1 large">Reset Password</button>
                            </form>
                        </section>
                    </div>
                </main>

                </div>
                </section>
            <Footer />
        
        </>
    )
};

export default PasswordResetRequest;