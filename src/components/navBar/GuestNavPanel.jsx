import React, { useState } from 'react';
import { useEffect } from 'react';


const GuestNavPanel = ({ handleLogout }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
        console.log('Nav Toggled');
        if (!isNavOpen) {
            document.body.classList.add('navPanel-visible');
        } else {
            document.body.classList.remove('navPanel-visible');
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isNavOpen && !event.target.closest('#navPanel') && !event.target.closest('#titleBar')) {
                setIsNavOpen(false);
                document.body.classList.remove('navPanel-visible');
            }
        };
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside)
        };
    }, [isNavOpen])

    return (
        <>
            <div id="titleBar">
                <a href="#navPanel" className={`toggle`} onClick={toggleNav}></a>
                <span className="title">
                    <a href="/">Live Grief Support</a>
                </span>
            </div>


            <div id="navPanel" className={` nav-panel ${isNavOpen ? 'open' : ''}`} >
                <nav>
                    <a className="link depth-0" href="/chat" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                        <span className="indent-0"></span>
                        The Lobby
                    </a>
                    <a className="link depth-0" href="#" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                        <span className="indent-0"></span>
                        Chatable Rooms
                    </a>
                        <a className="link depth-1" href="/login" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                            <span className="indent-1"></span>
                            Login
                        </a>
                        <a className="link depth-1" href="/signup" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                            <span className="indent-1"></span>
                            Sign Up
                        </a>
                    <a className="link depth-0" href="/profile" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                        <span className="indent-0"></span>
                        Profile
                    </a>
                        <a className="link depth-1" href="/login" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                            <span className="indent-1"></span>
                            Login
                        </a>
                        <a className="link depth-1" href="/signup" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                            <span className="indent-1"></span>
                            Sign Up
                        </a>
                    <a className="link depth-0" href="/post/newPost/:id" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                        <span className="indent-0"></span>
                        New Post
                    </a>
                        <a className="link depth-1" href="/login" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                            <span className="indent-1"></span>
                            Login
                        </a>
                        <a className="link depth-1" href="/signup" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                            <span className="indent-1"></span>
                            Sign Up
                        </a>
                    <a className="link depth-0" href="/feed" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                        <span className="indent-0"></span>
                        Community
                    </a>
                        <a className="link depth-1" href="/login" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                            <span className="indent-1"></span>
                            Login
                        </a>
                        <a className="link depth-1" href="/signup" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                            <span className="indent-1"></span>
                            Sign Up
                        </a>
                    <a className="link depth-0"  onClick={handleLogout} style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', cursor: 'pointer' }}>
                        <span className="indent-0"></span>
                        Logout
                    </a>
                    {/* <li><a style={{ cursor: 'pointer', }} onClick={handleLogout}>Logout</a></li> */}

                </nav>
            </div>
        </>
    );
}

export default GuestNavPanel;