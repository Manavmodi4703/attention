import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/header';
import { useState } from 'react';
import Login from './component/login';
import Student from './component/student';
import Faculty from './component/faculty';
import AttendanceSheet from './component/attendanceSheet';

function App() {

    const [loggedInUser, setLoggedInUser] = useState({role : 'faculty'})

  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route
            path="/"
            element = {
              loggedInUser
              ? (loggedInUser.role.toLowerCase() === 'student' ? <Student /> : <Faculty />)
              : <Login setLoggedInUser={setLoggedInUser} />
            }
            /> 
          <Route path='/attendanceSheet' element={<AttendanceSheet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
