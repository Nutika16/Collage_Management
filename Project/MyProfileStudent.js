import React from 'react';
import './MyProfile.css';

const MyProfileStudent = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <title>CSS User Profile Card</title>
      <link rel="stylesheet" href="styles.css" />
      <div className="wrapper">
        <div className="left">
          <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width={100} />
          <h3>Alex William</h3>
          {/* <br></br> */}
          {/* <br></br> */}
          <p>Roll No: 2110990940</p>
        </div>
        <div className="right">
          <div className="info">
            <h3>Personal Information</h3>
            <div className="info_data">
              <div className="data">
                <h4>Email</h4>
                <p>alex@gmail.com</p>
              </div>
              <div className="data">
                <h4>Phone</h4>
                <p>1234567890</p>
              </div>
            </div>
          </div>
          <div className="projects">
            <h3>Academic Details</h3>
            <div className="projects_data">
              <div className="data">
                <h4>Course</h4>
                <p>BE CSE</p>
              </div>
              <div className="data">
                <h4>Semester</h4>
                <p>5th</p>
              </div>
            </div>
          </div>
          <div>
            <div className="projects_data">
              <div className="data">
                <h4>CGPA</h4>
                <p>9.21</p>
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

export default MyProfileStudent;
