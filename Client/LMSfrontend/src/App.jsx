
import { Route, Routes } from 'react-router-dom';

// import Footer from './Components/Footer'
import Learn from './Layouts/Learn'
import AboutUs from './Pages/AboutUs'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import CourseList from './Pages/Course/CourseList';
import CourseDescription from './Pages/Course/CourseDescription';
import Contact from './Pages/Contact';
import Denied from './Pages/Denied';
import CreateCourse from './Pages/Course/CreateCourse';
import RequireAuth from './Components/Auth/RequireAuth';
import Profile from './Pages/User/Profile';
import EditProfile from './Pages/User/EditPofile';


function App() {

  return (
    <>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/denied" element={<Denied />} />
    
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/courses" element={<CourseList />} />
    <Route path="/course/description" element={<CourseDescription />} />

    {/* Protected Route for ADMIN */}
    <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
      <Route path="/course/create" element={<CreateCourse />} />
    </Route>

    <Route element={<RequireAuth allowedRoles={["ADMIN","USER"]} />}>
    <Route path='/user/profile' element={<Profile />} />
    <Route path='/user/editprofile' element={<EditProfile/>} />

    </Route>

    {/* Catch-all 404 route */}
    <Route path="*" element={<NotFound />} />
  </Routes>
</>
   
  )
}

export default App
