import { React, useState } from "react";
import { Link } from 'react-router-dom';
import NavPanel from "./NavPanel";


const NavBar = ({ data, handleOpenModal, handleLogout }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseEnter = (dropdownId) => {
        setActiveDropdown(dropdownId);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <div>
            <nav id="nav">
                <ul>
                    <li className="current" style={{whiteSpace: 'nowrap'}}>
                        <a href="/chat" className="rules">The Lobby</a>
                    </li>
                    <li className="opener" onMouseEnter={() => handleMouseEnter('chatRoom')} onMouseLeave={handleMouseLeave} style={{userSelect: 'none', cursor: 'pointer', whiteSpace: 'nowrap', opacity: 1 }}>
                        <a href="#" className="loginReqRoute" datamodal="chatRoom" onClick={() => handleOpenModal('chatRoom')}>Chat Rooms</a>
                        {activeDropdown === 'chatRoom' && (
                        <ul className={`dropotron level-0 center`} style={{ userSelect: 'none', position: 'absolute', zIndex: 1000, left: '252.75px', top: '56px', opacity: 1, display: 'block', }}>
                            <li style={{ whiteSpace: 'nowrap' }}>
                                <a href={`/chat/room/Child/`} className="openModalButton" data-modal="chatRoom">I have lost a child.</a></li>
                                <li><a href={`/chat/room/Parent/`} className="openModalButton" data-modal="chatRoom">I have lost a parent.</a></li>
                                <li><a href={`/chat/room/Spouse%2FPartner/`} className="openModalButton" data-modal="chatRoom">I have lost my spouse/partner.</a></li>
                                <li><a href={`/chat/room/Sibling/`} className="openModalButton" data-modal="chatRoom">I have lost a sibling.</a></li>
                                <li><a href={`/chat/room/Friend/`} className="openModalButton" data-modal="chatRoom">I have lost a friend.</a></li>
                                <li><a href={`/chat/room/Suicide/`} className="openModalButton" data-modal="chatRoom">I have lost someone to suicide.</a></li>
                                <li><a href={`/chat/room/Terminal`} className="openModalButton" data-modal="chatRoom">I have a terminal diagnosis.</a></li>
                                <li className="opener" >
                                    <a href={`/chat/room/Community/`} className="openModalButton" data-modal="chatRoom">Community tragedy.</a>
                                        <ul style={{marginBottom: 0}}>
                                            <li><a href={`/chat/room/Natural%20Disaster/`} className="openModalButton" data-modal="chatRoom">Natural Disaster</a></li>
                                            <li><a href={`/chat/room/Act%20of%20Violence/`} className="openModalButton" data-modal="chatRoom">Act of Human Violence</a></li>
                                            <li><a href={`/chat/room/Global%20Pandemic/`} className="openModalButton" data-modal="chatRoom">Global Pandemic</a></li>
                                            <li><a href={`/chat/room/Poverty/`} className="openModalButton" data-modal="chatRoomM">Poverty</a></li>
                                            <li><a href={`/chat/room/War/`} className="openModalButton" data-modal="chatRoom">War</a></li>
                                        </ul>
                                </li>
                               <li><a href={`chat/room/Different/`} className="openModalButton" data-modal="chatRoom">My grief is different.</a></li>			
                           </ul>
                        // <ul className={`dropotron level-0 center`} style={{ userSelect: 'none', position: 'absolute', zIndex: 1000, left: '252.75px', top: '56px', opacity: 1, display: 'block', }}>
                        //     <li style={{ whiteSpace: 'nowrap' }}>
                        //         <a href="/login" className="rules" dataroute="/login" style={{ display: 'block' }}>Login</a>
                        //     </li>
                        //     <li style={{ whiteSpace: 'nowrap' }}>
                        //         <a href="/signup" className="rules" dataroute="/signup" style={{ display: 'block' }}>Sign Up</a>
                        //     </li>
                        // </ul>
                        )} 
                    </li>
                    <li className="opener" onMouseEnter={() => handleMouseEnter('Profile')} onMouseLeave={handleMouseLeave} style={{userSelect: 'none', cursor: 'pointer', whiteSpace: 'nowrap', opacity: 1 }}>
                        <a href="/profile" className="loginReqRoute" datamodal="profile">Profile</a>
                        {/* {activeDropdown === 'Profile' && (

                        <ul className={`dropotron level-0 center `}  style={{ userSelect: 'none', position: 'absolute', zIndex: 1000, left: '381.688px', top: '56px', opacity: 1, display: 'block', }}>
                            <li style={{ whiteSpace: 'nowrap' }}>
                                <a href="/login" className="rules" dataroute="/login" style={{ display: 'block', }}>Login</a>
                            </li>
                            <li style={{ whiteSpace: 'nowrap' }}>
                                <a href="/signup" className="rules" dataroute="/signup" style={{ display: 'block', }}>Sign Up</a>
                            </li>
                        </ul>
                        )} */}
                    </li>
                    <li className="opener" onMouseEnter={() => handleMouseEnter('newPost')} onMouseLeave={handleMouseLeave} style={{userSelect: 'none', cursor: 'pointer', whiteSpace: 'nowrap', opacity: 1 }}>
                        <a href="/post/newPost/:id" className="loginReqRoute" datamodal="newPost">New Post</a>
                        {/* {activeDropdown === 'newPost' && (

                            <ul className={`dropotron level-0 center `}  style={{ userSelect: 'none', position: 'absolute', zIndex: 1000, left: '470.078px', top: '56px', opacity: 1, display: 'block', }}>
                                <li style={{ whiteSpace: 'nowrap' }}>
                                    <a href="/login" className="rules" dataroute="/login" style={{ display: 'block', }}>Login</a>
                                </li>
                                <li style={{ whiteSpace: 'nowrap' }}>
                                    <a href="/signup" className="rules" dataroute="/signup" style={{ display: 'block', }}>Sign Up</a>
                                </li>
                            </ul>
                        )} */}
                    </li>
                    <li className="opener" onMouseEnter={() => handleMouseEnter('feed')} onMouseLeave={handleMouseLeave} style={{userSelect: 'none', cursor: 'pointer', whiteSpace: 'nowrap', opacity: 1 }}>
                        <a href="/feed" className="loginReqRoute" datamodal="feed">Community</a>
                        {/* {activeDropdown === 'feed' && (

                            <ul className={`dropotron level-0 center `}  style={{ userSelect: 'none', position: 'absolute', zIndex: 1000, left: '602.641px', top: '56px', opacity: 1, display: 'block', }}>
                                <li style={{ whiteSpace: 'nowrap' }}>
                                    <a href="/login" className="rules" dataroute="/login" style={{ display: 'block', }}>Login</a>
                                </li>
                                <li style={{ whiteSpace: 'nowrap' }}>
                                    <a href="/signup" className="rules" dataroute="/signup" style={{ display: 'block', }}>Sign Up</a>
                                </li>
                            </ul>
                        )} */}
                    </li>
                    {/* <li style={{ whiteSpace: 'nowrap' }}> */}
                    <li><a style={{ cursor: 'pointer', }} onClick={handleLogout}>Logout</a></li>
                        {/* <a href="/logout" style={{ cursor: 'pointer', }}>Logout</a> */}
                    {/* </li> */}
                </ul>
            </nav>
            <NavPanel data={data} />
        </div>
    )
};

export default NavBar;