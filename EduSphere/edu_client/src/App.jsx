
import { Route, Routes } from 'react-router-dom';

// import Footer from './Components/Footer'
import Learn from './Layouts/Learn'
import AboutUs from './Pages/AboutUs'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import CourseList from './Pages/Course/CourseList';
import AddLecture from './Pages/Dashboard/AddLecture';
import CourseDescription from './Pages/Course/CourseDescription';
import Contact from './Pages/Contact';
import Denied from './Pages/Denied';
import CreateCourse from './Pages/Course/CreateCourse';
import AdminDashboard from './Pages/Dashboard/AdminDashboard';
import RequireAuth from './Components/Auth/RequireAuth';
import Profile from './Pages/User/Profile';
import EditProfile from './Pages/User/EditPofile';
import Checkout from './Pages/Payment/Checkout';
import CheckoutFailure from './Pages/Payment/CheckoutFailure';
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess';
import DisplayLectures from './Pages/Dashboard/DisplayLectures';


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
      <Route path="/course/addlecture" element={<AddLecture />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />

    </Route>

    <Route element={<RequireAuth allowedRoles={["ADMIN","USER"]} />}>
    <Route path='/user/profile' element={<Profile />} />
    <Route path='/user/editprofile' element={<EditProfile/>} />
    <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/success" element={<CheckoutSuccess />} />
        <Route path="/checkout/fail" element={<CheckoutFailure />} />
        <Route path="/course/displaylectures" element={<DisplayLectures />} />


    </Route>

    {/* Catch-all 404 route */}
    <Route path="*" element={<NotFound />} />
  </Routes>
</>
   
  )
}

export default App
