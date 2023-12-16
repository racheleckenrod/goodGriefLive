import { React, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from '/src/utils/axiosConfig';
import Header from "../headers/Header";
import Footer from "../footers/Footer";
import Chat from "../chatRoom/Chat"

const ChatRoom = () => {
    const [data, setData] = useState(null)
    const { room } = useParams();
    const [searchParams] = useSearchParams();
    const _id = searchParams.get('_id');

    console.log("********room from params:", {room}, room, {_id})

    const encodedRoom = encodeURIComponent(room)

    useEffect(() => {
        let ignore = false;

        const fetchData = async () => {
            try {
                // make a GET request to the server endpoint
                console.log("CHECKON THIs", {room}, "from fetch")
               
                const response = await axios.get(`/chat/room/${encodedRoom}/`, {
                    withCredentials: true,
                });

                // if (!ignore) {
                    setData(response.data);
                    console.log("DATA BACK FROM CHATROOM:", response.data)
                    console.log("ROOM DATA=", data)
                    console.log('Request URL:', response.config.url);
                // }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

         return () => {
          console.log("ChatRoom unmounted");
        ignore = true;
        };
    }, [room, _id]);

    if (!data) {
        return <div>Loading...</div>;
    }



    return (
        <>
            <Header data={data} />
            <Chat data={data} />
            <Footer />
        </>
    )
}

export default ChatRoom;