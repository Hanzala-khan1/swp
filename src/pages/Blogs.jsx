import React from 'react'
import Navbar from '../component/Nav'
import img1 from "../assets/services1.jpg";
import img2 from "../assets/services2.jpg";
import img3 from "../assets/services3.jpg";
import img4 from "../assets/Bollywod_dance.jpg";
import img5 from "../assets/Nhome.jpg";
import img6 from "../assets/Nabout2.jpg";
import img7 from "../assets/Nabout1.jpg";

import "./css/blogs.css"
const Blogs = () => {
    return (
        <>
            <Navbar />
            <div className='blogs'>
                <h1 className='HeadAbout'>Blogs</h1>
                <section className="blog-card">
                    <img src={img1} alt="Blog 3" />
                    <h2>Private dance classes</h2>
                    <p>These classes are for individuals as well as groups of people who wish to perform on a Bollywood song for an event in school/college or personal gatherings and parties. The styles and techniques will be personalized to suit your comfort level and aesthetic requirements.</p>
                    <a href="#" className="read-more">Read More</a>
                </section>
                <section className="blog-card">
                    <img src={img2} alt="Blog 3" />
                    <h2>Community/Group dance classes</h2>
                    <p>Dance is a great stress buster and allows people to be more active, socialize and develop creative and physical skills. These classes just help you with that. Come join our community and thrive with us.</p>
                    <a href="#" className="read-more">Read More</a>
                </section>
                <section className="blog-card">
                    <img src={img3} alt="Blog 3" />
                    <h2>Weddings</h2>
                    <p>groom look forward to their bachelorette/bachelor party, and why not? It's your day afterall! To top it all, Austin is a great place to be for a bachelorette/bachelor's gala. You can plan a Bollywood afternoon with Pray and have her teach your gang the song they could perform at the wedding while having a fun activity at the party or just have a fun activity with some booty shaking Bollywood moves.</p>
                    <a href="#" className="read-more">Read More</a>
                </section>
                <section className="blog-card">
                    <img src={img4} alt="Blog 3" />
                    <h2>Corporates</h2>
                    <p>In recent times, many corporate setups are incorporating Bollywood song and dance sequences to encourage more engagement and entertainment in their office parties</p>
                    <a href="#" className="read-more">Read More</a>
                </section>
                <section className="blog-card">
                    <img src={img5} alt="Blog 3" />
                    <h2>Wedding Choreography</h2>
                    <p>Hey there! I am Prayrana. I am a Bollywood dancer cum instructor, based out of Austin, Texas. I am an experienced professional in my field and I offer Bollywood dance choreography services for Indian and South Asian weddings, and similar events in South Austin, Circle C, Sunset valley, Cedar Park, Round Rock, Pflugerville, Buda and West Oak Hill.</p>
                    <a href="#" className="read-more">Read More</a>
                </section>
                <section className="blog-card">
                    <img src={img6} alt="Blog 3" />
                    <h2>Bollywood Dance Classes</h2>
                    <p>An energetic Bollywood vibe is a must-have during ceremonies like Sangeet and Mehendi in the south Asian community. As someone who has worked extensively for such events. I have experience, (nationally and internationally)in creating distinct themes, selecting the right kind of music, and choreographing the bride and groom on a special number. We also offer assistance for Bollywood themed bachelorette parties.</p>
                    <a href="#" className="read-more">Read More</a>
                </section>
                <section className="blog-card">
                    <img src={img7} alt="Blog 3" />
                    <h2>Fitness</h2>
                    <p>We also offer assistance for Bollywood themed bachelorette parties. I have worked on fusion dance too, and can tailor my services based on the clients’ need. The bride and groom are the center of attention during their big day. I make sure they continue to steal the limelight by coming up with beautifully choreographer song sequences.</p>
                    <a href="#" className="read-more">Read More</a>
                </section>
            </div>
        </>
    )
}

export default Blogs
