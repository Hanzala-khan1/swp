import React from 'react';
import "./css/Newsletter.css";
import { Link } from 'react-router-dom';

const ShowNewsletter = ({ handlepopup }) => {

    const handleLinkClick = () => {
        handlepopup();
    };

    return (
        <>
            <div className="popup">
                <h2>Upcoming Retreat Date</h2>
                <h3>To be announced</h3>
                <button >
                    <Link to="/contact-us" className="link" onClick={handleLinkClick}>
                        Register Now
                    </Link>
                </button>
            </div>
        </>
    );
};

export default ShowNewsletter;
