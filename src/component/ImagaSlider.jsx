import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TRISHA from "../assets/Trisha.jpg";
import PREETESH from "../assets/Preetesh.jpg";
import ERIN from "../assets/Erin.jpg";
import Laasya from "../assets/laasya.jpg";
import Julie from "../assets/Julie.jpg";
import Stephanie from "../assets/Stephanie.jpg";
import Divya from "../assets/Divya.jpg"
import Anuradha from "../assets/Anuradha.jpg"
import shaun from "../assets/Shaun.jpg"
import Cassius from "../assets/Cassius.jpg"
import Sucheta from "../assets/Sucheta.jpg"
import LazyImage from './LazyImages';
const ImageSlider = () => {
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
    }, [window.innerWidth]);

    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={slidesPerView}
                navigation
                pagination={{ clickable: true }}
                style={{ padding: "1rem 2rem" }}
            >
                <SwiperSlide>
                    <div className='slide'>
                        <div className='inner-slide'>
                            <LazyImage image={{ src: Stephanie }} />
                            <div className='team-info'>
                                <h3 className="title">Stephanie</h3>
                                <span className="post">Dancer and Instructor</span>
                                <p>Stephanie started her dance journey by learning ballet, jazz, folklorico and classical flamenco
                                    for 10 years. She danced with Aztlan Dance Company, a Latin Contemporary group, then went
                                    on to A'lante Flamenco and delved into flamenco for another 10 years, all while teaching salsa
                                    aerobics classes at Esquina Tango for 16 yrs. Now she is having a blast teaching and dancing
                                    Bollywood!s</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <div className='inner-slide'>
                            <LazyImage image={{ src: ERIN }} />
                            <div className='team-info'>
                                <h3 className="title">ERIN</h3>
                                <span className="post">Fitness Instructor</span>
                                <p>Erin’s dance journey started to the beat of West African drums and segued into Native American
                                    rhythms; then flamenco and tango, while flirting with salsa and swing. It was only natural that
                                    when she met Bollywood — it was love at first beat! She loves teaching Bollywood fitness in a
                                    supportive environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <div className='inner-slide'>
                            <LazyImage image={{ src: TRISHA }} />
                            <div className='team-info'>
                                <h3 className="title">TRISHA</h3>
                                <span className="post">Dancer</span>
                                <p>Trisha is a software engineer by profession and dancer at heart. Her hobbies include traveling,
                                    cooking, and gardening. Some days she likes to party, while others she loves spending time
                                    with herself. Dancing brings her joy and makes her feel alive!
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <div className='inner-slide'>
                            <LazyImage image={{ src: PREETESH }} />
                            <div className='team-info'>
                                <h3 className="title">PREETESH</h3>
                                <span className="post">Video Editor</span>
                                <p>
                                    Preetesh Kayanadath has 13 years of experience as a video editor and motion graphics artist.
                                    He has worked with companies like Brandish Media Entertainment, IL&FS EDUCATION, and
                                    Shiamak Davar Institute of Performing Arts. His media production company is called Mania
                                    Studio, Mumbai, and he is also a part of SWP.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='slide'>
                        <div className='inner-slide'>
                            <LazyImage image={{ src: Laasya }} />
                            <div className='team-info'>
                                <h3 className="title">Laasya</h3>
                                <span className="post">Dancer</span>
                                <p>Laasya loves pink, flowers, social activities, and, of course, dancing! She is always happy and
                                    having fun if she is on the dance floor
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <div className='inner-slide'>
                            <LazyImage image={{ src: Julie }} />
                            <div className='team-info'>
                                <h3 className="title">Julie</h3>
                                <span className="post">Dancer</span>
                                <p>By day Julie is a software developer for Veterans Affairs,and at night you can find her dancing
                                    with glitter! She has danced tango, flamenco, Tahitian hula, zapateado, cumbia, samba and now
                                    Bollywood. She fell in love with Bollywood music twenty years ago after listening to “Kuch Kuch
                                    Hota Hai”.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <div className='inner-slide'>
                            <LazyImage image={{ src: Anuradha }} />
                            <div className='team-info'>
                                <h3 className="title">Anuradha</h3>
                                <span className="post">Dancer</span>
                                <p>Anuradha works on technical problems by day, but would prefer to spend most of it
                                    learning and creating art forms. Aside from SWP, she studies Kathak dance and the
                                    Indian classical arts as both a practitioner and amateur historian</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <div className='inner-slide'>
                            <LazyImage image={{ src: Divya }} />
                            <div className='team-info'>
                                <h3 className="title">Divya</h3>
                                <span className="post">Dancer</span>
                                <p>They say that dancing is the joy of movement and the heart of life. I wholeheartedly
                                    agree, which is why I never miss a chance to dance. Growing up in various parts of
                                    India rooted me in many Indian art forms. I explored my interest in different dance
                                    forms, which my parents loved watching, especially the folk dances, and their
                                    encouragement inspired me to keep dancing.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <div className='inner-slide'>
                            <LazyImage image={{ src: shaun }} />
                            <div className='team-info'>
                                <h3 className="title">Shaun</h3>
                                <span className="post">Videographer</span>
                                <p>After Serving in the US AirForce, Shaun went to UNCSA where he studied and got his BFA in Filmmaking with a focus on directing. His work has played in festivals across the country and in Europe. Currently, he is based in Austin Texas where he directs, writes, produces and does videography.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <div className='inner-slide'>
                            <LazyImage image={{ src: Sucheta }} />
                            <div className='team-info'>
                                <h3 className="title">Sucheta</h3>
                                <span className="post"> SEO and Content Manager</span>
                                <p>Based out of Bangalore, India, Sucheta has around 7 years of experience in SEO and content writing. In the past, she has worked for renowned companies like Prime Focus Technologies, TCS, and the Landmark group (UAE). Currently she manages website content for HGS and Sway With Pray and helps budding entrepreneurs and start-up runners be succesful.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <div className='inner-slide'>
                            <LazyImage image={{ src: Cassius }} />
                            <div className='team-info'>
                                <h3 className="title">Cassius</h3>
                                <span className="post">Photographer and Videographer</span>
                                <p>Cassius Garcia is an Austin based photographer and videographer. Specializing in  event videography and fashion/lifestyle photography. Experience includes shooting for social gatherings as well as for the portfolios of models seeking representation.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default ImageSlider;
