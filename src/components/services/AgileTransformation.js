import React, { Component } from "react";
import "./WhatWeDo.css";
import { Link } from "react-router-dom";
import agileimg from "../../images/agile1.jpeg";

class AgileTransformation extends Component {
  render() {
    return (
      <div className="agile-transformation">
        <div>
          <h1>Agile Transformation</h1>
          <div className="agile-link">
            <ul>
              <li>
                <Link to="/agiletransformation">Agile Transformation</Link>
              </li>
              <li>
                <Link to="/softwaredelivery">Software Delivery</Link>
              </li>
              <li>
                <Link to="/cybersecurity">Cyber Security</Link>
              </li>
              <li>
                <Link to="/digitalservices">Digital Services</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="agile-content">
            <div className="image">
              <img src={agileimg} />
            </div>
            <div>
              <p>
                Agile Transformation is the continuous process of refactoring
                organization to achieve full benefits of agility. For any
                business to succeed in today’s market they must be able to
                rapidly and reliably deliver product increments to customers.
                More importantly, they need to be quick and able to respond to
                feedback from customers.
              </p>
              <h3>AGILE TRANSFORMATION STRATEGY:</h3>
              <p>
                The strategy for an Agile Transformation comes from knowing
                where your organization is today and where you need to go across
                wide range of roles such as, workflow processes, product
                performance, understanding of your market and customers, {" "}
              </p>
              <p>“Transformation can be planned, managed, and measured."</p>
              <p>
                The key is to understand the right way to plan so that business
                value is delivered at regular increments in the Transformation.
                The goal is to transform the way you work.
              </p>
              <h3>STEPS TO AN AGILE TRANSFORMATION:</h3>
              <p>
                We perform agile transformation in four main areas – Culture,
                Organizational, Process, and Technical – because implementing
                transformations at all levels of an organization is the most
                effective way to bring long lasting change.
              </p>
              <p>
                Strategy for the goals set in the process will be achieved by
                the near-term goals and work based on that. While working on
                that we need to consider:
              </p>
              <div className="agile-list-item">
                <ul>
                  <li>
                    <p>Build a leadership Coalition:</p>
                    <p>
                      Agile Transformation requires changes to every part of the
                      business. To implement those changes top management has to
                      take decisions so make sure executives are on board and
                      know what is going to happen
                    </p>
                  </li>
                  <li>
                    <p>Define and end state vision:</p>
                    <p>
                      Basic idea is needed before we start the process to make
                      things work on the right place but in realistic situation
                      this might change.
                    </p>
                  </li>
                  <li>
                    <p>Timeline for each milestone:</p>
                    <p>
                      We need to periodically assess the progress of the
                      transformation, retrospect and adjust to reach the
                      milestone in the scheduled timeline.
                    </p>
                  </li>
                  <li>
                    <p>Build a transformation roadmap:</p>
                    <p>
                      We have to give the basic idea to organization of what
                      we’re going to do, how long it’s going to take, and what
                      benefits we expect to achieve from the investment.
                    </p>
                  </li>
                  <li>
                    <p>Technology will help to achieve your goals: </p>
                    <p>
                      We need to choose the right technology to help us achieve
                      the goals in the right way.
                    </p>
                  </li>
                  <li>
                    <p>Adapt and Learn:</p>
                    <p>
                      Re-assess the end-state vision based upon how our
                      understanding has evolved during the course of the
                      Transformation.
                    </p>
                  </li>
                  <li>
                    <p>Manage Communication:</p>
                    <p>
                      Transparent communication about progress and impediments
                      from the leadership will create excitement and energy
                      which in turn helps in better productivity
                    </p>
                  </li>
                </ul>
              </div>
              <h3>AGILE TRANSFORMATION ROADMAP:</h3>
              <p className="agile-roadmap">
                For a large complex organization to successfully Transform, a
                Transformation roadmap is essential. Transformation will have
                several common features:
              </p>
              <p>Analysis of where the organization is today</p>
              <p>
                Discovery of where the organization would like to be at some
                point in the future
              </p>
              <p>Vision to guide the transformation</p>
              <p>Governance for the initiation</p>
              <p>Communication Strategy</p>
              <p>Change management strategy</p>
              <p>High level-plan</p>
            </div>
          </div>
          {/* <div className="agile-link">
            <h2>
              <Link to="/agiletransformation">AgileTransformation</Link>
            </h2>
            <h2>
              <Link to="/softwaredelivery">softwaredelivery</Link>
            </h2>
            <h2>
              <Link to="/cybersecurity">cybersecurity</Link>
            </h2>
            <h2>
              <Link to="/digitalservices">digitalservices</Link>
            </h2>
          </div> */}
          <button className="what-we-do">
            <Link to="/"> Back</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default AgileTransformation;
