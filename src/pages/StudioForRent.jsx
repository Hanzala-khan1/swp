import React from 'react'
import "./css/StudioRent.css"
import Navbar from '../component/Nav'
import studio from "../assets/Studio.png"
import PromoVideo from "../assets/SWAYWITHPRAYSTUDIO.mp4"
import "./css/BollywoodDance.css"
import "./css/About.css"

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
                    <p> Ready to get moving but don't know where to start? Pray's studio space offers a private location for choreographing, rehearsing, and dancing. The studio comes complete with a mirrored wall. snap-lock industrial flooring, air conditioning, and LED lighting. You can book the 425 sq. ft. for you and your group to rehearse, create, or film a dance piece with an art mural in the background. Book your dance time in Pray's home studio online today!
                    </p>

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
            <div className='rentlast' style={{ marginBottom: "3rem" }}>
                <h2 className='Danceteacher bollywwodhead'>Who All Can Rent ?</h2>
                <div className='classesdiv'>
                    <div class="flip-card bollywoodframe">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h2>Dancer</h2>
                            </div>
                            <div class="flip-card-back">
                                <h2 style={{ color: 'white' }}>Rent: 20$ per hour </h2>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card bollywoodframe">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h2>Fitness professionals</h2>
                            </div>
                            <div class="flip-card-back">
                                <h2 style={{ color: 'white' }}>Rent: 20$ per hour </h2>
                            </div>
                        </div>
                    </div>
                    {/* <div class="flip-card bollywoodframe">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h2>Actors</h2>
                            </div>
                            <div class="flip-card-back">
                                <h2 style={{ color: 'white' }}>Rent: 20$ per hour </h2>
                            </div>
                        </div>
                    </div> */}
                    <div class="flip-card bollywoodframe">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h2>Performing artists</h2>
                            </div>
                            <div class="flip-card-back">
                                <h2 style={{ color: 'white' }}>Rent: 20$ per hour </h2>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card bollywoodframe">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h2>Live Workshop organizers</h2>
                            </div>
                            <div class="flip-card-back">
                                <h2 style={{ color: 'white' }}>Rent: 20$ per hour </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default StudioForRent
