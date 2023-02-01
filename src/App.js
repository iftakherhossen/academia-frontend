import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Loader from './Components/Common/Loader';
import ScrollToTop from './Components/Common/ScrollToTop';
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