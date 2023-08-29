import React, { useEffect, useState } from 'react'
import "./css/About.css"
import aboutImg1 from "../assets/Nabout1.jpg"
import aboutImg2 from "../assets/Nabout2.jpg"
import aboutImg3 from "../assets/thirdAbout.jpg";
import { Link } from 'react-router-dom'
import ImageSlider from '../component/ImagaSlider';
import Navbar from '../component/Nav';
import LazyImage from '../component/LazyImages';

const About = () => {
    const [secreen, setSecreen] = useState(true)

    const updateSlidesPerView = () => {
        if (window.innerWidth >= 1740) {
            setSecreen(false); // Show 1 slide on small screens
        } else {
            setSecreen(true);
        }
    };
    console.log(secreen)

    useEffect(() => {
        // Add event listener on component mount to update slidesPerView
        window.addEventListener('resize', updateSlidesPerView);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, [window.innerWidth]);
    return (
        <>
            <Navbar />
            {/* <div className='videoBanner'>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/fxUvm0yTFZI?autoplay=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    muted
                ></iframe>
            </div> */}
            <div className='AboutMain' id='AboutMain'>
                <h1 className='HeadAbout'>ABOUT PRAY</h1>
                <div className='aboutIntro'>
                    <div className='ImgDiv'>
                        <LazyImage image={{ src: aboutImg3, className: 'img' }} />
                        {
                            secreen
                            &&
                            <LazyImage image={{ src: aboutImg1, className: 'img' }} />
                        }
                        <LazyImage image={{ src: aboutImg2, className: 'img' }} />
                    </div>
                    <div className='paraDiv'>
                        <h2 className='Danceteacher'>Your Favourite Bollywood Dance Teacher in Austin</h2>
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

                            <br />   <br />
                            Pray diversified her dance skills by training at the Shiamak dance academy in India for nine
                            years. She used that experience to elevate the dance team as an instructor, dancer, and
                            eventually CEO at Agni the Dance Company in Austin. Becoming a Bollywood dance teacher in
                            Austin, Texas feels natural to her after calling the city home for nine years.
                            <br />  <br />
                            The open-minded and festive culture of Austin has been a great fit for Sway With Pray the past
                            two years. Pray has spread the joys of Bollywood dance in Austin, Texas through providing
                            choreography and workshops at weddings, corporate events, and fundraising shows. Her team
                            has come together out of the pure love of Bollywood dancing and the wish to make it accessible
                            to all. Her classes are open to all skill levels and cultural backgrounds.<br />

                        </p>
                        <Link to="/contact-us" className='AboutButton' >
                            Get in Touch
                        </Link>
                        <a className='AboutButton' href='https://www.youtube.com/channel/UC04eJMg0UhmhrvXfiXyvW5g' target='_blank'>
                            Watch my Videos!
                        </a>
                        {/* <div>
                            <a className='AboutButton' target='_blank'>
                                Meet My Team
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='AboutMainteam' id='AboutMain'>
                <h3 className='meetteam'>Meet the Sway With Pray Team</h3>
                <div className="slider-container">

                    <ImageSlider />

                </div>
            </div>
        </>
    )
}

export default About
