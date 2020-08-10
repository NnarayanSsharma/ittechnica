import React, { Component } from "react";
import clientpic from "../../../images/testimonial-pic1.jpeg";
import "./Testimonial.css";

class Testimonial extends Component {
  render() {
    return (
      <div className="testimonial-box">
        <h2>Our Clients Testimonials</h2>
        <div className="image">
          <img src={clientpic} />
        </div>
        <div className="testimonial-content">
          <div>
            <i class="fas fa-quote-left"></i>
            <p>
              Ittechnica continues to be one of our best partners for IT
              services. They provide high-quality services in a flexible,
              customer-centric framework. A key critical success factor is the
              time the account team invests in understanding our business and
              related needs.
            </p>
            <h3>Logan</h3>
            <h4>Account Manager, TEKsystems</h4>
          </div>
          <div>
            <i class="fas fa-quote-left"></i>
            <p>
              We developed a great partnership with Ittechnica Inc and their
              dedication towards services is excellent. We appreciate their work
              and bringing new talents based on our requirements.{" "}
            </p>
            <h3>Christina</h3>
            <h4>Sr. Manager, Verizon</h4>
          </div>
          <div>
            <i class="fas fa-quote-left"></i>
            <p>
              Ittechnica has exceeded our expectations! They guided us through
              the entire process, from selection, to deployment to help desk
              support. Excellent service and attention to detail!
            </p>
            <h3>Ryan</h3>
            <h4>Manager, Apex Systems</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
