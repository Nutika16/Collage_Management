import React from 'react';
import './UserBoxes.css';
import { Link } from 'react-router-dom';
const Choose = () => {
  return (
    <div className="user-boxes">
      <Link to="/Home" className="box admin">
        <h2>Admin</h2>
        <p>Manage the system</p>
      </Link>
      <Link to="/TeacherHome" className="box faculty">
        <h2>Faculty</h2>
        <p>Teach and guide students</p>
      </Link>
      <Link to="/StudentHome" className="box student">
        <h2>Student</h2>
        <p>Learn and grow</p>
      </Link>
    </div>
  );
};

export default Choose;