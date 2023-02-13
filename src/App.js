import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Loader from './Components/Common/Loader';
import ScrollToTop from './Components/Common/ScrollToTop';
import CreateAccount from './Components/DashboardComponents/CreateAccount';
import ManageAcademicInfo from './Components/DashboardComponents/ManageAcademicInfo';
import ManageAdmissionForms from './Components/DashboardComponents/ManageAdmissionForms';
import ManageEvents from './Components/DashboardComponents/ManageEvents';
import ManageNotices from './Components/DashboardComponents/ManageNotices';
import ManageStuffs from './Components/DashboardComponents/ManageStuffs';
import ManageTestimonial from './Components/DashboardComponents/ManageTestimonial';
import WelcomeBoard from './Components/DashboardComponents/WelcomeBoard';
import AuthProvider from './context/AuthProvider/AuthProvider';
import AboutUs from './Pages/AboutUs';
import Class from './Pages/Class';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Journals from './Pages/Journals';
import NotFound from './Pages/NotFound';
import Stuffs from './Pages/Stuffs';
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Common/Footer';
import Gallery from './Pages/Gallery';
import AdminRoute from './Components/Authentication/AdminRoute';
import Forum from './Pages/Forum';
import PrivateRoute from './Components/Authentication/PrivateRoute';

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
   }, []);

    return (
        <AuthProvider>
            {
                loading ? <Loader /> : <Router>
                    <ScrollToTop>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/academic/:class" element={<Class />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/about-us" element={<AboutUs />} />                        
                        <Route path="/governing-body" element={<Stuffs />} />
                        <Route path="/teachers" element={<Stuffs />} />
                        <Route path="/stuffs" element={<Stuffs />} />
                        <Route path="/journals" element={<Journals />} />
                        <Route path="/forum" element={<PrivateRoute><Forum /></PrivateRoute>} />
                        <Route path="/dashboard" exact element={<AdminRoute><Dashboard /></AdminRoute>}>
                            <Route index element={<AdminRoute><WelcomeBoard /></AdminRoute>} />
                            <Route path="manage-academic-info" element={<AdminRoute><ManageAcademicInfo /></AdminRoute>} />
                            <Route path="manage-notices" element={<AdminRoute><ManageNotices /></AdminRoute>} />
                            <Route path="manage-testimonials" element={<AdminRoute><ManageTestimonial /></AdminRoute>} />
                            <Route path="manage-events" element={<AdminRoute><ManageEvents /></AdminRoute>} />
                            <Route path="manage-stuffs" element={<AdminRoute><ManageStuffs /></AdminRoute>} />
                            <Route path="manage-admission-forms" element={<AdminRoute><ManageAdmissionForms /></AdminRoute>} />
                            <Route path="create-account" element={<AdminRoute><CreateAccount /></AdminRoute>} />
                        </Route>
                        <Route path="*" element={<NotFound />} /> 
                    </Routes>                    
                    </ScrollToTop>
                    <Footer />
                </Router>                
            }
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </AuthProvider>
    );
};

export default App;