import { react, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './headers/Header';
import Footer from './footers/Footer';
import axios from '../utils/axiosConfig';

const PasswordReset = () => {

    const { token } = useParams();
    const encodedToken = encodeURIComponent(token)
    console.log("token=", token, encodedToken)


    const [data, setData] = useState('null')
    // const [email, setEmail] = useState('');

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // }

    useEffect(() => {
        let ignore = false;

        const fetchData = async () => {
            try {
                // make a GET request to the server endpoint
                const response = await axios.get(`/passwordReset/${encodedToken}/`, {
                    withCredentials: true,
                });
                console.log(response.data)
                if (!ignore) {
                    setData(response.data);
                    console.log("response.data:", response.data)
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

         return () => {
          console.log("Password Reset unmounted");
        ignore = true;
        };
    }, [token]);

    if (!data) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <Header data={data} />
            <section id="main" className="wrapper style2">
            <div className="title">Password Reset</div>
            <div className="container">
                <main className="container">
                    <div className="">
                        <p>Hello, { data.userName}. Please choose a new password for your { data.email } account.</p>
                        <section className="">
                            
                                {/* { messages.errors && messages.error.map((el, index) => (
                                    <div key={index} className="alert alert-danger">{ el.msg }</div>
                                ))}
                                    
                             
                          
                                { messages.info && messages.info.map(( el, index) => (
                                     <div key={index} className="alert alert-info">{ el.msg }</div>
                                ))} */}
                                   
                                
                            <form action="/passwordUpdate/{= user.resetPasswordToken %>" method="POST">
                            
                                <div className="mb-3">
                                <label htmlFor="password" className="form-label">New Password</label>
                                <input type="password" className="form-control" id="newPassword" name="newPassword" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required />
                                </div>
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

export default PasswordReset