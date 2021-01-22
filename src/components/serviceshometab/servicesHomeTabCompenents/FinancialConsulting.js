import React from 'react'
import financialconsulting from "../../../images/services-home-tab/financial-consulting.jpg"
import "./ServicesHomeTabComponents.css"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"



function FinancialConsulting() {
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
                                >Financial Consulting</motion.h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* heading design end */}
            <div className="services-content-box">
                <div className="services-content">
                    <div >
                        <img src={financialconsulting} style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div>
                        <p >Ittechnica draws on profound experience across industries to assist financial services institutions in each region to discover progressive approaches to optimize techniques, reduce back-office costs, align IT, oversee chances, capture the economic benefits of building steadfast clients, and plan for evolving competitive and administrative landscapes. Ittechnica’s committed financial services teams all predominant sectors of the industry. Financial administration players should tackle better plans of action to conquer the shortcomings of the past and modern challenges.</p>
                        <p data-aos="fade-up">Ittechnica has deep expertise in financial services, but we additionally look beyond the industry and draw upon our abilities revel in. We tailor these contributions to the necessities of our monetary services clients  to assist them with tackling issues or seek after circumstances in numerous zones, including:</p>
                        <div>
                            <p data-aos="fade-up"><i class="fas fa-circle"></i>Growth approach</p>
                            <p data-aos="fade-up"><i class="fas fa-circle"></i>Operational excellence</p>
                            <p data-aos="fade-up"><i class="fas fa-circle"></i>Compliance</p>
                            <p data-aos="fade-up"><i class="fas fa-circle"></i>Data innovation</p>
                            <p data-aos="fade-up"><i class="fas fa-circle"></i>Change control</p>
                            <p data-aos="fade-up"><i class="fas fa-circle"></i>Execution improvement</p>
                            <p data-aos="fade-up"><i class="fas fa-circle"></i>Client experience</p>
                            <p data-aos="fade-up"><i class="fas fa-circle"></i>Customer loyalty and insights</p>
                        </div>
                        <p data-aos="fade-up">We work with our financial services clients as partners. Together we develop clear, practical action plans, and support or run the implementation of those plans to ensure real and sustainable performance improvement. We have worked with leading financial services companies in many strategic and operational areas.</p>
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

export default FinancialConsulting
