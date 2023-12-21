import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import axios from "../../utils/axiosConfig";
import Header from "../headers/Header";
import Footer from "../footers/Footer";

const EditPost = () => {

    const [data, setData] = useState(null);
    const { id } = useParams();
    const encodedId = encodeURIComponent(id);
    console.log("editPost",id)
    const navigate = useNavigate();


    useEffect(() => {
        let ignore = false;

        const fetchData = async () => {
            try {
                // make a GET request to the server endpoint
                const response = await axios.get(`/post/editPost/${id}/`, {
                    withCredentials: true,
                });
                
                if (!ignore) {
                    setData(response.data);
                    console.log("is this the console log?", response.data)
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

         return () => {
          console.log("EditPost unmounted");
        ignore = true;
        };
    }, [id]);

    

    const handleTitleChange = (e) => {
        const { value } = e.target;
        setData((prevData) => ({
            ...prevData,
            post: {
                ...prevData.post,
                title: value,
            },
        }));
    };

    const handleCaptionChange = (e) => {
        const { value } = e.target;
        setData((prevData) => ({
            ...prevData,
            post: {
                ...prevData.post,
                caption: value,
            },
        }));
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`/post/editPost/${data.post._id}?_method=PUT`, data.post);
            console.log("edit post=", response)

            navigate(`/post/${id}`);

        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    if (!data) {
            return <div>Loading...</div>;
        }


    return (
        <>
        <Header />

        <section id="highlights" className="wrapper style3">
            <div className="title">Edit Post</div>
            <div className="container">    
                <div className="row justify-content-center mt-5">
                    <div className="card p-5">
                        <h1>{ data.post.title }</h1>
                        <img className="image fit featured" src={ data.post.image } />
                            <div className="row p-5 justify-content-between">
                                <form
                                className="col-1"
                                action={`/post/likePost/ ${data.post.id }?_method=PUT`}
                                method="POST"
                                >
                                    <button className="btn style1 fa fa-heart" type="submit"></button>
                                </form>
                                <h3 className="col-3">Likes: { data.post.likes }</h3>
        
                                {/* <%if(post.user.id == user.id){ %> */}
                                <form
                                action={`/post/deletePost/${data.post.id}?_method=DELETE`}
                                method="POST"
                                className="col-3"
                                >
                                    <button className="btn style3 fa fa-trash" type="submit">delete my post</button>
                                </form>
                                <form
                                action={`/post/editPost/${ data.post.id }`}
                                className="col-3"
                                >
                                    <button className="btn style3 fa " type="submit">edit my post</button>
                                </form>


                                     {/* <%}%> */}
                            </div>
            
                        <div className="text-center p-5">
                            <p>{ data.post.caption }</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-5">
                    <h2>Edit your post</h2>
                    <form action={`/post/editPost/${ data.post.id }?_method=PUT`}  method="POST" onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" value={data.post.title} name="title" onChange={(e) => handleTitleChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="caption" className="form-label">Caption</label>
                            <textarea className="form-control" id="caption" name="caption" value={data.post.caption} onChange={handleCaptionChange} />
                        </div>
        
                        <button type="submit" className="button style1 large">Submit</button>
                    </form>
                </div>

                <div className="col-6 mt-5">
                    <a className="button style1 large fa" href="/profile">Return to Profile</a>
                    <div className="py-3"></div>
                    <a className="button style1 large" href="/feed">Return to Community</a>
                    <div className="py-3"></div>
                    <a href="/logout" className="button style1 large">Logout</a>
                    <div className="py-5"></div>
                </div>
            </div>
        </section>

        <Footer />
        </>
    )
}

export default EditPost;