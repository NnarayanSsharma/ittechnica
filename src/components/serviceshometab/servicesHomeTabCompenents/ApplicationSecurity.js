import React from 'react'
import applicationsecurity from "../../../images/services-home-tab/application-security.jpeg"
import "./ServicesHomeTabComponents.css"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"


function ApplicationSecurity() {
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
                                >Application Security</motion.h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* heading design end */}
            <div className="services-content-box">
                <div className="services-content">
                    <div >
                        <img src={applicationsecurity} style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div>
                        <p>To stay competitive, you need to keep your web and mobile applications on the leading edge. We help you build, run, and maintain applications with end-to-end secure development and operations. You will enable accelerated application release lifecycles while improving security across the complete operational environment by identifying risks against external threats.</p>
                        <p data-aos="fade-up">Application security encompasses measures taken to improve the security of an application often by finding, fixing, and preventing security vulnerability.</p>
                        <p data-aos="fade-up">Different techniques will find different subsets of the security vulnerabilities lurking in an application and are most effective at different times in the software lifecycle. They each represent different tradeoffs of time, effort, cost and vulnerabilities found.</p>
                        <div>
                            <p data-aos="fade-up"><i class="fas fa-long-arrow-alt-right"></i>Whitebox security review, or code review. This is a security engineer deeply understanding the application by manually reviewing the source code and noticing security flaws. Through comprehension of the application vulnerabilities unique to the application can be found.</p>
                            <p data-aos="fade-up"><i class="fas fa-long-arrow-alt-right"></i>Blackbox security audit. This is only through the use of an application testing it for security vulnerabilities, no source code required.</p>
                            <p data-aos="fade-up"><i class="fas fa-long-arrow-alt-right"></i>Design review. Before code is written working through a threat model of the application. Sometimes alongside a spec or design document.</p>
                            <p data-aos="fade-up"><i class="fas fa-long-arrow-alt-right"></i>Tooling. There exist many automated tools that test for security flaws, often with a higher false positive rate than having a human involved.</p>
                            <p data-aos="fade-up"><i class="fas fa-long-arrow-alt-right"></i>Coordinated vulnerability platforms are hacker-powered application security solutions offered by many websites and software developers by which individuals can receive recognition and compensation for reporting bugs.</p>

                        </div>
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

export default ApplicationSecurity