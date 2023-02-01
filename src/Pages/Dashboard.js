import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { Link, Outlet } from 'react-router-dom';

const dashboardItems = [
     {title: "Manage Notices"},
     {title: "Manage Testimonials"},
     {title: "Manage Events"},
     {title: "Manage Academic Info"},
     {title: "Manage Stuffs"},
     {title: "Manage Admission Forms"}
];

const Dashboard = () => {
     return (
          <div className="drawer drawer-mobile">
               <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
               <div className="drawer-content">
                    <div className="bg-base-100 py-2 lg:py-0 flex justify-between items-center px-5 lg:px-0">
                         <h2 className="text-2xl font-bold lg:hidden">Dashboard</h2>
                         <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden text-2xl"><FiMenu /></label>
                    </div>
                    <div>
                         <Outlet />
                    </div>
               </div> 
               <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                         <li className="text-lg font-semibold mb-5">
                              <Link to="/"><AiFillHome /> Back to Home</Link>
                         </li>
                         {
                              dashboardItems.map(({ title }) => <li className="text-lg font-semibold">
                                   <Link to={`/dashboard/${title.replace(/\s+/g, '-').toLowerCase()}`}>{title}</Link>
                              </li>)
                         }
                    </ul>               
               </div>
          </div>
     );
};

export default Dashboard;