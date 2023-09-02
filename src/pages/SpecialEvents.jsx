import React from 'react'
import Navbar from '../component/Nav'
import LazyImage from '../component/LazyImages'
import SpecialEvent from "../assets/special_event.jpg"
import "./css/wedding.css"

const SpecialEvents = () => {
    return (
        <>
            <Navbar />
            <div className='specialevent' style={{ width: "100%", height: "100vh" }}>
                {/* <LazyImage image={{ src: SpecialEvent, className: "specailimage" }} /> */}
                <img src={SpecialEvent} className='specailimage' />
            </div>
        </>
    )
}

export default SpecialEvents
