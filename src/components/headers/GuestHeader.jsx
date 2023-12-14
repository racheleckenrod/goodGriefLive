import React from 'react';
import axios from '/src/utils/axiosConfig';
import { useNavigate } from 'react-router-dom';
import GuestNavBar from '../navBar/GuestNavBar';





const GuestHeader = ({ data }) => {

    const navigate = useNavigate();

    const handleLogout = async () => {
        
    
        try {
            const response = await axios.get('http://localhost:3030/api/logout', {
                withCredentials: true,
            });
    
            console.log(response.data);
    
            navigate('/');
    
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };
    

    return (


        <div>
          

            {/* Header */}
            <section id="header" className="wrapper">

                {/*  Logo  */}
                <div id="logo">
                    <h1><a href="/">Live Grief Support</a></h1>
                    <p>A special place to honor our loved ones.</p>

                </div>

                {/*  Nav  */}
                <GuestNavBar />

            </section>
             

        </div>
    );
};

export default GuestHeader;