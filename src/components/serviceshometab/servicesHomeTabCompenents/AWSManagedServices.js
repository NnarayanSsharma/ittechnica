import React from 'react'
import awsservices from "../../../images/services-home-tab/aws-services.jpeg"
import "./ServicesHomeTabComponents.css"
import { Link } from 'react-router-dom'

function AWSManagedServices() {
    return (
        <div className="services-home-tab-components">
            <h1 style={{marginTop: "4rem"}}></h1>
            {/* heading design start */}


            <div>
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="counter">
                            <div class="counter-content">
                                <h3>AWS Managed Services</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* heading design end */}
            <div className="services-content-box">
                <div className="services-content">
                    <div >
                        <img src={awsservices} style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div>
                        <p>AWS Managed Services is a set of services and gear that automate infrastructure management obligations for Amazon Web Services (AWS) deployments. Ittechnica focuses on assistance that gives a streamlined method to relocate on-premises workloads to the public cloud after, which control the one's workloads after migration.</p>
                        <p>AWS managed services permit Ittechnica to automate cloud management responsibilities, which include patch control, Change Management, provisioning, client access to the board, incident tracking, and reinforcement and reestablishes.AWS Managed Services provides a dedicated Cloud Service Delivery Manager and Enterprise-level AWS Support coverage.</p>
                        <div>
                            <p>Ittechnica follows a sequence of steps:</p>
                            <p><span>(1)</span>referred to as the AWS Managed Services Jumpstart method.</p>
                            <p><span>(2)</span>To utilize the service. Part of this technique consists of a strategic planning stage, choosing the applications so one can migrate to the public cloud, after which access the AWS controlled services platform.</p>

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

export default AWSManagedServices
