
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


function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/about" element={<AboutUs />} ></Route>

        <Route path="/signup" element={<Signup />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path='/courses' element={<CourseList />} />
        <Route path='/course/description' element={<CourseDescription />} />



        <Route path="*" element={<NotFound />} ></Route>
       
      </Routes>
    
    
    </>
   
  )
}

export default App
