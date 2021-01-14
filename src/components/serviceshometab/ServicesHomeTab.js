import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ServicesHomeTab extends Component {
    render() {
        return (
            <div>
                <h1 style={{marginTop: "4rem"}}>ServicesHomeTab</h1>
                <div>
                    <ul>
                        <li><Link to="/agilesoftwaredevelopment">Agile Software Development</Link></li>
                        <li><Link to="/operation">Operation</Link></li>
                        <li><Link to="/applicationsecurity">Application Security</Link></li>
                        <li><Link to="/engineering">Engineering</Link></li>
                        <li><Link to="/financialconsulting">Financial Consulting</Link></li>
                        <li><Link to="/awsmanagedservices">AWS Managed Services</Link></li>
                        <li><Link to="/azuremanagedservices">Azure Managed Services</Link></li>
                        <li><Link to="/datamigration">Data Migration</Link></li>

                    </ul>
                </div>
            </div>
        )
    }
}

export default ServicesHomeTab
