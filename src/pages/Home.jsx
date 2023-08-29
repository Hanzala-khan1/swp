import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logoSWP.png"
import './css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    const [animation, Setanimation] = useState(false)
    const navigate = useNavigate()
    const handleExploreClick = () => {
        Setanimation(true)
        setTimeout(() => {
            navigate('/about');
            Setanimation(false)
        }, 2000);

    };

    return (
        <>
            <div className={`main ${animation ? "animation-div" : ""}`} >
                <div className="headingMain">
                    <div className='Appname'>
                        <h1>SWAY WITH PRAY</h1>
                        <div className='App_desc'>
                            <span>Bollywood Dance</span>
                            <span>Choreographer</span>
                            <span>Educator</span>
                        </div>
                    </div>


                    <button className="Explore" onClick={handleExploreClick} >
                        Let's Explore
                    </button>

                </div>
                <div className="startButton">
                    <div className='innernew'>
                        <img src={logo}
                            alt='Sway with Pray Logo'
                            className='imageHome' />
                        <div className="icon">
                            <a href='https://web.facebook.com/swaywithpray/?_rdc=1&_rdr' target="_blank">
                                <FontAwesomeIcon icon={faFacebook} className='iconsfonthome' />
                            </a>
                            <a href='https://www.instagram.com/swaywithpray/?hl=en' target="_blank">
                                <FontAwesomeIcon icon={faInstagram} className='iconsfonthome' />
                            </a>
                            <a href='https://www.youtube.com/channel/UC04eJMg0UhmhrvXfiXyvW5g' target="_blank">
                                <FontAwesomeIcon icon={faYoutube} className='iconsfonthome' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
