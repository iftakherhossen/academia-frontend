import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Loader from './Components/Common/Loader';
import ScrollToTop from './Components/Common/ScrollToTop';
import ManageAcademicInfo from './Components/DashboardComponents/ManageAcademicInfo';
import ManageAdmissionForms from './Components/DashboardComponents/ManageAdmissionForms';
import ManageEvents from './Components/DashboardComponents/ManageEvents';
import ManageNotices from './Components/DashboardComponents/ManageNotices';
import ManageStuffs from './Components/DashboardComponents/ManageStuffs';
import ManageTestimonial from './Components/DashboardComponents/ManageTestimonial';
import WelcomeBoard from './Components/DashboardComponents/WelcomeBoard';
import AboutUs from './Pages/AboutUs';
import Class from './Pages/Class';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Journals from './Pages/Journals';
import NotFound from './Pages/NotFound';
import Stuffs from './Pages/Stuffs';

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
   }, []);

    return (
        <div>
            {
                loading ? <Loader /> : <Router>
                    <ScrollToTop>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/academic/:class" element={<Class />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/governing-body" element={<Stuffs />} />
                        <Route path="/teachers" element={<Stuffs />} />
                        <Route path="/stuffs" element={<Stuffs />} />
                        <Route path="/journals" element={<Journals />} />
                        <Route path="/dashboard" exact element={<Dashboard />}>
                            <Route index element={<WelcomeBoard />} />
                            <Route path="manage-academic-info" element={<ManageAcademicInfo />} />
                            <Route path="manage-notices" element={<ManageNotices />} />
                            <Route path="manage-testimonials" element={<ManageTestimonial />} />
                            <Route path="manage-events" element={<ManageEvents />} />
                            <Route path="manage-stuffs" element={<ManageStuffs />} />
                            <Route path="manage-admission-forms" element={<ManageAdmissionForms />} />
                        </Route>
                        <Route path="*" element={<NotFound />} /> 
                    </Routes>                    
                    </ScrollToTop>
                </Router>
            }
        </div>
    );
};

export default App;