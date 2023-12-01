// import io from 'socket.io-client';

// const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// console.log("from socket.js userTimeZone=", userTimeZone);

// const userLang = navigator.language || navigator.userLanguage;
// console.log("userLang=", userLang)

// let userStatus = 'guest';


// const socket = io('http://localhost:3030', {
//     reconnection: true,
//     reconnectionAttempts: 10,
//     reconnectionDelay: 5000,
//     reconnectionDelayMax: 30000,  // 30 seconds
//     query: { userTimeZone: userTimeZone, userLang: userLang  },
//     withCredentials: true,
// });

        // console.log('Socket connection Status:', socket.connected);

    // socket.on('connect', () => {
    // console.log('Socket connection Status:', socket.connected, socket);

    // console.log('socket connected', socket.id);

    
    // });

    //     socket.on('setStatus', (onlineStatus) => {
    //     userStatus = onlineStatus;
    //     console.log("userStatus=", userStatus);
    //     });

    //     socket.on('setCookie', (GuestID) => {
    //         document.cookie = `guestID=${GuestID}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
    //         console.log("cookie set??NOW?", GuestID, socket)
    //     });

    //     const cookies = document.cookie.split(";");
    //     let guestID = null;
    //     for(const cookie of cookies) {
    //         const [name, value] = cookie.trim().split('=');
    //         if (name === 'guestID') {
    //         guestID = value;
    //         break;
    //         }
    //     }
    



// const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// console.log("from socket.js userTimeZone=", userTimeZone);

// const userLang = navigator.language || navigator.userLanguage;
// console.log("userLang=", userLang)

// let userStatus = 'guest';
// // let guestID


// // const socket = io('http://localhost:3030');
// const socket = io('http://localhost:3030', {
//     reconnection: true,
//     reconnectionAttempts: 10,
//     reconnectionDelay: 5000,
//     reconnectionDelayMax: 30000,  // 30 seconds
//     query: { userTimeZone: userTimeZone, userLang: userLang  },
//     withCredentials: true,
//   });

// export default socket