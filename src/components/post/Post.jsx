import { React, useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from '../../utils/axiosConfig';
import Header from '/src/components/headers/Header';
import Footer from '/src/components/footers/Footer';

const Post = () => {

    const [data, setData] = useState(null);
    const { id } = useParams();
    const encodedId = encodeURIComponent(id)
    console.log("id=", id)
    const commentFormRef = useRef(null);
    const commentInputRef = useRef(null);

    const handlePostLike = async () => {
        // e.preventDefault();

        try {
            const response = await axios.put(`/post/likePost/${data.post.id}`);

            if (response.status === 200) {
                console.log('Post liked successfully. Likes=', response.data.post.likes);

                // const updatedData = await axios.get(`/post/${id}/`);

                setData({ ...data, post: response.data.post });
            } else {
                console.error('Failed to like post.');
            }
        } catch (error) {
            console.error('Error during like post:', error);
        }
    };

    const handleCommentLike = async (commentId) => {
        // e.preventDefault();

        try {
            const response = await axios.put(`/comment/likeComment/${commentId}`);

            if (response.status === 200) {
                console.log('Comment liked successfully. Likes=', response.data.comment.likes);

                const updatedComments = data.comments.map((comment) =>
                comment._id === commentId? { ...comment, likes: response.data.comment.likes } : comment );

                setData({ ...data, comments: updatedComments});
            } else {
                console.error('Failed to like post.');
            }
        } catch (error) {
            console.error('Error during like post:', error);
        }
    };


    const handleAddComment = async (e) => {
        e.preventDefault();

        const commentText = e.target.elements.comment.value;

        try {
            const response = await axios.post(`/comment/createComment/${data.post._id}` , {
                comment: commentText,
            });

            if (response.status === 201) {
                console.log('Comment added successfully.', response.data.comment);

                setData((prevData) => ({
                    ...prevData,
                    comments: [ response.data.comment, ...prevData.comments]
                }));

            commentInputRef.current.value = '';

            } else {
                console.error('Failed to add comment.');
            }
        } catch (error) {
            console.error('Error during comment submission:', error);
        }
    };

    const handleDeleteComment = async (commentId) => {
        try {
            const response = await axios.delete(`/comment/deleteComment/${commentId}`);

            if (response.status === 200) {

                console.log('Comment deleted successfully.');

                setData((prevData) => ({
                    ...prevData,
                    comments: prevData.comments.filter((c) => c._id !== commentId),
                }));
            } else {
                console.error('Failer to delete comment')
            }
        } catch (error) {
            console.error('Error during delete comment:', error);
        }
    }

    useEffect(() => {
        let ignore = false;

        const fetchData = async () => {
            try {
                // make a GET request to the server endpoint
                const response = await axios.get(`/post/${id}/`, {
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
          console.log("Post unmounted");
        ignore = true;
        };
    }, [id]);

    if (!data) {
        return <div>Loading...</div>;
    }

    console.log("data.post._id=",data.post._id)
    return (
        <>
        <Header data={data.user} />


            <section id="intro" className="wrapper style3">
                <div className="title">{ data.post.title }</div>
                <p className= "style1">
                    Posted By:{ data.post.user.userName }
                </p>

                {/* <div className="container"> */}

                    <div className="container">
                        <div className="row justify-content-center mt-5">
                            <div className="card p-5">
                                <h2></h2>
                                <img className="image fit featured" src={ data.post.image }/>
                                <div className="row p-5 justify-content-between">
                                    <div className="">
                                        <p>{ data.post.caption }</p>
                                    </div>
                            
                                    <form
                                    className="row-1"
                                    onSubmit={(e) =>{ e.preventDefault(); handlePostLike()}}
                                    >
                                        <button className="button style1" type="submit"><i className="fa fa-heart"></i>post</button>
                                    </form>
                                    <h3 className="col-3">Likes: { data.post.likes }</h3>

                                    {data.post.user.id === data.user.id && (
                                    <>
                                        <form
                                        action={`/post/deletePost/${ data.post.id }?_method=DELETE`}
                                        method="POST"
                                        className="col-3"
                                        >
                                            <button className="button style1" type="submit"><i className="fa fa-trash"></i>post</button>
                                        </form>

                                        <Link to={`/post/editPost/${ data.post._id }`} className="button style1">edit</Link>
                                        

                                    </>
                                )}
                            
                            </div>
                        
                        </div>
                        <div className="container">
                            <div className="row">
                                <h2>Comments:</h2>
                                <ul className="col list-unstyled">
                                    
                                    {data.comments.map((comment) => (
                                        <li className="col-6" key={comment._id}>
                                            <h4>{comment.comment}</h4>
                                            <a href={`/profile/${comment.user._id}`}>By: {comment.user.userName }</a>
                                            <p>On: {new Date(comment.createdAt).toLocaleString( data.userLang, {timeZone: data.userTimeZone } ) } </p>
                                            <p className="p-3">Comment Likes: {comment.likes}</p>
                                       
                                            {comment.user.userName === data.user.userName && (
                                                <form
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    handleDeleteComment(comment._id);
                                                }}
                                                method="POST"
                                                className="col-3"
                                                >
                                                    <button className="button style1 " type="submit"><i className=" fa fa-trash"></i>delete comment</button>
                                                </form>
                                            )}

                                            <form
                                            className=""
                                            onSubmit={(e) =>{ e.preventDefault(); handleCommentLike(comment._id)}}
                                            >
                                                <button className="button style1" type="submit"><i className="fa fa-heart"></i>Comment</button>
                                            </form>
                                           
                                        </li>
                                    ))}
                                
                                </ul>
                            </div>
                                
                            <h2>Add a Comment</h2>
                            <div className="card">
                                <form ref={commentFormRef} onSubmit={(e) => handleAddComment(e)}>
                                    <div className="">
                                        <label htmlFor="comment" className="form-label">Comment</label>
                                        <input ref={commentInputRef} type="text" className="form-control" id="comment" name="comment" />
                                    </div>
                                        
                                    <button type="submit" className="button style1">Submit</button>
                                </form>
                            </div>
                            
                        </div>
                        <div className="">
                            <a className="button style3" href={`/profile/${data.post.user._id}`}>See Profile</a>
                            <div className=""></div>
                            <a className="button style3" href="/chat">Lobby</a>
                            <div className=""></div>
                            <a className="button style3" href="/feed">Community</a>
                            <div className=""></div>
                            <a className="button style3" href="/">Home</a>
                            <div className=""></div>
                            <a className="button style3" href="/logout">Logout</a>
                            <div className=""></div>
                        </div>
                    </div>
                {/* </div> */}

            </div>
        </section>


        <Footer />
        </>
    )
}

export default Post;