import React from 'react'
import azuremanaged from "../../../images/services-home-tab/azure-managed.jpeg"
import "./ServicesHomeTabComponents.css"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

function AzureManagedServices() {
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
                                >Azure Managed Services</motion.h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* heading design end */}
            <div className="services-content-box">
                <div className="services-content">
                    <div >
                        <img src={azuremanaged} style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div>
                        <p>Microsoft Azure is the most durable Microsoft business product to aid your company in smoothing out various essential activities. It is a fully-stacked and successful cloud-computing platform, adaptable to any  business length and customizable for any motive. Ittechnica has Microsoft-licensed Azure professionals and advisors who survey your business, build up the virtual machines which you want to meet your desires, and streamline your operations through the cloud.</p>
                        <p data-aos="fade-up">Azure can manage your business applications, security, lively directories, collaborative project files, and numerous different capacities. And this work can be accessed throughout the field by any representative through the cloud. Azure provides a common experience and comfort for your operations.</p>
                    </div>
                </div>
                <div className="services-otherservices-links">
                    <h2>Other Services</h2>
                    <div>
                        <ul>
                            <li>
                                <Link to="/agilesoftwaredevelopment"><i class="fas fa-circle"></i>Agile Software Development</Link>
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

export default AzureManagedServices
