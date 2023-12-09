import { React, useState } from "react";

const NavBar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    return (
        <div>
            <nav id="nav">
                <ul>
                    <li className="current" style={{whiteSpace: 'nowrap'}}>
                        <a href="/chat" className="rules">The Lobby</a>
                    </li>
                    <li className="opener" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{userSelect: 'none', cursor: 'pointer', whiteSpace: 'nowrap', opacity: 1 }}>
                        <a href="#" className="loginReqRoute" datamodal="chatRoom">Chat Rooms</a>
                        {/* {isDropdownOpen && ( */}
                        <ul className={`dropotron level-0 center ${isDropdownOpen ? 'visible' : '' }`} style={{ userSelect: 'none', position: 'absolute', zIndex: 1000, left: '252.75px', top: '56px', opacity: 1, display: 'none', }}>
                            <li style={{ whiteSpace: 'nowrap' }}>
                                <a href="/login" className="rules" dataroute="/login" style={{ display: 'block' }}>Login</a>
                            </li>
                            <li style={{ whiteSpace: 'nowrap' }}>
                                <a href="/signup" className="rules" dataroute="/signup" style={{ display: 'block' }}>Sign Up</a>
                            </li>
                        </ul>
                        {/* )} */}
                    </li>
                    <li className="opener" style={{ userSelect: 'none', cursor: 'pointer', whiteSpace: 'nowrap', opacity: 1, }}>
                        <a href="/profile" className="loginReqRoute" datamodal="profile">Profile</a>
                        <ul className={`dropotron level-0 center ${isDropdownOpen ? 'visible' : '' }`}  style={{ userSelect: 'none', position: 'absolute', zIndex: 1000, left: '381.688px', top: '56px', opacity: 1, display: 'none', }}>
                            <li style={{ whiteSpace: 'nowrap' }}>
                                <a href="/login" className="rules" dataroute="/login" style={{ display: 'block', }}>Login</a>
                            </li>
                            <li style={{ whiteSpace: 'nowrap' }}>
                                <a href="/signup" className="rules" dataroute="/signup" style={{ display: 'block', }}>Sign Up</a>
                            </li>
                        </ul>
                    </li>
                    <li className="opener active" style={{ userSelect: 'none', cursor: 'pointer', whiteSpace: 'nowrap', opacity: 1, }}>
                        <a href="/post/newPost/:id" className="loginReqRoute" datamodal="newPost">New Post</a>
                            <ul className={`dropotron level-0 center ${isDropdownOpen ? 'visible' : '' }`}  style={{ userSelect: 'none', position: 'absolute', zIndex: 1000, left: '470.078px', top: '56px', opacity: 1, display: 'none', }}>
                                <li style={{ whiteSpace: 'nowrap' }}>
                                    <a href="/login" className="rules" dataroute="/login" style={{ display: 'block', }}>Login</a>
                                </li>
                                <li style={{ whiteSpace: 'nowrap' }}>
                                    <a href="/signup" className="rules" dataroute="/signup" style={{ display: 'block', }}>Sign Up</a>
                                </li>
                            </ul>
                    </li>
                    <li className="opener" style={{ userSelect: 'none', cursor: 'pointer', whiteSpace: 'nowrap', opacity: 1, }}>
                        <a href="/feed" className="loginReqRoute" datamodal="feed">Community</a>
                            <ul className={`dropotron level-0 center ${isDropdownOpen ? 'visible' : '' }`}  style={{ userSelect: 'none', position: 'absolute', zIndex: 1000, left: '602.641px', top: '56px', opacity: 1, display: 'none', }}>
                                <li style={{ whiteSpace: 'nowrap' }}>
                                    <a href="/login" className="rules" dataroute="/login" style={{ display: 'block', }}>Login</a>
                                </li>
                                <li style={{ whiteSpace: 'nowrap' }}>
                                    <a href="#" className="rules" dataroute="/signup" style={{ display: 'block', }}>Sign Up</a>
                                </li>
                            </ul>
                    </li>
                    <li style={{ whiteSpace: 'nowrap' }}>
                        <a style={{ cursor: 'pointer', }}>Logout</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default NavBar;