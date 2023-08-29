import React from 'react'
import Navbar from '../component/Nav'
import "./css/testmonial.css"
import img1 from "../assets/services1.jpg";
const TestReview = () => {
    return (
        <>
            <Navbar />
            <h1 className='head-test'>Testimonials</h1>
            <div className='testmonial-section'>
                <div className='inner-test-div right'>
                    <div className='test-div'>
                        <img src={img1} className='test-image' />
                        <p>“I grew up loving to dance, and in the last couple of crazy years (we all know those years) my interest in dancing pretty much completely dissolved. But then, I ran into Prayrana and her enthusiasm and spirit told me ‘nope, you are dancing’. And I have been loving every moment of it. Swaying with Pray is a joy! Pray and her creativity and energy paints smiles on faces! Pray is a caring and encouraging teacher with an infectious passion. I have taken both in-person and zoom classes with Pray and they are always clear to follow, a fun challenge, the music is always inspiring, and you get to gain a fresh awesome Bollywood dance.”</p>
                        <h4>Julie Kimmel: Student</h4>
                    </div>
                    <div className='test-div'>
                        <img src={img1} className='test-image' />
                        <p>In recent times, many corporate setups are incorporating Bollywood song and dance sequences to encourage more engagement and entertainment in their office parties</p>
                        <h4>Corporates</h4>
                    </div>
                    <div className='test-div'>
                        <img src={img1} className='test-image' />
                        <p>“The journey of my dancing career has begun with your dance classes. You always have the best moves and the best of performances and acts. Learning dancing under your guidance is truly bliss. Thank you for making every dance class so memorable and mesmerizing. I am very grateful to you for taking out the time and resources to help beginners like me to learn dance.”</p>
                        <h4>Rashmi Kheni: Student</h4>
                    </div>

                    <div className='test-div'>
                        <img src={img1} className='test-image' />
                        <p>“I’ve had the opportunity to learn from Pray for the past year. If I were to describe Pray in one word, it would be passionate. I was referred to Pray by my friend, who has been taking dance classes from Pray for the past few years. I was looking for someone who could work with me remotely, and teach me Bollywood choreo to perform for fun and for school functions. However, most importantly, I was looking for a teacher who was energetic, passionate, and simply truly enjoyed what he/she was teaching. I grew up dancing for fun and love to perform in front of an audience. Due to COVID-19, I had to pause dance performances in front of large groups of people. Pray changed this for me. Her enthusiasm and passion to consistently create beautiful choreography and organize dances in a way that I and others could still perform in front of people virtually amazed me. She is always open to others opinions on changing choreo if necessary, and performs the entire routine she teaches with her students.. Pray started out as my dance teacher, but I can now call her my friend. Thank you Pray for allowing me to continue my love for dance even under unforeseen circumstances.”</p>
                        <h4>Kruti Malkan: Student</h4>
                    </div>

                </div>
                <div className='inner-test-div left'>
                    <div className='test-div'>
                        <img src={img1} className='test-image' />
                        <p>“They were great at the wedding reception I was at. They did a great job of explaining to everyone what the lyrics and dance moves to the song meant which, I believed, encourage more people to join in!”</p>
                        <h4>Brittany Gooding: Wedding Guest</h4>
                    </div>

                    <div className='test-div'>
                        <img src={img1} className='test-image' />
                        <p>“I worked with Sway With Pray for the past two years. I came to Pray shy and timid, but it wasn’t long before she instilled the confidence and rhythm I needed to compete on the Miss Texas stage. She helped me build authenticity and skill, pushing me to become the best version of myself. Pray celebrated my highs, was there for me during my lows, and still supports me in my endeavours today. If you’re looking for a dance teacher to challenge and inspire you, look no further!”</p>
                        <h4>Jahnavi Muppaneni: Student & Miss Texas Contestant</h4>
                    </div>
                    <div className='test-div'>
                        <img src={img1} className='test-image' />
                        <p>“My wife Ethel and I were guests at Aditya and Julia’s wedding reception on 20th March, 2022. Amongst other entertainment, the host had also arranged for Bollywood dance performances. It was a fabulous show, put up by the group – Sway with Pray. The artists are mainly Americans, but their dance movements matched any professional ‘Indian Artist’. Majority of the guests were Indians but the performance was appreciated by the Americans too. Engaging this group for your celebrations will be worth it.”</p>
                        <h4>Custodio Coutinho</h4>
                    </div>

                    <div className='test-div'>
                        <img src={img1} className='test-image' />
                        <p>“I worked with Sway With Pray for the past two years. I came to Pray shy and timid, but it wasn’t long before she instilled the confidence and rhythm I needed to compete on the Miss Texas stage. She helped me build authenticity and skill, pushing me to become the best version of myself. Pray celebrated my highs, was there for me during my lows, and still supports me in my endeavours today. If you’re looking for a dance teacher to challenge and inspire you, look no further!”</p>
                        <h4>Jahnavi Muppaneni: Student & Miss Texas Contestant</h4>
                    </div>

                </div>

            </div >

        </>
    )
}

export default TestReview
