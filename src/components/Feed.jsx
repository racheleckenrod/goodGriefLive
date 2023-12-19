import { React, useEffect, useState } from 'react';
import Header from './headers/Header';
import Footer from './footers/Footer';
import axios from '../utils/axiosConfig';

const Feed = () => {
    const [data, setData] = useState(null);


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
                        
                        {/* <% for(var i=0; i<posts.length; i++) {%> */}

                        {data.posts && data.posts.map((post) => (

                       

                            <div key={post._id} className="col-4 col-12-medium">
                                <section className="highlight">
                                    <h3>
                                        <a href={`/post/${post._id}`}>{ post.title }</a>
                                    </h3>
                                    <a href={`/post/${post._id}`}  className="image featured">
                                        <img src={ post.image } alt={ post.title } />
                                    </a>
                                   
                                    <p>{ post.caption }</p>
                                    <h2 className="">Post Likes: {post.likes}</h2>
                                    <div className="">
                                        <a href={`/profile/${post.user._id}`} >Posted by: {post.user.userName}</a>
                                        <p>On: {new Date(post.createdAt).toLocaleString( data.userLang, {timeZone: data.userTimeZone } )}</p>
                                        {/* </p> */}
                                    </div>
                                        <ul className="actions">
                                            <form
                                            className="row-1"
                                            action={`/post/likePostFeed/${post._id}?_method=PUT`}
                                            method="POST"
                                            >
                                                <button className="button style1" type="submit">
                                                    <i className="fa fa-heart"></i>like post
                                                </button>
                                            </form>
                                            <li>
                                                <a href={`/profile/${post.user._id}`} className="button style1">See Profile</a>
                                            </li>
                                            <li>
                                                <a href={`/post/${post._id}`} className="button style1">  See Post  </a>
                                            </li>
                                        </ul> 
                                        <h4>Comments:</h4>
                                        {/* <% for(var j=0; j<comments.length; j++) {%> */}
                                        {/* <% if( comments[j].post  == `${posts[i]._id}` ) {%> */}
                                        {data.comments
                                            .filter((comment) => comment.post === post._id)
                                            .map((comment) => (
                                                <div key={comment._id}>
                                                    {comment.post === post._id && (
                                                        <>
                                                            <span>{ comment.comment } </span>
                                                            <a href={`/profile/${comment.user._id}`}>  By: {comment.user.userName}</a>
                                                            <div>
                                                            <p>On:{new Date(comment.createdAt).toLocaleString( data.userLang, {timeZone: data.userTimeZone } )} </p>
                                                            </div>
                                                        </>
                                                    )}
                                                    
                                                </div>
                                            ))}
                                        
                                            {/* <%}%> */}
                                            {/* <% } %> */}
                                </section>
                                        {/*<%}%> */}
                    
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