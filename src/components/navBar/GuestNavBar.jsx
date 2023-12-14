import { React, useState } from "react";
import GuestNavPanel from "./GuestNavPanel";

const GuestNavBar = () => {
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
                        <a href="#" className="loginReqRoute" datamodal="chatRoom">Chat Rooms</a>
                        {activeDropdown === 'chatRoom' && (
                        <ul className={`dropotron level-0 center`} style={{ userSelect: 'none', position: 'absolute', zIndex: 1000, left: '252.75px', top: '56px', opacity: 1, display: 'block', }}>
                            <li style={{ whiteSpace: 'nowrap' }}>
                                <a href="/login" className="rules" dataroute="/login" style={{ display: 'block' }}>Login</a>
                            </li>
                            <li style={{ whiteSpace: 'nowrap' }}>
                                <a href="/signup" className="rules" dataroute="/signup" style={{ display: 'block' }}>Sign Up</a>
                            </li>
                        </ul>
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
            <GuestNavPanel />
        </div>
    )
};

export default GuestNavBar;