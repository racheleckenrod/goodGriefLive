import { React, useEffect, useState, } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../utils/axiosConfig';
import Header from '/src/components/headers/Header';
import Footer from '/src/components/footers/Footer';

const Post = () => {

    const { id } = useParams();
    const encodedId = encodeURIComponent(id)
    console.log("id=", id)

    const [data, setData] = useState(null);


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
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }


    return (
        <>
        <Header data={data} />


            <section id="intro" className="wrapper style3">
                <div className="title">{ data.post.title }<br />
                    Posted By:{ data.post.user.userName }
                </div>

                <div className="container">

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
                                    action={`/post/likePost/${data.post.id}?_method=PUT`}
                                    method="POST"
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
                                        <form
                                        action={`/post/editPostPage/${ data.post.id }`}
                                    
                                        className="col-3"
                                        >
                                            <button className="button style1" type="submit">edit</button>
                                        </form>

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
                                            <h4>{`data.comment.comment`}</h4>
                                            <a href={`/profile/${comment.user._id}`}>By: {comment.user.userName }</a>
                                            <p>On: {comment.createdAt.toLocaleString( userLang, {timeZone: userTimeZone } ) } </p>
                                            <form
                                            className=""
                                            action={`/comment/likeComment/${comment._id}?_method=PUT`}
                                            method="POST"
                                            >
                                                <button className="button style1" type="submit"><i className="fa fa-heart"></i>Comment</button>
                                            </form>
                                            <p className="p-3">Comment Likes: {comment.likes}</p>
                                       
                                            {comment.user._id === user.id && (

                                                <form
                                                action={`/comment/deleteComment/${comment._id}?_method=DELETE`}
                                                method="POST"
                                                className="col-3"
                                                >
                                                    <button className="button style1 " type="submit"><icon className=" fa fa-trash"></icon>comment</button>
                                                </form>
                                            )}
                                        </li>
                                    ))}
                                
                                </ul>
                            </div>
                                
                            <h2>Add a Comment</h2>
                            <div className="card">
                                <form action={`/comment/createComment/${data.post._id}`} method="POST">
                                    <div className="">
                                        <label htmlFor="comment" className="form-label">Comment</label>
                                        <input type="text" className="form-control" id="comment" name="comment" />
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
                </div>

            </div>
        </section>


        <Footer />
        </>
    )
}

export default Post;