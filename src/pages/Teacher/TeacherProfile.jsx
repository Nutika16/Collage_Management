import React from 'react'
import './Profile.css'; 
const TeacherProfile = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <title>CSS User Profile Card</title>
      <link rel="stylesheet" href="styles.css" />
      <div className="wrapper">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Woman_at_Lover%27s_Bridge_Tanjung_Sepat_%28cropped%29.jpg/640px-Woman_at_Lover%27s_Bridge_Tanjung_Sepat_%28cropped%29.jpg" alt="user" width={100} />
          <h3>Dr. Anna William</h3>
          {/* <br></br> */}
          {/* <br></br> */}
          <p>Ph.d Professor</p>
        </div>
        <div className="right">
          <div className="info">
            <h3>Personal Information</h3>
            <div className="info_data">
              <div className="data">
                <h4>Email</h4>
                <p>anna@gmail.com</p>
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
                <h4>Expertise Subjects</h4>
                <p>Computer Networks, Cyber Security</p>
              </div>
              <div className="data">
                <h4>Mentor to</h4>
                <p>CSE-5-G3</p>
              </div>
            </div>
          </div>
          <div>
            {/* <div className="projects_data">
              <div className="data">
                <h4>Research Articles Published</h4>
                <p>23</p>
              </div>
              <div className="data">
                <h4>Socities</h4>
                <p>IEEE CIET Student Branch</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
  );
};

export default TeacherProfile;