import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Loader from '../Common/Loader';

const PrivateRoute = ({ children, ...rest }) => {
     const { user, isLoading } = useAuth();
     let location = useLocation();

     if (isLoading) return <Loader />
     else if (user.email) return children;
     document.getElementById('admin-login').checked = true;
     document.getElementById('teacher-login').checked = true;
     document.getElementById('student-login').checked = true;

     return <Navigate to="/" state={{ from: location }} />;
};

export default PrivateRoute;