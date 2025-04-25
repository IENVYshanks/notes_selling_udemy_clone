import Footer from "./Components/Footer";
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Home"
import Nav from './Components/Nav'
import '@mantine/core/styles.css';
import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import { Courses } from "./Pages/Instructor/Courses.jsx";
import { Course1 } from "./Pages/Instructor/Create/Course1.jsx";
import { Course2 } from "./Pages/Instructor/Create/Course2.jsx";
import { Course3 } from "./Pages/Instructor/Create/Course3.jsx";

import { Course4 } from "./Pages/Instructor/Create/course4.jsx";
import {Upload} from "./Pages/Instructor/Create/Upload.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";


function App() {
  const isNavbarVisible = ['/Cart', '/Login', '/SignUp', '/'];

  return (
    <>
      <AuthProvider>
        {isNavbarVisible.includes(window.location.pathname) && <Nav />}
        <Routes>


          <Route path="/" element={<Home />} />
          <Route path="/Components/Cart" element={<Cart />} />
          <Route path="/Pages/Signup" element={<SignUp />} />
          <Route path="/Pages/Login" element={<Login />} />
          <Route path="Pages/Instructor/Courses" element={<Courses />} />

          <Route path="Pages/Instructor/Courses" element={<Courses />} />
          <Route path="/Components/Cart" element={<Cart />} />
          <Route path="/Pages/Signup" element={<SignUp />} />
          <Route path="/Pages/Login" element={<Login />} />
          <Route path="/Pages/Instructor/Courses/Create/Course1" element={<Course1 />} />
          <Route path="/Pages/Instructor/Courses/Create/Course2" element={<Course2 />} />
          <Route path="/Pages/Instructor/Courses/Create/Course3" element={<Course3 />} />
          <Route path="/Pages/Instructor/Courses/Create/Course4" element={<Course4 />} />
          <Route path="/Pages/Instructor/Courses/Create/Upload" element={<Upload />} />

        </Routes>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
