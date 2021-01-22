import React from 'react'
import { Link } from 'react-router-dom'
import "./ServicesHomeTabComponents.css"
import agilesoftwaredevelopment from "../../../images/services-home-tab/agile-software-development.JPG"
import { motion } from "framer-motion"


function AgileSoftwareDevelopment() {
    return (
        <div className="services-home-tab-components">
            <h1 style={{marginTop: "4rem"}}></h1>
            {/* heading design start */}


            <div>
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="counter">
                            <div class="counter-content">
                                <motion.h3
                                    initial={{x: "-100vw"}}
                                    animate={{x: 0}}
                                    transition={{delay: 0.3, type: 'spring', stiffness: 120}}
                                >Agile Software Development</motion.h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* heading design end */}
            <div className="services-content-box">
                <div className="services-content">
                    <div>
                        <img src={agilesoftwaredevelopment} style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div>
                        <p>Agile is the ability to create and respond to change. It is a way of dealing with, and ultimately succeeding in, an uncertain and turbulent environment. Agile software development is more than frameworks such as Scrum, Extreme Programming, or Feature-Driven Development (FDD). Agile software development is more than practices such as pair programming, test-driven development, stand-ups, planning sessions, and sprints.</p>
                        <p data-aos="fade-up">Agile software development is an umbrella term for a set of frameworks and practices based on the values and principles expressed in the Manifesto for Agile Software Development. When you approach software development in a particular manner, it’s generally good to live by these values and principles and use them to help figure out the right things to do given your particular context.</p>
                        <p data-aos="fade-up">One thing that separates Agile from other approaches to software development is the focus on the people doing the work and how they work together. Solutions evolve through collaboration between self-organizing cross-functional teams utilizing the appropriate practices for their context.</p>
                        <p data-aos="fade-up">Agile is a proven way to transform your business, catalyze innovation, and accelerate profitable growth. We can help you scale Agile across your entire organization to improve time-to-market, boost quality, raise employee morale, and become a truly adaptive organization.</p>
                    </div>
                </div>
                <div className="services-otherservices-links">
                    <h2>Other Services</h2>
                    <div>
                        <ul>
                            <li>
                                <Link><i class="fas fa-circle"></i>Agile Software Development</Link>
                            </li>
                            <li>
                                <Link to="/applicationsecurity"><i class="fas fa-circle"></i>Application Security</Link>
                            </li>
                            <li>
                                <Link to="/awsmanagedservices"><i class="fas fa-circle"></i>AWS Managed Services</Link>
                            </li>
                            <li>
                                <Link to="/azuremanagedservices"><i class="fas fa-circle"></i>Azure Managed Services</Link>
                            </li>
                            <li>
                                <Link to="/datamigration"><i class="fas fa-circle"></i>Data Migration</Link>
                            </li>
                            <li>
                                <Link to="/engineering"><i class="fas fa-circle"></i>Engineering</Link>
                            </li>
                            <li>
                                <Link to="/financialconsulting"><i class="fas fa-circle"></i>Financial Consulting</Link>
                            </li>
                            <li>
                                <Link to="/operation"><i class="fas fa-circle"></i>Operation</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgileSoftwareDevelopment
