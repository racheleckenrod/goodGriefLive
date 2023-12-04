// ChatRoom.jsx
import React, { useState, useEffect, useRef } from 'react';
import Message from '/src/components/Message';
import axios from 'axios';
import { useSocket }  from '/src/utils/socketContext';



const ChatRoom = ({ data }) => {
  // console.log(data)
  const socket = useSocket();
  console.log(socket.id)
  const [messages, setMessages] = useState([]);
  const [roomUsers, setRoomUsers] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const chatMessagesRef = useRef(null);

// 
console.log( data.userName)

  useEffect(() => {
    socket.connect();


    socket.on('disconnect', (reason) => {
      console.log(`socket disconnected from chatroom... ${reason} attempting to reconnect`);
    });

    socket.on('connect', () => {
      console.log("trying to join room")
      socket.emit('joinRoom', {username: data.userName, room: data.room, _id: data._id});

    })


    // listen for incoming messages
    socket.on('message', (msg) => {
      console.log(msg)
      setMessages((prevMessages) => [...prevMessages, msg]);
      // console.log(prevMessages)

    });

    // Listen for updates to chatUsers
    socket.on('roomUsers', ({ room, chatUsers }) => {
      console.log(chatUsers, room, "roomUsers")
      if (room === data.room) {
        setRoomUsers(chatUsers);
      }
    });
    
    socket.on('recentMessages', (recentMessages) => {
      console.log("recentMessages", recentMessages)
      setMessages(recentMessages);

    })


    // cleanup event listeners when the component unmounts
    return () => {
      socket.off('connect');
      socket.off('message');
      socket.off('roomUsers');
      socket.off('recentMessages');
      socket.disconnect();    
    };
  }, [data.room, data.userName, data._id]);

  useEffect(() => {

    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }

  }, [messages])

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      socket.emit('chatMessage', newMessage);
      setNewMessage('');

      // chatMessages.scrollTop = chatMessages.scrollHeight;

    }
  };

  return (
    <section id="chat" className="wrapper style1">
                        <div className="title">The Lobby Chat Room</div>
                        <section id="" className="wrapper style1">
                            <div className="chat-container container">
                                <header className="chat-header">
                                
                                    <h2 id="username">{ data.userName }</h2>
                                
                                    <h1><i className="fas fa-heart-broken"></i> Live Grief Support</h1>
                                    <span id="_id">{ data._id }</span>
                                </header>
                                <main className="chat-main">
                                    <div className="chat-sidebar">
                                      <h3><i className="fas fa-dove"></i> Room Name:</h3>
                                      <h2 id="room-name">The Lobby</h2>
                                      <h3><i className="fas fa-hand-holding-heart"></i> Click on Group Members</h3>
                                    
                                      <ul id="chatUsers">{roomUsers.map((roomUser) => (
                                        <li key={roomUser._id}>{roomUser.username}</li>))}
                                      </ul>
                                    </div>
                                    <div className="chat-messages" ref={chatMessagesRef}>{messages.map((message) => (
                                      <Message key={message.time} message={message} />
                                    ))}
                                    </div>
                                </main>
                                <div className="chat-form-container">
                                    <form id="chat-form" onSubmit={handleSendMessage}>
                                    <input
                                        id="msg"
                                        type="text"
                                        placeholder="Enter Message"
                                        required
                                        autoComplete="off"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                    />
                                    <button className="btn button style1" type="submit"><i className="fas fa-paper-plane"></i> Send</button>
                                    </form>
                                </div>
                            </div>
                            <div className="">
                                <ul id="intro" className="actions">
                                    <li><a href="/login" className="button style3 large">Login</a></li>
                                    <li><a href="/signup" className="button style3 large">Signup</a></li>
                                </ul>
                            </div>        
                        </section> 
                    </section>

  );
};

export default ChatRoom;
