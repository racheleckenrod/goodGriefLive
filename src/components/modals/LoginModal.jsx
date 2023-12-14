import React from "react";
import './modals.css';

const LoginModal = ({ isOpen, onClose, modalText}) => {
    return (
        <>
            {/* Modal HTML structure */}
            <div id="loginModal" className="modal logInModal" style={{ display: isOpen ? 'block' : 'none' }} onClick={onClose} >
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <span className="close" onClick={() => onClose()} >&times;</span>
                    <p id="modalLoginText">{}modalText</p>
                    <div className="container">
                        <ul className="actions">
                            <li><a href="/login" className="button style3 small">Login</a></li>
                            <li><a href="/signup" className="button style3 small">Signup</a></li>
                            <li><a href="#" id="continueButton" className="button style3 small continue">Continue</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
};

export default LoginModal;