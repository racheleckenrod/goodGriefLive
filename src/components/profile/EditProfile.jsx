import React, { useEffect, useState } from "react";
import axios from "../../utils/axiosConfig";
import Header from "../headers/Header";
import Footer from "../footers/Footer";

const EditProfile = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        let ignore = false;

        const fetchData = async () => {
            try {
                // make a GET request to the server endpoint
                const response = await axios.get('/editProfile', {
                    withCredentials: true,
                });
                
                if (!ignore) {
                    setData(response.data);
                    console.log("is this the console log?", response.data, data)
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

         return () => {
          console.log("Welcome unmounted");
        ignore = true;
        };
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <Header data={data.user}/>
            {/* Main */}
            <section id="main" className="wrapper style2">
                <div className="title">Welcome to Editing, { data.user.userName }</div>
                <div className="container">
                    <div className="row gtr-150">
                        <div className="col-8 col-12-medium">

                            {/* Content */}
                            <div id="content">
                                <article className="box post">
                                    <header className="style1">
                                        <h2>{ data.user.greeting}</h2>
                                        <p>Please enjoy your visit. The greeting above is customizable.</p>
                                    </header>
                                    <div className="col-12 mt-5">
                                        <h2>Edit your Profile</h2>
                                        <form action="/editProfile/{ data.user.id }?_method=PUT"  method="POST">
                                            <div className="mb-3">
                                                <label htmlFor="greeting" className="form-label">Custom Greeting:</label>
                                                <input type="text" className="form-control" id="greeting" value={ data.user.greeting } name="greeting" />
                                            </div>
                                            <button type="submit" className="button style1 large">Submit</button>
                                        </form>
                                    </div>
                    
                                    <a href="#" className="image featured">
                                        <img src={ data.user.profilePicture } alt="profile picture" />
                                    </a>


                    

                                    <div className="col-12 mt-5">
                                        <h2>Choose your Profile Picture</h2>
                                        <form action="/profilePicture/{ data.user.id }?_method=PUT" enctype="multipart/form-data" method="POST">
                                            <div className="mb-3">
                                                <label htmlFor="imgUpload" className="">Image</label>
                                                <input type="file" className="" id="imageUpload" name="file" />
                                            </div>
                                                {/* <div className="mb-3">
                                                    <label for="title" className="form-label">Title</label>
                                                    <input type="text" className="form-control" id="title" name="title">
                                                </div> */}
                                                {/* <div className="mb-3">
                                                    <label for="caption" className="form-label">Caption</label>
                                                    <textarea className="form-control" id="caption" name="caption"></textarea>
                                                </div> */}
                                            
                    
                                            <button type="submit" className="button style1 large" value="Upload">Submit</button>
                                            <div className=""></div>
                                            {/* </div> */}
                                        </form>
                    
                                        <div className="col-12 mt-5">
                                            <h2>Edit your Profile</h2>
                                            <form action="/editProfile/{ data.user.id }?_method=PUT"  method="POST">
                                                <div className="mb-3">
                                                    <label for="story" className="form-label">My Story</label>
                                                    <textarea className="form-control" id="story" value={ data.user.story } name="story"></textarea>
                                                </div>
                                                <button type="submit" className="button style1 large">Submit</button>
                                            </form>
                                        </div>
                                        <p>My Story.</p>
                                        <p>{ data.user.story }</p>
                
                
                                        <header>
                                            <h2 className="">My most recent posts:</h2>
                                        </header>
                                        <div className="row gtr-150">
                                            {data.posts.length > 0 && (
                                                    <div className="col-6 col-12-small">
                                                    <section className="box">
                                                    <header>
                                                        <h2>{ posts[posts.length-1].title }</h2>
                                                    </header>
                                                    <a href={`/post/${ posts[posts.length-1]._id }`} className="image featured"><img src={ posts[posts.length-1].image } alt="" /></a>
                                                    <p>{ posts[posts.length-1].caption }</p>
                                                    <a href={`/post/${ posts[posts.length-2]._id }`} className="button style1">More</a>
                                                    </section>
                                                </div>
                                            )}

                                            {data.posts.length > 1 && (
                                                <div className="col-6 col-12-small">
                                                    <section className="box">
                                                    <header>
                                                        <h2>{ posts[posts.length-2].title }</h2>
                                                    </header>
                                                    <a href={`/post/${ posts[posts.length-2]._id }`} className="image featured"><img src={ posts[posts.length-2].image } alt="" /></a>
                                                    <p>{ posts[posts.length-2].caption }</p>
                                                    <a href="/post/{ posts[posts.length-2]._id }" className="button style1">More</a>
                                                    </section>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="col-4 col-12-medium">

                            {/* Sidebar */}
                            <div id="sidebar">
                                <section className="box">
                                    <div className="col-12 mt-5">
                                        <h2>Edit your Profile</h2>
                                        <form action="/editProfile/{ data.user.id }?_method=PUT"  method="POST">
                                            <div className="mb-3">
                                                <label for="about" className="form-label">About Me</label>
                                                <textarea className="form-control" id="about" value={ data.user.about } name="about">{ data.user.about }</textarea>
                                            </div>
                                            {/* <div className="mb-3">
                                                <label for="caption" className="form-label">Caption</label>
                                                <textarea className="form-control" id="caption" name="caption"></textarea>
                                            </div> */}
                                        
                                            <button type="submit" className="button style1 large">Submit</button>
                                        </form>
                                    </div>
                                    <header>
                                        <h2>About Me:</h2>
                                    </header>
                                    <p>{ data.user.about }</p>
                                    <a href="/profile" className="button style1">Back to Profile</a>
                                </section>
                                <section className="box">
                                    <header>
                                        <h2>My Most Liked Posts</h2>
                                    </header>
                                    <ul className="style2">
                                        <li>
                                            {data.posts.length > 0 && (
                                                <article className="box post-excerpt">
                                                    <a href="/post/{ likedPosts[0]._id }" className="image left"><img src="{ likedPosts[0].image }" alt="" /></a>
                                                    <h3><a href="/post/{ likedPosts[0]._id }">{ likedPosts[0].title}</a></h3>
                                                    <p>{ likedPosts[0].caption }</p>
                                                </article>
                                            )}
                                        </li>
                                        <li>
                                            {data.posts.length > 1 && (
                                                <article className="box post-excerpt">
                                                    <a href="/post/{ likedPosts[1]._id }" className="image left"><img src="{ likedPosts[1].image }" alt="" /></a>
                                                    <h3><a href="/post/{ likedPosts[1]._id }">{ likedPosts[1].title}</a></h3>
                                                    <p>{ likedPosts[1].caption }</p>
                                                </article>
                                            )}
                                        </li>
                                        <li>
                                            {data.posts.length > 2 && (
                                                <article className="box post-excerpt">
                                                    <a href="/post/{ likedPosts[2]._id }" className="image left"><img src="{ likedPosts[2].image }" alt="" /></a>
                                                    <h3><a href="/post/{ likedPosts[2]._id }">{ likedPosts[2].title}</a></h3>
                                                    <p>{ likedPosts[2].caption }</p>
                                                </article>
                                            )}
                                        </li>
                                    </ul>
                                    <a href="#" className="button style1">Archives</a>
                                </section>
                                <section className="box">
                                    <header>
                                        <h2>My Story Evolves Over Time</h2>
                                    </header>
                                    <ul className="style3">
                                        {data.posts.map((post, i) => (
                                            <li key={i}>
                                                <a href={`/post/${post._id}`}>{ post.title }</a></li>
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
                                    <ul className="actions">
                                            <li>
                                            <a href={`/post/${ data.post._id}`}>
                                                <img className="image fit featured" src={ data.post.image} alt={ data.post.title } />
                                            </a>
                                        </li>
                                    </ul>
                                        <h3><a href="#">{post.title}</a></h3>
                                            <p>{post.caption}</p>
                                            <ul className="actions">
                                                <li>
                                                    <a href={`/post/${ data.post._id }`} className="button style1">Comment</a>
                                                </li>
                                            </ul>
                                </section>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default EditProfile;