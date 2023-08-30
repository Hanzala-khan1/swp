import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import Navbar from '../component/Nav';
import aboutImg3 from "../assets/thirdAbout.jpg";

import "./css/gellery.css";
import LazyImage from '../component/LazyImages';
import VideoSlider from '../component/VideoSlider';
import { galleryImages, galleryvideos } from '../Data/Dataconfig';


const Gallery = () => {
    const [slidesPerView, setSlidesPerView] = useState(3);

    // Default value for larger screens
    const updateSlidesPerView = () => {
        if (window.innerWidth >= 1700) {
            setSlidesPerView(4);
        } else
            if (window.innerWidth <= 425) {
                setSlidesPerView(1); // Show 1 slide on small screens
            } else
                if (window.innerWidth <= 768) {
                    setSlidesPerView(2); // Show 1 slide on small screens
                } else
                    if (window.innerWidth <= 1024) {
                        setSlidesPerView(3); // Show 3 slides on larger screens
                    }
                    else {
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
    }, [window.innerWidth]);


    ///////////////////////////////

    return (
        <>
            <Navbar />
            <div className='blogs'>
                <h1 className=''> Videos</h1>
            </div>
            <VideoSlider data={galleryvideos} />
            <div className='gallerymiddle'>
                <div className='AboutMain' id='AboutMain'>
                    <div className='aboutIntro'>
                        <div className='ImgDiv'>
                            <img src={aboutImg3} className='img' />
                        </div>
                        <div className='paraDiv'>
                            <p>
                                From the moment young Prayrana Sharma watched her first Bollywood movie, something came
                                alive inside of her! Growing up in Hyderabad, India, she watched Bollywood dancer Sridevi tell
                                stories with her eyes and express her emotions through movement. She was mesmerized, and
                                began practicing the dance sequences on her own.
                                <br />
                                <br />
                                If you’ve ever seen Pray dance, you can see the Sridevi influence in her expressions. Her love
                                of dancing comes across during her classes, workshops, and performances. Her dream is to
                                include you in the magic of Bollywood dance, whether that’s at a beginner’s class, preparing
                                choreography for your wedding, or celebrating at a group event!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='blogs'>
                <h1 className=''> Images</h1>
            </div>
            <div className='wedding-container-slider-images'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={slidesPerView}
                    navigation
                    loop
                    pagination={{ clickable: true }}
                    style={{ padding: '1rem 2rem' }}
                >
                    {galleryImages.map((image, index) => (
                        <SwiperSlide
                            key={index}
                        >
                            <div className='thumb'>
                                <LazyImage image={{ src: image, alt: `Image ${index}`, className: 'zoom' }} />
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default Gallery
