import React, { useEffect, useState } from 'react'
import Navbar from '../component/Nav'
import "./css/services.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Newsletterpopup from '../component/Newsletterpopup';
import ShowNewsletter from '../component/ShowNewsletter';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const [popup, setPopup] = useState(true);
    const [Newsletter, setNewsletter] = useState(false)
    const navigate = useNavigate();

    const onshow = () => {
        setNewsletter(true)
    }

    const handlepopup = () => {
        setPopup(false);
        setNewsletter(false)
        localStorage.setItem('popupShown', 'true');
    };

    useEffect(() => {
        const popupShown = localStorage.getItem('popupShown');
        if (popupShown === 'true') {
            setPopup(false);
        }
    }, []);
    return (
        <>
            <Navbar />
            {popup && <div className="popup-overlay" onClick={handlepopup}></div>}
            {popup && <Newsletterpopup handlepopup={handlepopup} />}
            {Newsletter && <div className="popup-overlay" onClick={handlepopup}></div>}
            {Newsletter && <ShowNewsletter handlepopup={handlepopup} />}
            {/* //////////////////////////////////// */}
            <div className="containerimage" id="div1">

            </div>
            <div className="containerimage" id="div2">
                <div className='blackbox'>
                    <div className='toptraingle'>
                        <svg className="top black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="100,0 0,100 100,100" fill="rgba(8, 8, 8, 0.72)"></polygon>
                        </svg>
                    </div>
                    <div className='inner_text'>
                        <h1>
                            Join the Sway With Pray Movement in Austin, TX!
                        </h1>
                        <p>
                            Are you ready to dance your heart out? Whether you know all the latest Bollywood dances or
                            have never watched a single movie, Pray’s classes, choreography, and workshops will get you
                            moving like you never have before! Planning a wedding, party, or special event? Sway With
                            Pray will take it to the next level. Check out our Bollywood dance classes in Austin and more!
                        </p>
                        {/* <a href='https://www.youtube.com/channel/UC04eJMg0UhmhrvXfiXyvW5g' target='_blank'>
                            Learn More
                            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "1rem" }} />
                        </a> */}
                    </div>
                    <div className='bottomtraingle'>
                        <svg className="bottom black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="0,100 0,0 100,0" fill="rgba(8, 8, 8, 0.72)" ></polygon>
                        </svg>
                    </div>
                </div>
            </div >
            <div className="containerimage" id="div3">
                <div className='blackbox'>
                    <div className='toptraingle'>
                        <svg className="top black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="100,0 0,100 100,100" fill="rgba(8, 8, 8, 0.72)"></polygon>
                        </svg>
                    </div>
                    <div className='inner_text'>
                        <h1>
                            Pray is Your Wedding Choreographer in Austin!
                        </h1>
                        <p onClick={() => { navigate("/services/WeddingChoreography") }} style={{ cursor: "pointer" }}>
                            South Asian weddings are always a festive occasion! Whether you’re looking for help planning
                            an epic Sangeet or wanting a customized first dance, Pray is here to help. She’s provided
                            Bollywood dance choreography, performances, and workshops at all kinds of South Asian and
                            fusion weddings.
                        </p>
                        <a onClick={() => { navigate("/services/WeddingChoreography") }} style={{ cursor: "pointer" }}>
                            Learn More
                            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "1rem" }} />
                        </a>
                    </div>
                    <div className='bottomtraingle'>
                        <svg className="bottom black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="0,100 0,0 100,0" fill="rgba(8, 8, 8, 0.72)"></polygon>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="containerimage" id="div4">
                <div className='blackbox'>
                    <div className='toptraingle'>
                        <svg className="top black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="100,0 0,100 100,100" fill="rgba(8, 8, 8, 0.72)"></polygon>
                        </svg>
                    </div>
                    <div className='inner_text'>
                        <h1>
                            Let’s Nacho! Join Our Bollywood Dance Classes in Austin.
                        </h1>
                        <p onClick={() => { navigate("/services/BollywoodDanceClass") }} style={{ cursor: "pointer" }}>
                            Express joy, connect with community, and tell stories through movement with Bollywood
                            dancing! Pray’s Bollywood dance classes in Austin, Texas are fun for people of all cultural
                            backgrounds and skill levels. Find out more about Sway With Pray’s group and private
                            Bollywood dance lessons.
                        </p>
                        <a onClick={() => { navigate("/services/BollywoodDanceClass") }} style={{ cursor: "pointer" }}>
                            Learn More
                            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "1rem" }} />
                        </a>
                    </div>
                    <div className='bottomtraingle'>
                        <svg className="bottom black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="0,100 0,0 100,0" fill="rgba(8, 8, 8, 0.72)"></polygon>
                        </svg>
                    </div>
                </div>
            </div>
            {/* <div className="containerimage" id="div5">
                <div className='blackbox'>
                    <div className='toptraingle'>
                        <svg className="top black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="100,0 0,100 100,100" fill="rgba(8, 8, 8, 0.72)"></polygon>
                        </svg>
                    </div>
                    <div className='inner_text'>
                        <h1>
                            Explore Bollywood through our Fitness Classes!
                        </h1>
                        <p onClick={() => { navigate("/contact-us") }} style={{ cursor: "pointer" }}>
                            Ready for a high-energy workout with Bollywood music that keeps you moving? Our fitness
                            classes provide a fun workout for you and your friends. From bhangra beats to the latest TikTok
                            crazes, our instructors will help you break a sweat with a smile!
                        </p>
                        
                    </div>
                    <div className='bottomtraingle'>
                        <svg className="bottom black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="0,100 0,0 100,0" fill="rgba(8, 8, 8, 0.72)"></polygon>
                        </svg>
                    </div>
                </div>
            </div> */}
            {/* ////////////////////////////////////////////////// */}
            <div className="containerimage" id="div6">
                <div className='blackbox'>
                    <div className='toptraingle'>
                        <svg className="top black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="100,0 0,100 100,100" fill="rgba(8, 8, 8, 0.72)"></polygon>
                        </svg>
                    </div>
                    <div className='inner_text'>
                        <h1>
                            Enjoy our Dance Studio Space in Austin!
                        </h1>
                        <p onClick={() => { navigate("/services/StudioForRent") }}>
                            Looking for a space for your next creative project? Sway With Pray hosts an intimate studio
                            space with a mirrored wall, snap lock industrial flooring, air conditioning, and LED lighting. The dance studio
                            space is 425 sq. ft. and even features a hand-painted mural — perfect for video backdrops.
                        </p>
                        <a onClick={() => { navigate("/services/StudioForRent") }}>
                            Book Studio Space
                            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "1rem" }} />
                        </a>
                    </div>
                    <div className='bottomtraingle'>
                        <svg className="bottom black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="0,100 0,0 100,0" fill="rgba(8, 8, 8, 0.72)"></polygon>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="containerimage" id="div7">
                <div className='blackbox'>
                    <div className='toptraingle'>
                        <svg className="top black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="100,0 0,100 100,100" fill="rgba(8, 8, 8, 0.72)"></polygon>
                        </svg>
                    </div>
                    <div className='inner_text'>
                        <h1>
                            Make Your Austin Event a Bollywood Dance Sensation!
                        </h1>
                        <p>
                            Bollywood dancing brings a special kind of energy to your gathering! Celebrate your bachelor or
                            bachelorette party by learning a dance together. Shake up your team building activities at the
                            office with an energizing Bollywood workshop. Invite Pray to your school for a cultural learning
                            experience that’s fun for everyone!
                        </p>
                        <a onClick={() => { navigate("/contact-us") }}>
                            Book Now
                            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "1rem" }} />
                        </a>
                    </div>
                    <div className='bottomtraingle'>
                        <svg className="bottom black-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="0,100 0,0 100,0" fill="rgba(8, 8, 8, 0.72)"></polygon>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
