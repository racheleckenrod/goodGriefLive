import { React, useEffect, useState } from "react";
import Header from "../headers/Header";
import Footer from "../footers/Footer";
import axios from "../../utils/axiosConfig";

const NewPost = () => {


    const [data, setData] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        caption: '',
    });
    const [imageFile, setImageFile] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('caption', formData.caption);
        formDataToSend.append('file', imageFile);

        try {

            const response = await axios.post('/post/createPost', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Post created successfully.', response.data)

            window.location.href = '/feed';

        } catch (error) {
            console.error('Error creating post:', error.message);
        }


    };


    useEffect(() => {
        let ignore = false;

        const fetchData = async () => {
            try {
                // make a GET request to the server endpoint
                const response = await axios.get(`/post/newPost/:id`, {
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


            <section id="highlights" className="wrapper style2">
                <div className="title">Create New Post</div>
                <div className="container">
            
                    
                    <div className="row mt-5">
                        <div className="col-6">
                            <div>
                                <p><strong>User Name</strong>: { data.user.userName }</p>
                                <p><strong>Email</strong>: { data.user.email }</p>
                                
                            </div>
                            <div className="mt-5">
                                {/* <!-- <h2>Add a post</h2> --> */}
                                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="imgUpload" className="form-label">Image</label>
                                        <input type="file" className="form-control" id="imageUpload" name="file" onChange={handleFileChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="title" name="title" onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="caption" className="form-label">Caption</label>
                                        <textarea className="form-control" id="caption" name="caption" onChange={handleInputChange}></textarea>
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
                            <a className="button style2 large" href="/feed">Return to Community</a>
                            </div>  
                        </div>  
                    </div>
                </div>
                    
                {/* </div> */}
            </section>


            <Footer />
        </>
    )
}

export default NewPost;