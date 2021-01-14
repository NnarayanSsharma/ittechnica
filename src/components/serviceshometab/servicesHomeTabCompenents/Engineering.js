import React from 'react'
import engineering from "../../../images/services-home-tab/engineering.jpeg"
import "./ServicesHomeTabComponents.css"
import { Link } from 'react-router-dom'

function Engineering() {
    return (
        <div className="services-home-tab-components">
            <h1 style={{marginTop: "4rem"}}></h1>
            {/* heading design start */}


            <div>
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="counter">
                            <div class="counter-content">
                                <h3>Engineering</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* heading design end */}
            <div className="services-content-box">
                <div className="services-content">
                    <div >
                        <img src={engineering} style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div>
                        <p>Ittechnica  engineering services offer solutions to companies by using advanced technology and world-class expertise to solve problems and gain a competitive edge. Ittechnica engineering services offer world-recognized expertise in the fields of engineering. Ittechnica engineering project management services help manufacturers in planning, executing, monitoring and finalizing large-scale engineering projects. Ittechnica engineering experts provide value-added and customized engineering services</p>
                        <p>Our projects have raised the performance of our clients’ assets so their facilities are performing at optimal capacity. This is achieved by imparting  unparalleled engineering service, utilizing industry best practices driven by the most recent advancements, and innovative strategies.</p>
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

export default Engineering
