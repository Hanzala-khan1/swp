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
                        What better way to celebrate your joyous day than with Bollywood dancing?! Pray works with couples of all backgrounds to customize routines for their Sangeet, Mehendi, and other marital ceremonies. Celebrate your way with your favorite Bollywood songs that tell the story of your love! Let Pray lead the way and make sure everyone in your party is dancing the night away.
                        Get in touch for Bollywood wedding choreography for the following and more:
                        <br />
                        <br />
                        • Sangeet and Mehendi workshops
                        <br />
                        • Bride's/groom's solo and couple’s first dance
                        <br />
                        • Mother-of-the-bride performance
                        <br />
                        • Parent dance performance with bride or groom
                        <br />
                        • Bridesmaids' group dance
                        <br />
                        • Groomsmen group dance
                        <br />
                        • Family and friends of the bride/groom performance

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
