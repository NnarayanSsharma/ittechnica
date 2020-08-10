import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./WhyWeAreBest.css";
import wearebest from "../../../images/wearebest.jpeg";

class WhyWeAreBest extends Component {
  render() {
    return (
      <div className="we-are-best">
        <div>
          <div>
            <div>
              {/* <img src={one1} /> */}
              <p>WHY WE'RE</p>
              <p>THE BEST</p>
            </div>
            <button>
              <Link to="/wearebest">Read More</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WhyWeAreBest;
