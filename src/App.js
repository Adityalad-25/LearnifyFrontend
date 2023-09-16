import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Payments/Subscribe';
import NotFound from './components/Layout/NotFound';
import PayementSuccess from './components/Payments/PayementSuccess';
import PaymentFail from './components/Payments/PaymentFail';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import Users from './components/Admin/Users/Users';

function App() {
  // to prevent user from inspecting the webpage so no video gets downloaded until user purchases it

  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/course/:id" element={<CoursePage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/request" element={<Request />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/changepassword" element={<ChangePassword />}></Route>
        <Route path={'/updateprofile'} element={<UpdateProfile />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
        <Route path="/resetpassword/:token" element={<ResetPassword />}></Route>
        <Route path="/subscribe" element={<Subscribe />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/paymentsuccess" element={<PayementSuccess />}></Route>
        <Route path="/paymentfail" element={<PaymentFail />}></Route>

        {/* Admin Routes  */}
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/createcourse" element={<CreateCourse />}></Route>
        <Route path="/admin/courses" element={<AdminCourses />}></Route>
        <Route path="/admin/users" element={<Users />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
