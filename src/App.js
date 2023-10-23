import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from './pages/Admin/Home';
import Teachers from './pages/Admin/Teachers';
import StudentHome from './pages/Student/StudentHome';
import Attendndance from './pages/Student/Attendndance';
import StudentsAdmin from './pages/Admin/StudentsAdmin';
import TeacherHome from './pages/Teacher/TeacherHome';
import TimeTable from './pages/Student/TimeTable';
import FacultyNames from './pages/Student/FacultyName';
import Students from './pages/Teacher/Students';
import Filter from './pages/Teacher/Filter';
import Login from './pages/login';
import Register from './pages/register';
import StudentProfile from './pages/Student/StudentProfile';
import TeacherProfile from './pages/Teacher/TeacherProfile';
import Uploads from './pages/Admin/Uploads';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' exact element ={<Login/>}></Route>
      <Route path='/Register' exact element ={<Register/>}></Route>
        <Route path='/Login' exact element ={<Home/>}></Route>
        <Route path='/Teachers' exact element ={<Teachers/>}></Route>
        <Route path='/StudentsAdmin' exact element ={<StudentsAdmin/>}></Route>
        <Route path='/Uploads' exact element ={<Uploads/>}></Route>
        <Route path='/StudentHome' exact element ={<StudentHome/>}></Route>
        <Route path='/FacultyName' exact element ={<FacultyNames/>}></Route>
        <Route path='/TimeTable' exact element ={<TimeTable/>}></Route>
        <Route path='/Attendndance' exact element ={<Attendndance/>}></Route>
        <Route path='/TeacherHome' exact element ={<TeacherHome/>}></Route>
        <Route path='/Students' exact element ={<Students/>}></Route>
        <Route path='/Filter' exact element ={<Filter/>}></Route>
        <Route path='/StudentProfile' exact element ={<StudentProfile/>}></Route>
        <Route path='/TeacherProfile' exact element ={<TeacherProfile/>}></Route>
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
