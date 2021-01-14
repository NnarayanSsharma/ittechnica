import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo3 from "../../images/logo-3.png"

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer">
          <div className="div-1">
            <div>
              <h2>
                ITTECHNICA
                {/* <img src={logo3} /> */}
              </h2>
              <p>Follow Us</p>
              <div className="social-icon">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-youtube-square"></i>
              </div>
            </div>
            
            <div>
              <h3><Link to="/">What We Do</Link></h3>
              <p><Link to="/agiletransformation">Agile Transformation</Link></p>
              <p><Link to="/softwaredelivery">Software Delivery</Link></p>
              <p><Link to="/cybersecurity">Cyber Security</Link></p>
              <p><Link to="/digitalservices">DigitalServices</Link></p>

              <br />

              <h3>
                <Link to="/aboutus">About Us</Link>
              </h3>
              
              
              
            </div>
            <div>

              <h3>
                <Link to="/agilesoftwaredevelopment">Services</Link>
              </h3>
              <p>
                <Link to="/agilesoftwaredevelopment">Agile Software Development</Link>
              </p>
              <p><Link to="/applicationsecurity">Application Security</Link></p>
              <p><Link to="/awsmanagedservices">AWS Managed Services</Link></p>
              <p><Link to="/azuremanagedservices">Azure Managed Services</Link></p>
              <p><Link to="/datamigration">Data Migration</Link></p>
              <p><Link to="/engineering">Engineering</Link></p>
              <p><Link to="/financialconsulting">Financial Consulting</Link></p>
              <p><Link to="/operation">Operation</Link></p>
              
              <br />
              
              <br/>

              {/* <h3>Blog</h3> */}
              
              
            </div>
            <div>
            
              

              <h3>
                <Link to="/careerhome">Careers</Link>
              </h3>
              <p>
                <Link to="/careerhome/linuxAndcloudengineer1">
                  Linux and cloud engineer
                </Link>
              </p>
              <p>
                <Link to="/careerhome/cloudproductanalyst">
                  Cloud product analyst
                </Link>
              </p>
              <p>
                <Link to="/careerhome/linuxAndcloudengineer2">
                  Linux and cloud engineer
                </Link>
              </p>
              <p>
                <Link to="/careerhome/linuxAndcloudengineer3">
                  Linux and cloud engineer
                </Link>
              </p>
              <p>
                <Link to="/careerhome/linuxAndcloudengineer4">
                  Linux and cloud engineer
                </Link>
              </p>

              <br />
              
              <h3><Link to="/contactus">Contact Us</Link></h3>
              
            </div>
          </div>
          <div className="div-2">
            <p>&copy; 2021 ITTECHNICA</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
