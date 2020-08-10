import React, { Component } from "react";
import { Link } from "react-router-dom";
import digitalservices from "../../images/digitalservicecontent.jpeg";

import "./WhatWeDo.css";

class DigitalServices extends Component {
  render() {
    return (
      <div className="digital-services">
        <div>
          <h1>DigitalServices</h1>
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
          <div className="digital-services-content">
            <div className="image">
              <img src={digitalservices} />
            </div>
            <div>
              <p>
                Ittechnica help to refine our customer journey, understand our
                customer attribution data, automate marketing operations, and
                build technical solutions that allow you to work better and
                faster through agile delivery methods.
              </p>
              <p>
                We fuse startup thinking and agile methods to help established
                companies and the public sector increase their customer value,
                drive operational effectiveness and thrive in an evolving world.
              </p>
              <p>
                We bring a startup mindset and agile methods to both established
                companies and the public sector to unlock value in ways that
                delight our customers and improve their operational
                effectiveness. Our approach to transformation is grounded in a
                view of both the company and the customers simultaneously, and a
                unique fusing of strategy and consulting, experience and
                engineering with an enduring culture of problem-solving
                creativity.
              </p>
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

export default DigitalServices;
