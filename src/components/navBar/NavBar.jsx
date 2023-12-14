import { React, useState } from "react";
import { Link } from 'react-router-dom';
import NavPanel from "./NavPanel";


const NavBar = ({ data, handleOpenModal }) => {
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
                                <a href={`/chat/room/Child/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom">I have lost a child.</a></li>
                               <li><a href={`chat/Parent/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom">I have lost a parent.</a></li>
                               <li><a href={`chat/Spouse%2FPartner/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom">I have lost my spouse/partner.</a></li>
                               <li><a href={`chat/room/Sibling/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom">I have lost a sibling.</a></li>
                               <li><a href={`chat/room/Friend/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom">I have lost a friend</a></li>
                               <li><a href={`chat/room/Suicide/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom">I have lost someone to suicide.</a></li>
                               <li><Link to={`chat/Terminal/?_id=${data._id}`} className="openModalButton" data-modal="chatRoom">I have a terminal diagnosis.</Link></li>
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
                        <a href="#" className="loginReqRoute" datamodal="profile">Profile</a>
                        {activeDropdown === 'Profile' && (

                        <ul className={`dropotron level-0 center `}  style={{ userSelect: 'none', position: 'absolute', zIndex: 1000, left: '381.688px', top: '56px', opacity: 1, display: 'block', }}>
                            <li style={{ whiteSpace: 'nowrap' }}>
                                <a href="/login" className="rules" dataroute="/login" style={{ display: 'block', }}>Login</a>
                            </li>
                            <li style={{ whiteSpace: 'nowrap' }}>
                                <a href="/signup" className="rules" dataroute="/signup" style={{ display: 'block', }}>Sign Up</a>
                            </li>
                        </ul>
                        )}
                    </li>
                    <li className="opener" onMouseEnter={() => handleMouseEnter('newPost')} onMouseLeave={handleMouseLeave} style={{userSelect: 'none', cursor: 'pointer', whiteSpace: 'nowrap', opacity: 1 }}>
                        <a href="/post/newPost/:id" className="loginReqRoute" datamodal="newPost">New Post</a>
                        {activeDropdown === 'newPost' && (

                            <ul className={`dropotron level-0 center `}  style={{ userSelect: 'none', position: 'absolute', zIndex: 1000, left: '470.078px', top: '56px', opacity: 1, display: 'block', }}>
                                <li style={{ whiteSpace: 'nowrap' }}>
                                    <a href="/login" className="rules" dataroute="/login" style={{ display: 'block', }}>Login</a>
                                </li>
                                <li style={{ whiteSpace: 'nowrap' }}>
                                    <a href="/signup" className="rules" dataroute="/signup" style={{ display: 'block', }}>Sign Up</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="opener" onMouseEnter={() => handleMouseEnter('feed')} onMouseLeave={handleMouseLeave} style={{userSelect: 'none', cursor: 'pointer', whiteSpace: 'nowrap', opacity: 1 }}>
                        <a href="/feed" className="loginReqRoute" datamodal="feed">Community</a>
                        {activeDropdown === 'feed' && (

                            <ul className={`dropotron level-0 center `}  style={{ userSelect: 'none', position: 'absolute', zIndex: 1000, left: '602.641px', top: '56px', opacity: 1, display: 'block', }}>
                                <li style={{ whiteSpace: 'nowrap' }}>
                                    <a href="/login" className="rules" dataroute="/login" style={{ display: 'block', }}>Login</a>
                                </li>
                                <li style={{ whiteSpace: 'nowrap' }}>
                                    <a href="/signup" className="rules" dataroute="/signup" style={{ display: 'block', }}>Sign Up</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li style={{ whiteSpace: 'nowrap' }}>
                        <a style={{ cursor: 'pointer', }}>Logout</a>
                    </li>
                </ul>
            </nav>
            <NavPanel data={data} />
        </div>
    )
};

export default NavBar;