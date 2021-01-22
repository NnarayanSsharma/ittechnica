import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./WhyWeAreBest.css";
import wearebest from "../../../images/wearebest.jpeg";
import { motion } from "framer-motion"

class WhyWeAreBest extends Component {
  render() {
    return (
      <div className="we-are-best">
        <div>
          <div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000" 
            >
              {/* <img src={one1} /> */}
              <p>WHY WE'RE</p>
              <p>THE BEST</p>
            </div>
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px rgb(255,255,255)"
              }}
            >
              <Link to="/wearebest">Read More</Link>
            </motion.button>
          </div>
        </div>
      </div>
    );
  }
}

export default WhyWeAreBest;
