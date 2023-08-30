import React from 'react';
import Navbar from '../component/Nav'
import "./css/wedding.css"
import "./css/About.css"
import weddingimg from "../assets/wedding_choerogrphy.jpg"
import { Link } from 'react-router-dom'
import VideoSlider from '../component/VideoSlider';
import { weddingvideos } from '../Data/Dataconfig';

const WeddingCreagraphy = () => {
    return (
        <>
            <Navbar />
            <div className='headerwedding'>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/aKojIJQJrPw?si=feCwz24xHxoK9-NH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
            <div className='AboutMain'>
                <div className='weddingDiv'>
                    <h2 className='Danceteacher wedding-heading wedding-btn'>Wedding Choreography</h2>
                    <p className='weddingpara'>
                        South Asian weddings are always a festive occasion! Whether you’re looking for help planning
                        an epic Sangeet or wanting a customized first dance, Pray is here to help.
                        <br />
                        She’s provided
                        Bollywood dance choreography, performances, and workshops at all kinds of South Asian and
                        fusion weddings.
                    </p>
                    <Link to="/contact-us" className='AboutButton wedding-btn' >
                        Get in Touch
                    </Link>
                </div>
            </div>

            <VideoSlider data={weddingvideos} />


        </>
    )
}

export default WeddingCreagraphy
