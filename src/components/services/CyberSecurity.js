import React, { Component } from "react";
import { Link } from "react-router-dom";
import cybersecurity from "../../images/cybersecuritycontent.jpeg";

class CyberSecurity extends Component {
  render() {
    return (
      <div className="cyber-security">
        <div>
          <h1>Cyber Security</h1>
          <div className="agile-link">
            <ul>
              <li>
                <Link to="/agiletransformation">AgileTransformation</Link>
              </li>
              <li>
                <Link to="/softwaredelivery">softwaredelivery</Link>
              </li>
              <li>
                <Link to="/cybersecurity">cybersecurity</Link>
              </li>
              <li>
                <Link to="/digitalservices">digitalservices</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="cyber-security-content">
            <div className="image">
              <img src={cybersecurity} />
            </div>
            <div>
              <p align="justify">
                Cyber security is the practice of protecting systems, networks
                and programs from digital attacks by hackers. Ittechnica
                provides a wide range of advanced security solutions that can
                protect your business from unrelenting attacks, providing
                proactive protection around the clock. Understanding you have
                risks and vulnerabilities is one thing—but knowing how to build
                a comprehensive security strategy is quite another. If you’re
                not sure where to start, we recommend every company prioritize
                these six cyber security tactics:
              </p>
              <div>
                <div className="cyber-security-list-item">
                  <ol>
                    <li>
                      <p>
                        Upgrade your network security infrastructure, starting
                        with your firewall.
                      </p>
                    </li>
                    <li>
                      <p>Perform regular software updates and patches.</p>
                    </li>
                    <li>
                      <p>Secure the network edge.</p>
                    </li>
                    <li>
                      <p>Improve physical security.</p>
                    </li>
                    <li>
                      <p>Implement cyber security awareness training.</p>
                    </li>
                    <li>
                      <p>Conduct cyber security risk assessments.</p>
                    </li>
                  </ol>
                </div>
                <h3>
                  Upgrade Your Network Security Infrastructure, Starting with
                  Your Firewall
                </h3>
                <p>
                  Most legacy networks are not equipped to deal with the
                  sophistication and frequency of today’s cyberattacks. Assess
                  your infrastructure thoroughly to determine network security
                  viability, then create a prioritized plan to address any
                  deficiencies.
                </p>
              </div>
            </div>
          </div>

          <button className="what-we-do">
            <Link to="/"> Back</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default CyberSecurity;
