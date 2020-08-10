import React, { Component } from "react";
import { Link } from "react-router-dom";
import softwaredelivery from "../../images/softwaredeliverycontent.jpeg";

class SoftwareDelivery extends Component {
  render() {
    return (
      <div className="software-delivery">
        <div>
          <h1>Software Delivery</h1>
          <div className="agile-link">
            <ul>
              <li>
                <Link to="/agiletransformation">AgileTransformation</Link>
              </li>
              <li>
                <Link to="/softwaredelivery">Software Delivery</Link>
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
          <div className="software-delivery-content">
            <div className="image">
              <img src={softwaredelivery} />
            </div>
            <div>
              <p>
                Ittechnica business is delivering fully automated Development,
                Security and Operations (DevSecOps) software development
                environments using modern Agile methods, techniques and
                technologies. We employ customer focused design principles along
                with the quality driven processes that provide clients with the
                most performant systems available today.  We bring years of
                real-world DevSecOps experience with large system
                implementations that ensures our customers reap the benefits of
                timely, efficient, and cost-effective business automation.
              </p>
              <h3>Agile Application Development:</h3>
              <p>
                The integration of DevSecOps is a paradigm that reduces risk and
                increases efficiency with real-time dashboards that provide
                metrics for program progress. This is accomplished by using our
                proven methodology of:
              </p>
              <p>
                <span>
                  Continuous Integration/Continuous Deployment (CI/CD):
                </span>
                All software is created within a CI/CD pipeline infrastructure
                that automatically compiles, tests, and secures software before
                it is deployed into production.
              </p>
              <p>
                <span>Automated Testing:</span> We enforce Test Driven
                Development that requires all software to be tested through
                automation pipelines requiring all test cases to pass before any
                code is deployed.
              </p>
              <p>
                <span>Incremental Modernization: </span> Incrementally replace
                specific pieces of functionality within legacy systems with new
                applications and micro-services.
              </p>
              <p>
                <span>Cyber Security: </span> Deploy security as code by using
                the latest DevSecOps automation tools available.  This imbedded
                security culture enables development teams to implement modern
                security experimentation processes into the deployment of
                security tools that enable faster identification and mitigation
                of new threats.
              </p>

              <h3>Agile Management:</h3>
              <p>
                Agile Management is a project methodology which uses short
                development cycles to focus on continuous improvement in the
                development of product or a service. It promotes collaborative
                working, especially with the end user. Agile Management
                integrate planning with execution, which helps a team to respond
                effectively to changing requirements. To achieve below are the
                few steps which we follow: Agile Analytics, Agile performance
                Management, Lean Portfolio Management
              </p>
              <p>
                Deliver Quality at Speed’ is the success mantra in the current
                highly-competitive digital business world. Below are the 10
                reasons for embracing agile software delivery
              </p>
              <div className="software-delivery-list-item">
                <ul>
                  <li>
                    <p>
                      Accelerate Product Delivery: Agile development approach
                      involving shorter sprints is gaining momentum to keep up
                      the speed of development process in consistent with the
                      business goals.
                    </p>
                  </li>
                  <li>
                    <p>
                      Enhance ability to manage changing priorities: Agile
                      approach for software development requires not only teams
                      to develop and test faster, but also to deliver
                      enhancements to the products and services faster to the
                      customers. To ensure the end user changes are met taking
                      an agaile approach at every step plays a key role.
                    </p>
                  </li>
                  <li>
                    <p>
                      Increase productivity: The agile approach enables
                      increased productivity through more effective
                      communication while being highly responsive to
                      ever-changing customer demands.
                    </p>
                  </li>
                  <li>
                    <p>
                      Enhance software quality: Agile techniques evaluate and
                      enhance the software quality while offering increased
                      customer value.
                    </p>
                  </li>
                  <li>
                    <p>
                      Enhance delivery predictability: Clients usually care
                      about predictability. With the help of agile approach for
                      software delivery which emphasizes on setting up metrics
                      and measurement, teams can plan, coordinate, and deliver
                      with enough predictability along with a release level
                      commitment.
                    </p>
                  </li>
                  <li>
                    <p>
                      Improve business/IT alignment: Organizations must focus on
                      IT to implement the right systems in the right way to meet
                      the business needs. 
                    </p>
                  </li>
                  <li>
                    <p>
                      Improve project visibility: Visibility is the key to adapt
                      quickly to the needed change. In the absence of project
                      visibility, it is difficult to track and measure
                      productivity improvements. Improving the team and
                      leadership visibility through agile approach provides
                      customer value early and often.
                    </p>
                  </li>
                  <li>
                    <p>
                      Reduce project risk:  Software development in sprints
                      includes agile techniques such as sprint review, the
                      sprint retrospective, etc. Such techniques provide
                      constant feedback which helps prevent deviations between
                      expectations and the completed 
                    </p>
                  </li>
                  <li>
                    <p>
                      Improve team morale: <u>Agile approach</u> demands an
                      organization to listen to its employees, communicate its
                      plans to deal with various concerns with employees and
                      recognize employees for their efforts and accomplishments.
                    </p>
                  </li>
                  <li>
                    <p>
                      Improve engineering discipline: A good design, perfect
                      configuration management, and effective <u>testing</u>
                       strategies are crucial to making the best use of agility.
                    </p>
                  </li>
                </ul>
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

export default SoftwareDelivery;
