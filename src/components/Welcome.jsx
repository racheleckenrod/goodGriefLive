import { React, useState, useEffect } from "react";
import axios from '/src/utils/axiosConfig';
import Header from "./headers/Header";
import Footer from "./footers/Footer";

const Welcome = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        let ignore = false;

        const fetchData = async () => {
            try {
                // make a GET request to the server endpoint
                const response = await axios.get('/api/welcome', {
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

        <div>
            <Header data={data} />

            {/* Main */}
            <section id="main" className="wrapper style2">
                <div className="title">Welcome, { data.user.userName }</div>
                <div className="container">
                    <div className="row gtr-150">
                        <div className="col-8 col-12-medium">

                            {/* Content */}
                            <div id="content">
                                <article className="box post">
                                    <header className="style1">
                                        <h2>{ data.user.greeting }</h2>
                                        <p>Please enjoy your visit. The greeting above is customizable.</p>
                                    </header>
                                    <a href="#" className="image featured">
                                        <img src={ data.user.profilePicture} alt="profile picture" />
                                    </a>
                                    <h2>My Story:</h2>

                                        <p>{ data.user.story }</p>
                                        <p>May you find compassionate understanding here and enjoy sharing memories of your loved ones, as you offer yourself to those who have an understanding of your losses. May we learn to support each other.</p>
                                        <p>Please take a moment and tell us about yourself.</p>
                                        <p></p>
                                        {/* </article> */}
                                        {/* Contact Form */}
                                        {/* <section>
                                        <form method="post" action="#">
                                            <div className="row gtr-50">
                                                <div className="col-6 col-12-small">
                                                    <input type="text" name="name" id="contact-name" placeholder="Name" />
                                                </div>
                                                <div className="col-6 col-12-small">
                                                    <input type="text" name="email" id="contact-email" placeholder="Email" />
                                                </div>
                                                <div className="col-12">
                                                    <textarea name="message" id="contact-message" placeholder="Message" rows="4"></textarea>
                                                </div>
                                                <div className="col-12">
                                                    <ul className="actions">
                                                        <li><input type="submit" className="style1" value="Send" /></li>
                                                        <li><input type="reset" className="style2" value="Reset" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </form>
                                    </section> */}

                                </article>
                                    <div className="row gtr-150">
                                        {data.posts.length > 0 ? (
                                        <div className="col-6 col-12-small">
                                            <section className="box">
                                            <header>
                                                <h2>{ data.posts[data.posts.length-1].title }</h2>
                                            </header>
                                            <a href="#" className="image featured"><img src="{ data.posts[data.posts.length-1].image }" alt="latest post" /></a>
                                            <p>{ data.posts[data.posts.length-1].caption }</p>
                                            <a href="#" className="button style1">See Post</a>
                                            </section>
                                        </div>
                                        ) : null}
                                        {data.posts.length > 2 ? (
                                        <div className="col-6 col-12-small">
                                            <section className="box">
                                            <header>
                                                <h2>{ data.posts[data.posts.length-2].title }</h2>
                                            </header>
                                            <a href="#" className="image featured"><img src="{ data.posts[data.posts.length-2].image }" alt="" /></a>
                                            <p>{ data.posts[data.posts.length-2].caption }</p>
                                            <a href="#" className="button style1">More</a>
                                            </section>
                                        </div>
                                        ) : null}
                                    </div>
                            </div>

                        </div>
                        <div className="col-4 col-12-medium">

                            {/* Sidebar */}
                            <div id="sidebar">
                                <section className="box">
                                    <header>
                                        <h2>About Me:</h2>
                                    </header>
                                    <p>{ data.user.about }</p>
                                    <a href="/editProfile" className="button style1">edit</a>
                                </section>
                                <section className="box">
                                    <header>
                                        <h2>My Most Liked Posts</h2>
                                    </header>
                                    <ul className="style2">
                                        <li>
                                            {data.posts.length > 0 ? (
                                            <article className="box post-excerpt">
                                                <a href="/post/{ data.likedPosts[0]._id }" className="image left"><img src="{ data.likedPosts[0].image }" alt="" /></a>
                                                <h3><a href="/post/{ data.likedPosts[0]._id }">{ data.likedPosts[0].title}</a></h3>
                                                <p>{ data.likedPosts[0].caption }</p>
                                            </article>
                                                ) : null}
                                        </li>
                                        <li>
                                            {data.posts.length > 1 ? (
                                            <article className="box post-excerpt">
                                                <a href="/post/{ data.likedPosts[1]._id }" className="image left"><img src="{ data.likedPosts[1].image }" alt="" /></a>
                                                <h3><a href="/post/{ data.likedPosts[1]._id }">{ data.likedPosts[1].title}</a></h3>
                                                <p>{ data.likedPosts[1].caption }</p>
                                            </article>
                                            ) : null}
                                        </li>
                                        <li>
                                            {data.posts.length > 2 ? (
                                            <article className="box post-excerpt">
                                                <a href="/post/{ data.likedPosts[2]._id }" className="image left"><img src="{ data.likedPosts[2].image }" alt="" /></a>
                                                <h3><a href="/post/{ data.likedPosts[2]._id }">{ ldata.ikedPosts[2].title}</a></h3>
                                                <p>{ data.likedPosts[2].caption }</p>
                                            </article>
                                            ) : null}
                                        </li>
                                    </ul>
                                    <a href="#" className="button style1">Archives</a>
                                </section>
                                <section className="box">
                                    <header>
                                        <h2>My Story Evolves Over Time</h2>
                                    </header>
                                    <ul className="style3">
                                        {data.posts.map(post => (
                                            <li key={data.post._id}>
                                                <a href={`/post/${data.post._id}`}>{ data.post.title }</a>
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

                        {data.posts.map(post => (
                        <div className="col-4 col-12-medium">
                            <section className="highlight">
                                <li className="" key={post._id}>
                                    <a href="/post/{ post._id}">
                                        <img className="image fit featured" src="{post.image}" />
                                    </a>
                                </li>

                                <h3><a href="#">{`${post.title}`}</a></h3>
                                <p>{`${post.caption}`}</p>
                                <ul className="actions">
                                    <li><a href="/post/{ post._id }" className="button style1">Comment</a></li>
                                </ul>
                            </section>
                        </div>

                        ))}

                    </div>

                </div>
                           
            </section>


            <section id="highlights2" className="wrapper style2">
                <div className="title">Create New Post</div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-6">
                            <div>
                                <p><strong>User Name</strong>: { data.user.userName }</p>
                                <p><strong>Email</strong>: { data.user.email }</p>

                            </div>
                            <div className="mt-5">
                                <h2>Add a post</h2>
                                <form action="/post/createPost" encType="multipart/form-data" method="POST">
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
                                <a className="button style3 large" href="/feed">Communtiy</a>
                            </div>  
                        </div>  
                    </div>
                </div>


                    {/* </div> */}

                    {   /* </div> */}
            </section>
            <Footer />
        </div>
    )

};

export default Welcome;