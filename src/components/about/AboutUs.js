import React from 'react'
import "./AboutUs.css"
import aboutus from "../../images/aboutus.jpeg"

function AboutUs() {
    return (
        <div className="aboutus">
            <div>
                <div>
                    {/* <h2>About Us</h2> */}
                </div>
                <div><img src={aboutus} /></div>
                <div>
                    <p>We have been privileged to support local and fast-growing companies over the years by partnering with them to align the right technology solutions to their business needs. With a keen understanding of how tech solutions affect the bottom line, Ittechnica brings IT services to a whole new level for our clients. We help businesses reach their potential by utilizing our time-tested and strategic approach to IT support.</p>
                    <p>As a services company, Ittechnica has maintained its independence. At the same time, Ittechnica has enjoyed strong partnerships with industry-leading technology companies. We provide our clients with a range of services from full IT outsourcing solutions to what we call “the right skill at the right time” solution. Our clients are typically the ones that choose and benefit from full outsourcing.</p>
                    <p>“We will achieve our vision by staying true to our Core Values.”</p>
                    <p>We look to make a positive difference in the world through our work product and strive to create continued growth opportunities for our employee-owners through controlled growth and expansion.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
