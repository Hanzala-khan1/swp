import React from 'react'
import "./css/StudioRent.css"
import Navbar from '../component/Nav'
import studio from "../assets/Studio.png"
import { studiovideos } from '../Data/Dataconfig'
import VideoSlider from '../component/VideoSlider'
import PromoVideo from "../assets/SWAYWITHPRAYSTUDIO.mp4"

const StudioForRent = () => {
    return (
        <>
            <Navbar />
            <div className='mainstudio'>
                <video src={PromoVideo} autoPlay muted loop className='videostudio'>
                    Your browser does not support the video tag.
                </video>
            </div>
            <section>
                <div class="content-div">
                    <h1 className='HeadStudio'>Studio for Rent</h1>
                    <p> Looking for a space for your next creative project? Sway With Pray hosts an intimate studio
                        space with a mirrored wall, snap lock industrial flooring, air conditioning, and LED lighting. The dance studio
                        space is 425 sq. ft. and even features a hand-painted mural — perfect for video backdrops.</p>

                    <div class="divs">
                        <button class='AboutButton stdbtn'>
                            Book Now
                        </button>
                    </div>

                </div>

                <div class="image-div">

                    <img src={studio} alt="image" />

                </div>

            </section>

        </>
    )
}

export default StudioForRent
