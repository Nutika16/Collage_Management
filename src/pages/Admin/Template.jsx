import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
} from "recharts";

const Template = () => {
  const data = [
    { name: "NALR", Attendance: 94 },
    { name: "FEE", Attendance: 37 },
    { name: "PA", Attendance: 30 },
    { name: "Backend", Attendance: 77 },
  ];

  const studentData = [
    {
      firstName: "Leanna",
      rollNo: 1,
      subject1: 94,
      subject2: 37,
      subject3: 30,
      subject4: 77,
    },
    // Add data for more students here
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="heading_size">Charts and Reports</h2>
      <div className="App">
        <div className="chart" style={{marginLeft: 320}}>
          <PieChart width={400} height={400}>
            <Pie
              stroke="black"
              dataKey="Attendance"
              isAnimationActive={false}
              data={data}
              cx={200} // Adjust the x-coordinate for the 
              cy={200}
              outerRadius={150}
              fill="#584d9f"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
        <div className="table-wrapper">
          <table className="fl-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Roll No</th>
                <th>NALR</th>
                <th>FEE</th>
                <th>PA</th>
                <th>Backend</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((student, index) => (
                <tr key={index}>
                  <td>{student.firstName}</td>
                  <td>{student.rollNo}</td>
                  <td>{student.subject1}</td>
                  <td>{student.subject2}</td>
                  <td>{student.subject3}</td>
                  <td>{student.subject4}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Template;