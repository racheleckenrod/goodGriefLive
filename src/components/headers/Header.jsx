import React from 'react';
import axios from '/src/utils/axiosConfig';
import { useNavigate } from 'react-router-dom';
// import NavPanel from '../navBar/NavPanel';
import NavBar from '../navBar/NavBar';
import GuestNavBar from '../navBar/GuestNavBar';


const Header = ({ data }) => {
console.log(data)

const navigate = useNavigate();

const handleLogout = async () => {
    console.log("handle logout clicked")

    try {
        const response = await axios.get('/logout');

        console.log(response.data);

        navigate('/');

    } catch (error) {
        console.error('Error during logout:', error);
    }
};



    return (
        <>
          
            {/* <div id="page-wrapper"> */}

                {/* Header */}
                <section id="header" className="wrapper style1">

                    {/* Logo */}
                    <div id="logo">
                        <h1><a href="/">Live Grief Support</a></h1>
                    
                        <p>A special place to honor our loved ones</p>
                        <p>Welcome to Good Grief Live.</p>
                        {data && data.userName ? (
                            <p>We are glad you are here, { data.userName }.</p>
                        ) : (
                            <p>We are glad you are here.</p>
                        )}
                        
                    </div>

                    {/*  Nav */}
                    {data && data.user && data.user.userName ? (
                        <NavBar data={data} handleLogout={handleLogout} />
                    ) : (
                        <GuestNavBar  handleLogout={handleLogout} />
                    )}
                
                </section>
            {/* </div>         */}
        </> 
    );
};

export default Header;