import React from "react";
import './modals.css';

const RulesModal = ({ isOpen, onClose, handleCheckboxChange, onContinue, modalRoute } ) => {

   
    console.log("rulesModal is open");

    const handleContinueClick = () => {
        console.log("handling continue click")
        // handleContinue(modalRoute);
        onContinue(modalRoute);
    }


    return (
            //  Modal HTML structure
            <div id="rulesModal" className="modal" style={{ display: isOpen ? 'block' : 'none' }} onClick={onClose} >
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                    <span className="close" onClick={() => onClose()} >&times;</span>

                    <p id="modalAcceptRulesText">You haven't agreed to our Rules.<br />We require respectful and inclusive behavior, and encourage kindness above all else. <br />Please be compassionate with yourself and others as we navigate the world of grief.</p>
                    {/* <!-- Checkbox --> */}
                    <input type="checkbox" id="modalAgreeCheckbox" onChange={handleCheckboxChange} />

                    <label htmlFor="modalAgreeCheckbox">I agree to be kind and respectful.</label>
                    <div className="container">
                        <ul className="actions">
                            <li><a href="#" onClick={ handleContinueClick } className="button style3 small ">Continue</a></li>
                        </ul>
                    </div>
                </div>
            </div>

    );


};

export default RulesModal;
