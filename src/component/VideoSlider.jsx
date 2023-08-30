import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import "../pages/css/wedding.css"


const VideoSlider = ({ data }) => {

    const [slidesPerView, setSlidesPerView] = useState(3); // Default value for larger screens

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

        updateSlidesPerView()
        // Add event listener on component mount to update slidesPerView
        window.addEventListener('resize', updateSlidesPerView);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, [window.innerWidth]);
    return (
        <div className='wedding-container-slider'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={slidesPerView}
                navigation
                loop
                pagination={{ clickable: true }}
                style={{ padding: '1rem 2rem' }}
            >
                {data.map((url, index) => (
                    <SwiperSlide key={index} className='swiperSlide'>
                        <iframe
                            src={url}
                            title={`YouTube video player ${index}`}
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            allowFullScreen
                            className='iframe'
                        ></iframe>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default VideoSlider
