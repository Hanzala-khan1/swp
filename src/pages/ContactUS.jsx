import React from 'react';
import contact from "../assets/Ncontact.jpg";
import "./css/contactus.css";
// import { Client } from 'acuity-scheduling';
import Navbar from '../component/Nav';


const ContactUS = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = 'https://swaywithpray.as.me/';
    };

    return (
        <div>
            <Navbar />

            <div className="container">
                <div className="contact-section">
                    <div className="contact-image">
                        <img src={contact} alt="Contact Image" />
                    </div>
                    <div className="contact-form">
                        <h2 className='Danceteacher'>Send us a message and we will get back to you as soon as possible!</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='namediv'>
                                <input type="text" name="firstName" placeholder="First Name" required />
                                <input type="text" name="lastName" placeholder="Last Name" required />
                            </div>
                            <input type="email" name="email" placeholder="Your Email" required />
                            <select name="interest" required>
                                <option value="">Select Interest</option>
                                <option value="General Inquiry">Wedding</option>
                                <option value="Product Support">Privates</option>
                                <option value="Sales">Group classes</option>
                                <option value="General Inquiry">Special Event</option>
                                <option value="Product Support">Fitness</option>
                                <option value="Sales">Other</option>
                            </select>
                            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUS;
