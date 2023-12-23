import React, { useState } from "react";
import axios from "../../utils/axiosConfig";
import './modals.css';


const CommentModal = ({ postId, onClose }) => {
    const [commentText, setCommentText] = useState('');

    const handleCloseModal = (event) => {
        // Check if the click occurred outside the modal content
        if (event.target === event.currentTarget) {
          onClose();
        }
    };

    const handleCommentSubmit = async () => {
        try {
            console.log("postId=", postId )
            const response = await axios.post(`/comment/createComment/${postId}`, { comment: commentText });

            
            // onCommentSubmit();
            onClose(response.data.comment);
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    return (
        // <div className="modal">
        //     <div className="modal-content">
        //         <textarea
        //             value={commentText}
        //             onChange={(e) => setCommentText(e.target.value)}
        //             placeholder="Enter your comment..."
        //         />
                // <button  className="button style1" onClick={handleCommentSubmit}>Submit Comment</button>
                // <button  className="button style1" onClick={onClose}>Close</button>
        //     </div>
        // </div>
         <div  className="modal" onClick={handleCloseModal} >
         <div className="modal-content" onClick={(e) => e.stopPropagation()}>
             <span className="close" onClick={() => onClose()} >&times;</span>
             <h3>Add Comment</h3>
             <form>
             <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Enter your comment..."
                />
            </form>
             <div className="container">
                 <ul className="actions">
                    <li><button  className="button style1" onClick={handleCommentSubmit}>Submit Comment</button></li>
                    <li><button  className="button style1" onClick={onClose}>Close</button></li>
                     {/* <li><a href="#" id="continueButton" className="button style3 small continue">Continue</a></li> */}
                 </ul>
             </div>
         </div>
     </div>
    );
};

export default CommentModal