import React, { Component } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import fastresponse from "../../../images/fast-response.jpeg";
import quality from "../../../images/quality.jpeg";
import safesecure from "../../../images/safe-secure.jpeg";
import technology from "../../../images/technology-consultant.jpeg";
import problemsolving from "../../../images/problem-solving.jpeg";
import touchcommunication from "../../../images/touch-communication.jpeg";
import trackrecord from "../../../images/track-record.jpeg";
import { Spring } from "react-spring";
import ShowMoreText from "react-show-more-text";

class WeAreBest extends Component {
  state = {
    popoverOpen: false,
  };

  toggle = () => this.setState({ popoverOpen: !this.state.popoverOpen });
  render() {
    return (
      <div className="wearebest-box">
        <div className="wearebest">
          <div>
            <h1>We are best.</h1>
            <div>
              <div className="image" data-aos="fade-right" data-aos-once="true">
                <img src={fastresponse} />
              </div>
              <div className="content-data">
                <h2>
                  Fast Response to Requests and Critical Response Time
                  Guaranteed:
                </h2>
                <p>
                  It helps you make your customers happy and enhance your
                  brand’s reputation – but when done properly, it can also
                  improve efficiencies throughout your entire organization. Some
                  Companies think if your problem doesn’t seem that bad, they
                  can wait a few days to call you back. We get back to you fast
                  so you know when your problem will be resolved. Our contracts
                  spell out our response time. Ittechnica document and track all
                  customer text conversations.
                </p>
                <h3>
                  These techniques help to set your company apart as an
                  organization that values your customers:
                </h3>
                <ShowMoreText
                  /* Default options */
                  lines={1}
                  more="Show more"
                  less="Show less"
                  anchorClass=""
                  onClick={this.executeOnClick}
                  expanded={false}
                  width={280}
                >
                  <ul>
                    <li>
                      Use templates and text shortcuts to reduce the time it
                      takes to write each email.
                    </li>
                    <li>
                      Categorize all incoming customer service emails and
                      respond based on priority.
                    </li>
                    <li>
                      Use email autoresponders to keep your customers in the
                      loop and manage expectations.
                    </li>
                    <li>
                      Use time-based alerts to make sure no emails go missing or
                      are delayed.
                    </li>
                  </ul>
                </ShowMoreText>
              </div>
            </div>
            <div>
              <div className="content-data">
                <h2>Committed to Quality:</h2>
                <p>
                  Ittechnica, Inc. is committed to achieving customer
                  satisfaction and maintaining its reputation as a leading
                  provider of IT and training services. Serving a company’s IT
                  and critical network needs is a huge responsibility that we
                  take it very seriously. Quality takes teamwork and a solid
                  commitment to good communication, excellence, and industry
                  best practices to serve a company in an excellent manner. The
                  quality Management System that we employ looks at three main
                  components namely quality control, quality assurance and
                  quality improvement.
                </p>
                <h3>
                  We are committed to continually improve our professional
                  advisory and consulting services to meet and exceed the needs
                  of our clients by
                </h3>
                <ShowMoreText
                  /* Default options */
                  lines={1}
                  more="Show more"
                  less="Show less"
                  anchorClass=""
                  onClick={this.executeOnClick}
                  expanded={false}
                  width={280}
                >
                  <ul>
                    <li>We understand and meet our client’s requirements</li>
                    <li>
                      We provide the necessary resources for our employees to
                      perform their duties effectively and efficiently
                    </li>
                    <li>
                      By Monitoring performance, measuring effectiveness we
                      achieve quality objectives through the continual
                      improvement of our quality management system.
                    </li>
                    <li>
                      Providing a learning environment where the growth and
                      development of employees are actively encouraged and
                      supported.
                    </li>
                    <li>
                      Exploring new technologies, methodologies and embracing
                      them where relevant.
                    </li>
                    <li>
                      Reviewing the Quality Policy for suitability and relevance
                      from time to time.
                    </li>
                    <li>
                      Seeking and acting on client’s feedback efficiently.
                    </li>
                  </ul>
                </ShowMoreText>
              </div>
              <div className="image" data-aos="fade-left" data-aos-once="true">
                <img src={quality} />
              </div>
            </div>
            <div>
              <div className="image" data-aos="fade-right" data-aos-once="true">
                <img src={safesecure} />
              </div>
              <div className="content-data">
                <h2>Safe and secure:</h2>
                <p>
                  In developing a total security solution, Ittechnica works
                  closely with you to construct a customized plan in line with
                  your business security goals. Ittechnica protects your
                  business and customer data is a top priority. We offer
                  sophisticated, multilayered cybersecurity systems for new
                  clients and those looking to upgrade. We know that cyber and
                  physical security go hand in hand. In addition to securing
                  your network, we educate (help) our clients in your business
                  with surveillance and access control. These security  basics
                  protect you, your employees, and your property. You benefit
                  from our experience in delivering effective solutions to some
                  of the world’s biggest corporations.
                </p>
              </div>
            </div>
            <div>
              <div className="content-data">
                <h2>Technology Consulting:</h2>
                <p>
                  We provide IT-related, business-to-business consulting
                  services alongside our five lines of business: IT Solutions,
                  Software Solutions, Business Communications, Security
                  Solutions, and Website Services. Ittechnica can provide
                  business-to-business consulting related to many of our IT
                  Solutions.
                </p>
              </div>
              <div className="image" data-aos="fade-left" data-aos-once="true">
                <img src={technology} />
              </div>
            </div>
            <div>
              <div className="image" data-aos="fade-right" data-aos-once="true">
                <img src={problemsolving} />
              </div>
              <div className="content-data">
                <h2>We Help Solve Your Business Problems:</h2>
                <p>
                  We sit on the same side of the business as you to provide
                  business solutions to business problems. We listen to business
                  problems and offer several strategies to resolve the root of
                  the problem to achieve your objectives.
                </p>
                <h3>
                  Below are the seven steps we follow for an effective
                  problem-solving process.
                </h3>
                <ShowMoreText
                  /* Default options */
                  lines={1}
                  more="Show more"
                  less="Show less"
                  anchorClass=""
                  onClick={this.executeOnClick}
                  expanded={false}
                  width={280}
                >
                  <ul>
                    <li>
                      Identify the issues: To have a clear idea about what the
                      problem is and separate the listing of issues.
                    </li>
                    <li>
                      Understand the issues: Best solution is the one which
                      satisfies everyone’s interests.
                    </li>
                    <li>
                      Evaluate and select the best options: By separating the
                      evaluation of options from the selection of options and
                      selecting the best one.
                    </li>
                    <li>
                      Document the agreements: It is better to document the
                      steps to solve the problem which helps to think about all
                      the details and implications.
                    </li>
                    <li>
                      Agree on contingencies, monitoring and evaluation: Create
                      opportunities to evaluate the agreements and their
                      implementation.
                    </li>
                  </ul>
                </ShowMoreText>
              </div>
            </div>
            <div>
              <div className="content-data">
                <h2>High Touch Communication:</h2>
                <p>
                  Our Goal is to answer every call with a LIVE person. Forget
                  being in an automated menu hell. If getting someone to fix
                  your computer is as painful as the computer problem itself. If
                  you happen to get our voicemail it becomes a ticket on our
                  service board immediately and you can be sure to get a call
                  back. Ittechnica empowers you to connect with customers,
                  deliver the information they want, and exceed their
                  expectations.  
                </p>
                <p>
                  Ittechnica provides a customized level of engagement that goes
                  beyond most outsourced IT companies. Our unique partnership
                  with your business allows us to provide an accurate level of
                  support and correctly escalate issues when appropriate.
                </p>
              </div>
              <div className="image" data-aos="fade-left" data-aos-once="true">
                <img src={touchcommunication} />
              </div>
            </div>
            <div>
              <div className="image" data-aos="fade-right" data-aos-once="true">
                <img src={trackrecord} />
              </div>
              <div className="content-data">
                <h2>A Proven Track Record:</h2>
                <p>
                  Unlike others in our industry, we can prove and show you how
                  we deliver Peace of Mind, Less Downtime, Faster Problem
                  Resolution, Data Protection, Money Savings, Streamlined
                  Communications, and Simplicity in IT management for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeAreBest;
