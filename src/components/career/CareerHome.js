import React, { Component } from "react";
import "./Career.css";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import careerhomeimage from "../../images/career-home-image.png"


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '60%',
    right                 : 'auto',
    bottom                : 'auto',
    width                 : '400px',
    height                : '300px',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : 'rgba(255,255,255,1)'
  }
};
class CareerHome extends Component {

  state = {
    showModal: false
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div style={{ margin: "4rem auto 0.2rem" }}>
        {/* <h1>CareerHome</h1> */}
        <div className="career-home">
          <div>
            <div>
              <img src={careerhomeimage} />
            </div>
            <div>
              <div>
                <h1>Careers</h1>
                <button onClick={this.handleOpenModal}>
                  View Job Openings
                </button>
              </div>
            </div>
          </div>
          <Modal
            isOpen={this.state.showModal}
            style={customStyles}
            contentLabel="Minimal Modal Example"
          >
            <button onClick={this.handleCloseModal}
              style={{
                width: '10%',
                height: '10%',
                position: 'relative',
                top: '0',
                right: '0',
                left: '80%',
                borderRadius: '5px'
              }}
            >X</button>
            <div className="menu">
              <div>
                <div
                  className="job-opening"
                  style = {{
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#fff'
                  }}
                >
                  <Link to="/careerhome/linuxAndcloudengineer1"

                  >
                    Linux and cloud engineer
                  </Link>
                  <Link to="/careerhome/cloudproductanalyst">
                    Cloud product analyst
                  </Link>
                  <Link to="/careerhome/linuxAndcloudengineer2">
                    Linux and cloud engineer
                  </Link>
                  <Link to="/careerhome/linuxAndcloudengineer3">
                    Linux and cloud engineer
                  </Link>
                  <Link to="/careerhome/linuxAndcloudengineer4">
                    Linux and cloud engineer
                  </Link>
                </div>
              </div>
            </div>
          </Modal>
          
        </div>
      </div>
    );
  }
}

export default CareerHome;
