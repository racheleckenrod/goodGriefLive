import { react, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../utils/axiosConfig';
import Header from '../headers/Header';
import Footer from '../footers/Footer';
import React from 'react';

const ShowProfile = () => {
    const [data, setData] = useState(null);
    const { id } = useParams();
    const encoded_id = encodeURIComponent(id)
    console.log("_id=", id, encoded_id)



    useEffect(() => {
        let ignore = false;

        const fetchData = async () => {
            try {
                // make a GET request to the server endpoint
                const response = await axios.get(`/profile/${id}`, {
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
          console.log("ShowProfile unmounted");
        ignore = true;
        };
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    // const { user, chatUser, posts, likedPosts, comments } = data;


    return (
        <>
            <Header data={data} />

            <section id="main" className="wrapper style2">
                <div className="title">Welcome to { data.chatUser.userName}'s Profile, { data.user.userName }</div>
                <div className="container">
                    <div className="row gtr-150">
                        <div className="col-8 col-12-medium">

                            {/* Content */}
                            <div id="content">
                                <article className="box post">
                                    <header className="style1">
                                        <h2>{ data.chatUser.greeting}</h2>
                                        <p>Please enjoy your visit. The greeting above is customizable.</p>
                                    </header>
                                    <a href="#" className="image featured">
                                        <img src={ data.chatUser.profilePicture} alt="profile picture" />
                                    </a>
                                    <h2>{ data.chatUser.userName}'s Story:</h2>
                            
                                    <p>{ data.chatUser.story }</p>

                                    <header>
                                        <h2 className="">My most recent posts:</h2>
                                    </header>
                        


                                    <div className="row gtr-150">
                                        { data.posts.length > 0 && (
                                            <div className="col-6 col-12-small">
                                                <section className="box">
                                                    <header>
                                                        <h2>{ data.posts[data.posts.length-1].title }</h2>
                                                    </header>
                                                    <a href={`/post/${data.posts[data.posts.length-1]._id}`} className="image featured"><img src={ data.posts[data.posts.length-1].image } alt="latest post" /></a>
                                                    <p>{ data.posts[data.posts.length-1].caption }</p>
                                                    <a href={`/post/${ data.posts[data.posts.length-1]._id }`} className="button style1">See Post</a>
                                                </section>
                                            </div>
                                        )}

                                        { data.posts.length > 1 && (
                                            <div className="col-6 col-12-small">
                                                <section className="box">
                                                    <header>
                                                        <h2>{ data.posts[data.posts.length-2].title }</h2>
                                                    </header>
                                                    <a href={`/post/${ data.posts[data.posts.length-2]._id }`} className="image featured"><img src={ data.posts[data.posts.length-2].image } alt="second latest post" /></a>
                                                    <p>{ data.posts[data.posts.length-2].caption }</p>
                                                    <a href={`/post/${ data.posts[data.posts.length-2]._id }`} className="button style1">See Post</a>
                                                </section>
                                            </div>
                                        )}
                                    </div>
                                </article>

                            </div>
                        </div>    
                        <div className="col-4 col-12-medium">

                            {/* Sidebar */}
                            <div id="sidebar">
                                <section className="box">
                                    <header>
                                        <h2>About { data.chatUser.userName}:</h2>
                                    </header>
                                    <p>{ data.chatUser.about }</p>
                                
                                </section>
                                <section className="box">
                                    <header>
                                        <h2>My Most Liked Posts</h2>
                                    </header>
                                    <ul className="style2">
                                        <li>
                                            { data.posts.length > 0 && (
                                            <article className="box post-excerpt">
                                                <a href={`/post/${ data.likedPosts[0]._id }`} className="image left"><img src={ data.likedPosts[0].image } alt="most liked post" /></a>
                                                <h3><a href={`/post/${ data.likedPosts[0]._id }`}>{ data.likedPosts[0].title}</a></h3>
                                                <p>{ data.likedPosts[0].caption }</p>
                                            </article>
                                            )}
                                        </li>
                                        <li>
                                            {data.posts.length > 1 && (
                                            <article className="box post-excerpt">
                                            <a href={`/post/${ data.likedPosts[1]._id }`} className="image left"><img src={ data.likedPosts[1].image } alt="second most liked post" /></a>
                                            <h3><a href={`/post/${ data.likedPosts[1]._id }`}>{ data.likedPosts[1].title}</a></h3>
                                            <p>{ data.likedPosts[1].caption }</p>
                                            </article>
                                            )}
                                        </li>
                                        <li>
                                            { data.posts.length > 2 && (
                                            <article className="box post-excerpt">
                                                <a href={`/post/${ data.likedPosts[2]._id }`} className="image left"><img src={ data.likedPosts[2].image } alt="third most lked post" /></a>
                                                <h3><a href={`/post/${ data.likedPosts[2]._id }`}>{ data.likedPosts[2].title}</a></h3>
                                                <p>{ data.likedPosts[2].caption }</p>
                                            </article>
                                            )}
                                        </li>
                                    </ul>
                                </section>
                                <section className="box">
                                <a href="#" className="button style1">Archives</a>

                                    <header>
                                        <h2>My Story Evolves Over Time</h2>
                                    </header>
                                    <ul className="style3">
                                        { data.posts.map((post, i) => (
                                        <li key={i}>
                                            <a href={`/post/${post._id}`}>{ post.title }</a>
                                        </li>
                                        ))}
                                    </ul>
                        
                                </section>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* Highlights */}
            <section id="highlights" className="wrapper style3">
                <div className="title">In Loving Memory</div>
                <div className="container">
                    <div className="row aln-center">

                        {data.posts.map((post, i) => (

                            <div key={i} className="col-4 col-12-medium">
                                <section className="highlight">
                                    <a href={`/post/${post._id}`}  className="image featured">
                                        <img src= { post.image } alt={ post.title} />
                                    </a>
                                    <h3>
                                        <a href="#">{post.title}</a>
                                    </h3>
                                    <p>{post.caption}</p>
                                    <div className="">Likes: { post.likes }</div>
                                    <div className="">
                                        <a href={`/profile/${post.user._id}`}>Posted by:{post.user.userName}</a>
                                    </div>
                                    <ul className="actions">
                                        <li>
                                            <a href={`/profile/${post.user._id}`} className="button style1">See Profile</a>
                                        </li>
                                    </ul>
                                    <h4>Comments:</h4>
                                        { data.comments.map((comment, j) => (
                                            <React.Fragment key={j}>
                                                { comment.post  === post._id && (
                                                    <>
                                                        <p>{ comment.comment }</p>
                                                        <a href={`/profile/${comment.user._id}`}>By: { comment.user.userName }</a>
                                                        
                                                    </>
                                                )}
                                            </React.Fragment>
                                        ))}
                                </section>
                            </div>
                        ))}
                
                    </div>
                </div>
            </section>


            <section id="highlights" className="wrapper style2">
                <div className="title">Create New Post</div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-6">
                            <div>
                                <p><strong>User Name</strong>: {data.user.userName }</p>
                                <p><strong>Email</strong>: { data.user.email }</p>
                                
                            </div>
                            <div className="mt-5">
                                <h2>Add a post</h2>
                                <form action="/post/createPost" encType="multipart/form-data"       method="POST"
                                >
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="title" name="title" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="caption" className="form-label">Caption</label>
                                        <textarea className="form-control" id="caption" name="caption"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="imgUpload" className="form-label">Image</label>
                                        <input type="file" className="form-control" id="imageUpload" name="file" />
                                    </div>
                                    <div className=""></div>
                                        <div className="">
                                            <button type="submit" className="button style1 large" value="Upload">Submit</button>
                                            <div className=""></div>
                                            <a href="/logout" className="button style1 large ">Logout</a>
                                        </div>
                                </form>
                            </div>
                        </div>
                        <div className="">
                        <div className="">
                            <a className="button style3 large" href="/feed">Return to Feed</a>
                        </div>  
                        </div>  
                    </div>
                </div>

            </section>
        </>
        
    )
}

export default ShowProfile;