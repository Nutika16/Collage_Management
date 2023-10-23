import React, { useEffect, useState } from "react";
// import axios from "axios";

const FacultyNames = () => {
  // const [inputs, setInputs] = useState({
  //   name: "",
  //   email: "",
  //   ENo: "",
  //   phoneNo: "",
  // });
  // const [tableData, setTableData] = useState([]);
  // const [editClick, setEditClick] = useState(false);
  // const [editIndex, setEditIndex] = useState("");
  // const handleChange = (e) => {
  //   setInputs({
  //     ...inputs,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log("inputs", inputs);
  //   if (editClick) {
  //     const tempTableData = tableData;
  //     Object.assign(tempTableData[editIndex], inputs);
  //     setTableData([...tempTableData]);
  //     setEditClick(false);
  //     setInputs({
  //       name: "",
  //       email: "",
  //       ENo: "",
  //       phoneNo: "",
  //     });
  //   } else {
  //     setTableData([...tableData, inputs]);
  //     setInputs({
  //       name: "",
  //       email: "",
  //       ENo: "",
  //       phoneNo: "",
  //     });
  //   }
  // };

  // const handleDelete = (index) => {
  //   const filterData = tableData.filter((item, i) => i !== index);
  //   setTableData(filterData);
  // };
  // const handleEdit = (index) => {
  //   const tempData = tableData[index];

  //   setInputs({
  //     name: tempData.name,
  //     email: tempData.email,
  //     ENo: tempData.ENo,
  //     phoneNo: tempData.phoneNo,
  //   });
  //   setEditClick(true);
  //   setEditIndex(index);
  // };

  const data = [
    {
      s_no: 1,
      name: "Justino",
      email: "jkembry0@wunderground.com",
      subject: "Mentor",
      phone_no: "6185264625",
    },
    {
      s_no: 2,
      name: "Ursola",
      email: "ustallon1@ebay.com",
      subject: "Frontend Engineering",
      phone_no: "6705150240",
    },
    {
      s_no: 3,
      name: "Guendolen",
      email: "gsallowaye2@squidoo.com",
      subject: "Logical Reasoning",
      phone_no: "5287419293",
    },
    {
      
      s_no: 4,
      name: "Herta",
      email: "hduggon3@upenn.edu",
      subject: "System Design",
      phone_no: "7273276609",
    },
    { 
      s_no: 5,
      name: "Lotty", 
      email: "lonn4@cnbc.com", 
      subject: "Programming Abstraction",
      phone_no: "6979295700" 
    },
  ];

  return (
    <div className="faculty-crud">
      <h1 className="pageHeading">Faculty Records</h1>

      {/* <center>
        <div className="container">
          <div className="formClass">
            <form onSubmit={handleSubmit}>
              <br></br>
              <br></br>
              <br></br>

              <div className="flex flex-col">
                <label className="NameHead">Name</label>
                <input
                  name="name"
                  value={inputs.name}
                  onChange={handleChange}
                />
                <br></br>
                <br></br>
              </div>

              <div className="flex flex-col">
                <label className="EmailHead">Email</label>
                <input
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                  className="emailBlank"
                />
                <br></br>
                <br></br>
              </div>
              <div className="flex flex-col">
                <label className="EmployeeHead">Employee No.</label>
                <input name="ENo" value={inputs.ENo} onChange={handleChange} />
                <br></br>
                <br></br>
              </div>
              <div className="flex flex-col">
                <label className="MobileHead">Mobile No.</label>
                <input
                  name="phoneNo"
                  value={inputs.phoneNo}
                  onChange={handleChange}
                />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </div>
              <button type="submit" className="addBtn">
                {editClick ? "update" : "Add"}
              </button>
              <br></br>
              <br></br>
            </form>
          </div>
        </div>
      </center> */}

      {/* <br></br>
      <br></br>
      <br></br>
      <br></br> */}

      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Employee No.</th>
              <th>Phone No.</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {/* {tableData.map((item, i) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.ENo}</td>
                <td>{item.phoneNo}</td>
                <td>
                  <button
                    onClick={() => handleEdit(i)}
                    className="mr-3 text-yellow-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(i)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))} */}

            {data.map((entry, index) => (
              <tr key={index}>
                <td>{entry.s_no}</td>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.subject}</td>
                <td>{entry.phone_no}</td>
                {/* <td>- </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyNames;