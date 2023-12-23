import { React, useEffect, useState } from 'react';
import Header from './headers/Header';
import Footer from './footers/Footer';
import CommentModal from './modals/CommentModal';
import axios from '../utils/axiosConfig';

const Feed = () => {
    const [data, setData] = useState(null);
    const [postId, setPostId] = useState(null);
    const [showCommentModal, setShowCommentModal] = useState(false);

    const handleCommentButtonClick = (postId) => {
        console.log("clicked comment");
        setPostId(postId)
        setShowCommentModal(true);
    };

    const handleModalClose = (newComment) => {
        setShowCommentModal(false);

        if (newComment) {
            setData((prevData) => ({
                ...prevData,
                comments: [...prevData.comments, newComment],
            }));
        }

    };

  

    const handlePostLike = async (postId) => {
        // e.preventDefault();

        try {
            const response = await axios.put(`/post/likePost/${postId}`);

            if (response.status === 200) {
                console.log('Post liked successfully. Likes=', response.data.post.likes);

                // const updatedData = await axios.get(`/post/${id}/`);

                setData((prevData) => ({ ...prevData, posts: prevData.posts.map((post) =>
                    post._id === postId ? { ...post, likes: response.data.post.likes } : post
                    ),
                }));
            } else {
                console.error('Failed to like post.');
            }
        } catch (error) {
            console.error('Error during like post:', error);
        }
    };


    useEffect(() => {
        let ignore = false;

        const fetchData = async () => {
            try {
                // make a GET request to the server endpoint
                const response = await axios.get("/feed", {
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
          console.log("Feed unmounted");
        ignore = true;
        };
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header data={data} />        
            {/* Highlights  */}
            <section id="highlights" className="wrapper style3">
                <div className="title">Our Community</div>
                <div className="container">
                    <div className="row aln-center">
                        

                        {data.posts && data.posts.map((post) => (

                            <div key={post._id} className="col-4 col-12-medium">
                                <section className="highlight">
                                    <h3>
                                        <a href={`/post/${post._id}`}>{ post.title }</a>
                                    </h3>
                                    <a href={`/post/${post._id}`}  className="image featured">
                                        <img src={ post.image } alt={ post.title }  loading="lazy" quality="auto:low"/>
                                    </a>
                                   
                                    <p>{ post.caption }</p>
                                    <h2 className="">Post Likes: {post.likes}</h2>
                                    <div className="">
                                        <a href={`/profile/${post.user._id}`} >Posted by: {post.user.userName}</a>
                                        <p>On: {new Date(post.createdAt).toLocaleString( data.userLang, {timeZone: data.userTimeZone } )}</p>
                                        {/* </p> */}
                                    </div>

                                    
                                    <h4>
                                        {data.comments.filter((comment) => comment.post === post._id).length > 0 && (
                                            <>Comments:</>
                                        )}
                                    </h4>

                                    {data.comments
                                        .filter((comment) => comment.post === post._id)
                                        .map((comment) => (
                                            <div key={comment._id}>
                                                {comment.post === post._id && (
                                                    <>
                                                        <p style={{margin: '1em 0 0 0'}}>{ comment.comment } </p>
                                                        <a href={`/profile/${comment.user._id}`}>  By: {comment.user.userName}</a>
                                                        <div>
                                                        <p>On:{new Date(comment.createdAt).toLocaleString( data.userLang, {timeZone: data.userTimeZone } )} </p>
                                                        </div>
                                                    </>
                                                )}
                                                
                                            </div>
                                    ))}
                                    <ul className="actions">
                                        <li>      
                                            <button className="button style1" onClick={() => handlePostLike(post._id)}>
                                                <i className="fa fa-heart"></i>like post
                                            </button>
                                        </li>
                                        <li>      
                                            <button className="button style1" onClick={() => handleCommentButtonClick(post._id)}>
                                                Add Comment
                                            </button>
                                            {showCommentModal && (
                                                <CommentModal postId={postId} onClose={handleModalClose} />
                                            )}
                                        </li>
                                        
                                        <li>
                                            <a href={`/profile/${post.user._id}`} className="button style1">See Profile</a>
                                        </li>
                                        <li>
                                            <a href={`/post/${post._id}`} className="button style1">  See Post  </a>
                                        </li>
                                    </ul> 
                                    <hr />
                                        
                                </section>
                    
                            </div>
                
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        
        </>
    )
};

export default Feed;