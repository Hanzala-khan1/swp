import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "./css/BollywoodDance.css"
import "./css/About.css"
import aboutImg1 from "../assets/Nabout1.jpg"
import Navbar from '../component/Nav'
import VideoSlider from '../component/VideoSlider';
import { bollywoodvideos } from '../Data/Dataconfig';
import LazyImage from '../component/LazyImages';

const BollywoodDance = () => {
    const [slidesPerView, setSlidesPerView] = useState(3); // Default value for larger screens

    const updateSlidesPerView = () => {
        if (window.innerWidth <= 425) {
            setSlidesPerView(1); // Show 1 slide on small screens
        } else
            if (window.innerWidth <= 768) {
                setSlidesPerView(2); // Show 1 slide on small screens
            } else if (window.innerWidth <= 1024) {
                setSlidesPerView(3); // Show 3 slides on larger screens
            } else {
                setSlidesPerView(3);
            }
    };

    useEffect(() => {
        // Add event listener on component mount to update slidesPerView
        window.addEventListener('resize', updateSlidesPerView);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);
    const videoUrls = [
        "https://www.youtube.com/embed/gW3NNajDQg0?autoplay=0&mute=1",
        "https://www.youtube.com/embed/1ggYv032z58?autoplay=0&mute=1",
        "https://www.youtube.com/embed/S0uqMN21GDI?autoplay=0&mute=1",
        "https://www.youtube.com/embed/r0vMOxxDSZQ?autoplay=0&mute=1",
        "https://www.youtube.com/embed/r0vMOxxDSZQ?autoplay=0&mute=1",
        "https://www.youtube.com/embed/r0vMOxxDSZQ?autoplay=0&mute=1"
    ]
    return (
        <>
            <Navbar />
            <div className='AboutMain' id='bollywood-dance'>
                <div className='aboutIntro'>
                    <div className='ImgDiv'>
                        <LazyImage image={{ src: aboutImg1, className: 'img bollywooodimg' }} />
                    </div>
                    <div className='paraDiv bollywoodpara'>
                        <h2 className='Danceteacher'>Bollywood Dance<br /> Class</h2>
                        <p>
                            Are you looking for a fun way to get moving, express yourself, or connect with other creative people in the Austin community? Bollywood dance classes with Pray are fun for all skill levels and backgrounds. Whether you’ve been watching Bollywood movies since you were a child or are new to the music and culture, Pray will guide you through each dance move with ease.

                            Join her weekly Bollywood class series or private lessons. You can also book a workshop for your next corporate event, bachelor or bachelorette party or other gatherings.


                        </p>

                    </div>
                </div>
                <h2 className='Danceteacher bollywwodhead'>Classes</h2>
                <div className='classesdiv'>
                    <div class="flip-card bollywoodframe">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h2>Bollywood Dance</h2>
                            </div>
                            <div class="flip-card-back">
                                <h2>Bollywood Dance</h2>
                                <p className='classBox'>
                                    <span>Mon</span>
                                    <span>Tue</span>
                                    <span>Thu</span>
                                </p>
                                <p>22nd SEP, 2023</p>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card bollywoodframe">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h2>Fitness</h2>
                            </div>
                            <div class="flip-card-back">
                                <h2>Fitness</h2>
                                <p className='classBox'>
                                    <span>Mon</span>
                                    <span>Wed</span>
                                    <span>Fri</span>
                                </p>
                                <p>1st Oct, 2023</p>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card bollywoodframe">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h2>Wedding</h2>
                            </div>
                            <div class="flip-card-back">
                                <h2>Wedding</h2>
                                <p className='classBox'>
                                    <span>Tue</span>
                                    <span>Wed</span>
                                    <span>Thu</span>
                                </p>
                                <p>3rd Oct, 2023</p>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card bollywoodframe">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h2>Events</h2>
                            </div>
                            <div class="flip-card-back">
                                <h2>Events</h2>
                                <p className='classBox'>
                                    <span>Mon</span>
                                    <span>Tue</span>
                                    <span>Thu</span>
                                </p>
                                <p>1st Oct, 2023</p>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card bollywoodframe">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h2>Dance</h2>
                            </div>
                            <div class="flip-card-back">
                                <h2>Dance</h2>
                                <p className='classBox'>
                                    <span>Mon</span>
                                    <span>Tue</span>
                                    <span>Thu</span>
                                </p>
                                <p>1st Oct, 2023</p>
                            </div>
                        </div>
                    </div>


                </div>
                <h2 className='Danceteacher bollywwodhead'>Videos</h2>



            </div>
            <VideoSlider data={bollywoodvideos} />

        </>
    )
}

export default BollywoodDance
