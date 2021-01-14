import React from 'react'
import datamigration from "../../../images/services-home-tab/data-migration.jpeg"
import "./ServicesHomeTabComponents.css"
import { Link } from 'react-router-dom'

function DataMigration() {
    return (
        <div className="services-home-tab-components">
            <h1 style={{marginTop: "4rem"}}></h1>
            {/* heading design start */}


            <div>
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="counter">
                            <div class="counter-content">
                                <h3>Data Migration</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* heading design end */}
            <div className="services-content-box">
                <div className="services-content">
                    <div >
                        <img src={datamigration} style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div>
                        <p>Data Migration is the process of transferring data from one system to another while changing the storage, database, or application. It should be a key consideration for any system implementation, rise, or consolidation. In an ideal world, it would be performed programmatically to make an automated migration. The fact is that Ittechnica experts play the most important role in this process when it is business or time-critical.</p>
                        <p>Ittechnica can take care of the entire migration process from strategy, development, documents, and content. Our experience has shown that these are important parts of the success of the project. These aspects usually require collaboration among different groups, while always maintaining the branding and message consistency across sites - which can impact the  workload required.</p>
                        <p>Data migration must be scoped with the initial brief and estimated to identify what technology is required, as this will reduce developers' work and provide the correct resources to be allocated. Before we put together a data migration strategy for your business, Ittechnica we will take the time to assess what your company truly needs to have a successful migration.</p>
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

export default DataMigration
