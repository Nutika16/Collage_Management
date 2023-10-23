import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
// import axios from "axios";
// import MockData from "src/MOCK_DATA_STUDENT.json"

const StudentListTeacher = () => {
  // const [inputs, setInputs] = useState({
  //   name: "",
  //   email: "",
  //   course: "",
  //   rollNo: "",
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
  //       course: "",
  //       rollNo: "",
  //       phoneNo: "",
  //     });
  //   } else {
  //     setTableData([...tableData, inputs]);
  //     setInputs({
  //       name: "",
  //       email: "",
  //       course: "",
  //       rollNo: "",
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
  //     course: tempData.course,
  //     rollNo: tempData.rollNo,
  //     phoneNo: tempData.phoneNo,
  //   });
  //   setEditClick(true);
  //   setEditIndex(index);
  // };

  const data = [
    {
      rollNo: 1,
      name: "Cheston",
      email: "cgoldhill0@nba.com",
      cgpa: 4.15,
      phoneNo: "4469435468",
    },
    {
      rollNo: 2,
      name: "Cherianne",
      email: "cjeannaud1@comcast.net",
      cgpa: 9.15,
      phoneNo: "8562303641",
    },
    {
      rollNo: 3,
      name: "Padraic",
      email: "paicken2@mysql.com",
      cgpa: 7.15,
      phoneNo: "6823944859",
    },
    {
      rollNo: 4,
      name: "Clevie",
      email: "cwhapham3@technorati.com",
      cgpa: 7.84,
      phoneNo: "5963648617",
    },
    {
      rollNo: 5,
      name: "Sharona",
      email: "spester4@gravatar.com",
      cgpa: 9.61,
      phoneNo: "6684436316",
    },
    {
      rollNo: 6,
      name: "Sissie",
      email: "svanyashkin5@zdnet.com",
      cgpa: 8.88,
      phoneNo: "8628671995",
    },
    {
      rollNo: 7,
      name: "Gwendolyn",
      email: "gshedden6@cafepress.com",
      cgpa: 4.15,
      phoneNo: "2991007703",
    },
    {
      rollNo: 8,
      name: "Cad",
      email: "cbichener7@paginegialle.it",
      cgpa: 7.12,
      phoneNo: "6314476798",
    },
    {
      rollNo: 9,
      name: "Noel",
      email: "npullman8@wunderground.com",
      cgpa: 7.45,
      phoneNo: "6988487407",
    },
    {
      rollNo: 10,
      name: "Tori",
      email: "tsansome9@parallels.com",
      cgpa: 8.89,
      phoneNo: "7443800994",
    },
    {
      rollNo: 11,
      name: "Camey",
      email: "cchasmara@seesaa.net",
      cgpa: 7.12,
      phoneNo: "3727803638",
    },
    {
      rollNo: 12,
      name: "Shannah",
      email: "sswantonb@last.fm",
      cgpa: 9.51,
      phoneNo: "9253073791",
    },
    {
      rollNo: 13,
      name: "Guinna",
      email: "gellamc@opera.com",
      cgpa: 7.45,
      phoneNo: "1365919688",
    },
    {
      rollNo: 14,
      name: "Harlin",
      email: "hinnesd@whitehouse.gov",
      cgpa: 7.58,
      phoneNo: "9712906755",
    },
    {
      rollNo: 15,
      name: "Olivier",
      email: "olauxe@netvibes.com",
      cgpa: 8.15,
      phoneNo: "6344633586",
    },
    {
      rollNo: 16,
      name: "Norene",
      email: "nsportonf@apache.org",
      cgpa: 8.12,
      phoneNo: "5246758973",
    },
    {
      rollNo: 17,
      name: "Callean",
      email: "cpetrellig@umn.edu",
      cgpa: 8.10,
      phoneNo: "2213488134",
    },
    {
      rollNo: 18,
      name: "Lizbeth",
      email: "lvitteh@diigo.com",
      cgpa: 7.58,
      phoneNo: "2387199567",
    },
    {
      rollNo: 19,
      name: "Cally",
      email: "cgathereri@google.com.au",
      cgpa: 4.12,
      phoneNo: "8554032510",
    },
    {
      rollNo: 20,
      name: "Rahel",
      email: "rstainbrrollNogej@wired.com",
      cgpa: 8.12,
      phoneNo: "5556044191",
    },
    {
      rollNo: 21,
      name: "Dwain",
      email: "dranscombk@arizona.edu",
      cgpa: 7.51,
      phoneNo: "8888987560",
    },
    {
      rollNo: 22,
      name: "Josephine",
      email: "jbaumertl@utexas.edu",
      cgpa: 7.58,
      phoneNo: "9523952222",
    },
    {
      rollNo: 23,
      name: "Geralda",
      email: "gjuraszm@unc.edu",
      cgpa: 8.15,
      phoneNo: "6156621879",
    },
    {
      rollNo: 24,
      name: "Gillan",
      email: "gpricen@rediff.com",
      cgpa: 7.15,
      phoneNo: "9155382445",
    },
    {
      rollNo: 25,
      name: "Cordie",
      email: "cclilverdo@archive.org",
      cgpa: 4.58,
      phoneNo: "8242792141",
    },
    {
      rollNo: 26,
      name: "Alameda",
      email: "ashavep@ning.com",
      cgpa: 7.15,
      phoneNo: "9723167393",
    },
    {
      rollNo: 27,
      name: "Wynny",
      email: "wferenczq@cbc.ca",
      cgpa: 4.51,
      phoneNo: "3012605886",
    },
    {
      rollNo: 28,
      name: "Lutero",
      email: "lallattr@utexas.edu",
      cgpa: 7.45,
      phoneNo: "1995049190",
    },
    {
      rollNo: 29,
      name: "Christi",
      email: "cgollings@biblegateway.com",
      cgpa: 4.59,
      phoneNo: "4383048724",
    },
    {
      rollNo: 30,
      name: "Clair",
      email: "ccussonst@devhub.com",
      cgpa: 8.15,
      phoneNo: "8184619567",
    },
    {
      rollNo: 31,
      name: "Cati",
      email: "cdongateu@mtv.com",
      cgpa: 9.21,
      phoneNo: "8054189313",
    },
    {
      rollNo: 32,
      name: "Ricky",
      email: "rcrocroftv@people.com.cn",
      cgpa: 7.45,
      phoneNo: "9139291100",
    },
    {
      rollNo: 33,
      name: "Carole",
      email: "cboylanw@cisco.com",
      cgpa: 7.50,
      phoneNo: "3659028004",
    },
    {
      rollNo: 34,
      name: "Inez",
      email: "ipllux@sina.com.cn",
      cgpa: 4.89,
      phoneNo: "9498960148",
    },
    {
      rollNo: 35,
      name: "JarrollNo",
      email: "jscanterburyy@msn.com",
      cgpa: 5.15,
      phoneNo: "9939528239",
    },
    {
      rollNo: 36,
      name: "Bryana",
      email: "bkittleyz@wordpress.com",
      cgpa: 8.15,
      phoneNo: "6845288871",
    },
    {
      rollNo: 37,
      name: "Karlis",
      email: "kskerrett10@psu.edu",
      cgpa: 7.10,
      phoneNo: "4833515033",
    },
    {
      rollNo: 38,
      name: "Denni",
      email: "dlack11@go.com",
      cgpa: 8.15,
      phoneNo: "9524917775",
    },
    {
      rollNo: 39,
      name: "Ivett",
      email: "icostello12@e-recht24.de",
      cgpa: 7.15,
      phoneNo: "4865315667",
    },
    {
      rollNo: 40,
      name: "Lalo",
      email: "lfriberg13@jugem.jp",
      cgpa: 7.45,
      phoneNo: "4228893789",
    },
    {
      rollNo: 41,
      name: "Abie",
      email: "afandrich14@shinystat.com",
      cgpa: 8.63,
      phoneNo: "6084337341",
    },
    {
      rollNo: 42,
      name: "Ulla",
      email: "uealam15@blog.com",
      cgpa: 8.45,
      phoneNo: "9208785265",
    },
    {
      rollNo: 43,
      name: "Siusan",
      email: "sdavrollNoovitch16@comcast.net",
      cgpa: 7.26,
      phoneNo: "6222043426",
    },
    {
      rollNo: 44,
      name: "Caddric",
      email: "cschule17@techcrunch.com",
      cgpa: 6.25,
      phoneNo: "7856384076",
    },
    {
      rollNo: 45,
      name: "Petr",
      email: "pjoyner18@webeden.co.uk",
      cgpa: 8.12,
      phoneNo: "7446446702",
    },
    {
      rollNo: 46,
      name: "Shell",
      email: "sgerling19@vk.com",
      cgpa: 6.20,
      phoneNo: "1996489902",
    },
    {
      rollNo: 47,
      name: "Drusi",
      email: "dtomsett1a@tripadvisor.com",
      cgpa: 8.58,
      phoneNo: "2101655556",
    },
    {
      rollNo: 48,
      name: "Angelico",
      email: "arustan1b@scribd.com",
      cgpa: 5.69,
      phoneNo: "1436592977",
    },
    {
      rollNo: 49,
      name: "Dorena",
      email: "dmassimo1c@disqus.com",
      cgpa: 9.45,
      phoneNo: "6559117321",
    },
    {
      rollNo: 50,
      name: "Kippar",
      email: "kmatissoff1d@chron.com",
      cgpa: 7.95,
      phoneNo: "3159408322",
    },
  ];

  return (
    <div className="student-crud bg-[#004b43]">
      <h1 className="pageHeading">Student Records</h1>
      {/* <div className = "formBox">

        <center>

        <div className="formClass">
        <form onSubmit={handleSubmit}>
          {/* <div className="flex flex-col" rollNo="space">
            <label className="NameHead">Name</label>
            <input name="name" className="NameBlank" value={inputs.name} onChange={handleChange} />
            <br></br>
            <br></br>
          </div>
          <div className="flex flex-col">
            <label className="EmailHead">Email</label>
            <input name="email" value={inputs.email} onChange={handleChange} />
            <br></br>
            <br></br>
          </div>
          <div className="flex flex-col">
            <label className="CourseHead">Course</label>
            <input name="email" value={inputs.course} onChange={handleChange} />
            <br></br>
            <br></br>
          </div>
          <div className="flex flex-col">
            <label className="RollHead">Roll No.</label>
            <input name="rollNo" value={inputs.rollNo} onChange={handleChange} />
            <br></br>
            <br></br>
          </div>
          <div className="flex flex-col">
            <label className="MobileHead">Mobile No.</label>
            <input name="phoneNo" value={inputs.phoneNo} onChange={handleChange} />
            <br></br>
            <br></br>
          </div>
          <button type="submit" className="addBtn">
            {editClick ? "Update" : "Add"}
          </button> 
          <div className="flex flex-col" id="space">
            <label className="NameHead">Name</label>
            <input name="name" className="NameBlank" value={inputs.name} onChange={handleChange} />
            <br></br>
            <br></br>
          </div>
          <div className="flex flex-col">
            <label className="EmailHead">Email</label>
            <input name="email" value={inputs.email} onChange={handleChange} />
            <br></br>
            <br></br>
          </div>
          <div className="flex flex-col">
            <label className="RollHead">Roll No.</label>
            <input name="rollNo" value={inputs.rollNo} onChange={handleChange} />
            <br></br>
            <br></br>
          </div>
          <div className="flex flex-col">
            <label className="MobileHead">Mobile No.</label>
            <input name="phoneNo" value={inputs.phoneNo} onChange={handleChange} />
            <br></br>
            <br></br>
          </div>
          <button type="submit" className="addBtn">
            {editClick ? "update" : "Add"}
          </button>
        </form>
        </div> */}

      {/* <div className="container">
        <center>
          <div className="formClass">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col" id="space">
                <label className="NameHead">Name</label>
                <input
                  name="name"
                  className="NameBlank"
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
                />
                <br></br>
                <br></br>
              </div>
              <div className="flex flex-col">
                <label className="CourseHead">Course</label>
                <input
                  name="course"
                  value={inputs.course}
                  onChange={handleChange}
                />
                <br></br>
                <br></br>
              </div>
              <div className="flex flex-col">
                <label className="RollHead">Roll No.</label>
                <input
                  name="rollNo"
                  value={inputs.rollNo}
                  onChange={handleChange}
                />
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
              </div>
              <button type="submit" className="addBtn">
                {editClick ? "update" : "Add"}
              </button>
            </form>
          </div>
        </center>
      </div> */}

      <div className="table-wrapper">
        <Table responsive className="fl-table">
          <thead>
            <tr>
              <th>Roll No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>CGPA</th>
              <th>Phone No.</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {/* {tableData.map((item, i) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.course}</td>
                <td>{item.rollNo}</td>
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
                <td>{entry.rollNo}</td>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.cgpa}</td>
                <td>{entry.phoneNo}</td>
                {/* <td> - </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default StudentListTeacher;
