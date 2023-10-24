import React from 'react';
import './UserBoxes.css';
import { Link } from 'react-router-dom';
const Choose = () => {
  return (
    <div className="user-boxes">
      <Link to="/Home" className="box admin" style={{textDecoration: 'none', color: 'black'}}>
        <h2>ADMIN</h2>
        <p>Manage the system</p>
      </Link>
      <Link to="/TeacherHome" className="box faculty" style={{textDecoration: 'none', color: 'black'}}>
        <h2>FACULTY</h2>
        <p>Teach and guide students</p>
      </Link>
      <Link to="/StudentHome" className="box student" style={{textDecoration: 'none', color: 'black'}}>
        <h2>STUDENT</h2>
        <p>Learn and grow</p>
      </Link>
    </div>
  );
};

export default Choose;