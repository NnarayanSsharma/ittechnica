import React from 'react'
import operation from "../../../images/services-home-tab/operation.jpeg"
import "./ServicesHomeTabComponents.css"
import { Link } from 'react-router-dom'

function Operation() {
    return (
        <div className="services-home-tab-components">
            <h1 style={{marginTop: "4rem"}}></h1>
            {/* heading design start */}


            <div>
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="counter">
                            <div class="counter-content">
                                <h3>Operation</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* heading design end */}
            <div className="services-content-box">
                <div className="services-content">
                    <div >
                        <img src={operation} style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div>
                        <p>Operations are the work of managing the inner workings of your business so it runs as efficiently as possible. Whether you make products, sell products, or provide services, every small business owner has to oversee the design and management of behind-the-scenes work.</p>
                        <p>Improving operations means thinking strategically about your systems and processes. Other times, it means being part of the on-the-ground work to bring every aspect of a project, from tiny to huge, to reality.</p>
                        <p>Organizational Operations focus on improving the performance of all aspects that support the organization’s structure; including organization design, governance (across functions and departments), roles and responsibilities, and employee performance. Typical activities relate either to the implementation of organizational strategies, such as workforce optimization or the redesign of employee roles or are prompted by an event or crisis, such as a merger or a transition as part of a broader corporate restructuring effort.</p>

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

export default Operation
