import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import database from '../../assets/database';
import useAuth from '../../hooks/useAuth';
import Loader from '../Common/Loader';

const AdminRoute = ({ children, ...rest }) => {
     const { user, isLoading } = useAuth();
     const userData = database.users.find(data => data.email === user.email);
     const location = useLocation();

     if (isLoading) <Loader />
     else if (user.email && userData.role === "Admin") return children;
     
     return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;