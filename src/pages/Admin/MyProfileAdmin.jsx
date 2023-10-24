import React from 'react';
import './Profile.css';

const MyProfileAdmin = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <title>CSS User Profile Card</title>
      <link rel="stylesheet" href="styles.css" />
      <div className="wrapper">
        <div className="left">
          <img src="https://cdn.pixabay.com/photo/2020/09/18/22/05/man-5583034_960_720.jpg" alt="user" width={100} />
          <h3>Dr. Ross Adams</h3>
          {/* <br></br> */}
          {/* <br></br> */}
          <p>Dean - CSE</p>
        </div>
        <div className="right">
          <div className="info">
            <h3>Personal Information</h3>
            <div className="info_data">
              <div className="data">
                <h4>Email</h4>
                <p>ross@gmail.com</p>
              </div>
              <div className="data">
                <h4>Phone</h4>
                <p>1234567890</p>
              </div>
            </div>
          </div>
          <div className="projects">
            <h3>Professional Details</h3>
            <div className="projects_data">
              <div className="data">
                <h4>Position</h4>
                <p>Dean - CSE (3rd Year)</p>
              </div>
              <div className="data">
                <h4>Qualifications</h4>
                <p>Ph. D. in Artificial Intelligence</p>
              </div>
            </div>
          </div>
          <div>
            <div className="projects_data">
              <div className="data">
                <h4>Research Articles Published</h4>
                <p>58</p>
              </div>
              <div className="data">
                <h4>Socities</h4>
                <p>IEEE CIET Student Branch</p>
              </div>
            </div>
          </div>
          {/* <div className="social_media">
            <ul>
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fab fa-instagram" /></a></li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MyProfileAdmin;
