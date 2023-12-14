import React from 'react';
import axios from '/src/utils/axiosConfig';
import { useNavigate } from 'react-router-dom';
import NavPanel from '../navBar/NavPanel';
import NavBar from '../navBar/NavBar';


const Header = ({ data }) => {
console.log(data)

const navigate = useNavigate();

const handleLogout = async () => {

    try {
        const response = await axios.get('/api/logout');

        console.log(response.data);

        navigate('/');

    } catch (error) {
        console.error('Error during logout:', error);
    }
};



    return (


        <div>
            {/* <PageHead /> */}
            <div className="">
                {/* <div id="page-wrapper"> */}

			        {/* Header */}
				    <section id="header" className="wrapper style1">

					    {/* Logo */}
                        <div id="logo">
                            <h1><a href="/">Live Grief Support</a></h1>
                        
                            <p>A special place to honor our loved ones</p>
                            <p>Welcome to Good Grief Live.</p>
                            <p>We are glad you are here, { data.userName }.</p>
                        </div>

                        {/*  Nav */}
                        <NavBar data={data} />
                        {/* <nav id="nav">
                            <ul>
                                <li className="current"><a href="/chat">the Lobby</a></li>
                                <li>
                                    <a href="/chat">Chat Rooms</a>
                                    <ul>
                                        <li><a href={`/chat/Child/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom">I have lost a child.</a></li>
                                        <li><a href={`chat/room/Parent/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom">I have lost a parent.</a></li>
                                        <li><a href={`chat/room/Spouse%2FPartner/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom">I have lost my spouse/partner.</a></li>
                                        <li><a href={`chat/room/Sibling/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom">I have lost a sibling.</a></li>
                                        <li><a href={`chat/room/Friend/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom">I have lost a friend</a></li>
                                        <li><a href={`chat/room/Suicide/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom">I have lost someone to suicide.</a></li>
                                        <li><a href={`chat/room/Terminal/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom">I have a terminal diagnosis.</a></li>
                                        <li>
                                            <a href={`chat/room/Community/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom">Community tragedy.</a>
                                            <ul>
                                                <li><a href={`chat/room/Natural%20Disaster/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom">Natural Disaster</a></li>
                                                <li><a href={`chat/room/Act%20of%20Violence/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom">Act of Human Violence</a></li>
                                                <li><a href={`chat/room/Global%20Pandemic/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom">Global Pandemic</a></li>
                                                <li><a href={`chat/room/Poverty/?_id=${data._id}`} className="openModalButton" data-modal="chatRoomM">Poverty</a></li>
                                                <li><a href={`chat/room/War/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom">War</a></li>
                                            </ul>
                                        </li>
                                        <li><a href={`chat/room/Different/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom">My grief is different</a></li>			
                                    </ul>
                                </li>
                                <li><a href="/profile" className="openModalButton" data-modal="profile">Profile</a></li>
                                <li><a href="/post/newPost/:id" className="openModalButton" data-modal="newPost">New Post</a></li>
                                <li><a href="/feed" className="openModalButton" data-modal="feed">Community</a></li>
                                <li><a onClick={handleLogout}>Logout</a></li>
                            </ul>
                        </nav> */}
				    </section>
                {/* <NavPanel data={data}/> */}
                {/* </div> */}
            </div>
        </div>
    );
};

export default Header;