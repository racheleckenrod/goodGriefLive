import { React, useState, useEffect } from 'react';

const NavPanel = ({ data, handleLogout  }) => {
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
            <div id="navPanel">
            
                <nav>
                    <a className="link depth-0" href="/chat" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                        <span className="indent-0"></span>
                        The Lobby
                    </a>
                    <a className="link depth-0" href="/chat" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                        <span className="indent-0"></span>
                        Chat Rooms
                    </a>
                        <a className="link depth-1" href={`/chat/room/Child/?_id=${data._id}`} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                            <span className="indent-1"></span>
                            I have lost a child.
                        </a>
                        <a className="link depth-1" href={`/chat/room/Parent/?_id=${data._id}`} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                            <span className="indent-1"></span>
                            I have lost a parent.
                        </a>
                        <a className="link depth-1" href={`/chat/room/Spouse%2FPartner/?_id=${data._id}`} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                            <span className="indent-1"></span>
                            I have lost my spouse/partner.
                        </a>
                        <a className="link depth-1" href={`/chat/room/Sibling/?_id=${data._id}`} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                            <span className="indent-1"></span>
                            I have lost a sibling.
                        </a>
                        <a className="link depth-1" href={`/chat/room/Friend/?_id=${data._id}`} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                            <span className="indent-1"></span>
                            I have lost a friend.
                        </a>
                        <a className="link depth-1" href={`/chat/room/Suicide/?_id=${data._id}`} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                            <span className="indent-1"></span>
                            I have lost someone to suicide.
                        </a>
                        <a className="link depth-1" href={`/chat/room/Terminal/?_id=${data._id}`} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                            <span className="indent-1"></span>
                            I have a terminal diagnosis.
                        </a>
                        <a className="link depth-1" href={`/chat/room/Community/?_id=${data._id}`} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                            <span className="indent-1"></span>
                            Community tragedy.
                        </a>
                            <a className="link depth-2" href={`/chat/room/Natural%20Disaster/?_id=${data._id}`} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                                <span className="indent-2"></span>
                                Natural Disaster
                            </a>
                            <a className="link depth-2" href={`/chat/room/Act%20of%20Violence/?_id=${data._id}`} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                                <span className="indent-2"></span>
                                Act of Human Violence
                            </a>
                            <a className="link depth-2" href={`/chat/room/Global%20Pandemic/?_id=${data._id}`} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                                <span className="indent-2"></span>
                                Global Pandemic
                            </a>
                            <a className="link depth-2" href={`/chat/room/Poverty/?_iid=${data._id}`} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                                <span className="indent-2"></span>
                                Poverty
                            </a>
                            <a className="link depth-2" href={`/chat/room/War/?_iid=${data._id}`} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                                <span className="indent-2"></span>
                                War
                            </a>
                        <a className="link depth-1" href={`/chat/room/Different/?_id=${data._id}`} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                            <span className="indent-1"></span>
                            My grief is different
                        </a>
                    <a className="link depth-0" href="/profile" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                        <span className="indent-0"></span>
                        Profile
                    </a>
                    <a className="link depth-0" href="/post/newPost/:id" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                        <span className="indent-0"></span>
                        New Post
                    </a>
                    <a className="link depth-0" href="/feed" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                        <span className="indent-0"></span>
                        Community
                    </a>
                    <a className="link depth-0"  onClick={handleLogout} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',  cursor: 'pointer'}}>
                        <span className="indent-0"></span>
                        Logout
                    </a>
                </nav>
            </div>
        </>
    )
}

export default NavPanel