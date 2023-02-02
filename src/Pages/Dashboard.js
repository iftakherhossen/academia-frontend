import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, Outlet } from 'react-router-dom';

const dashboardItems = [
     { title: "Dashboard Home" },
     { title: "Manage Academic Info" },
     { title: "Manage Notices" },
     { title: "Manage Testimonials" },
     { title: "Manage Events" },     
     { title: "Manage Stuffs" },
     { title: "Manage Admission Forms" }
];

const Dashboard = () => {
     return (
          <div className="drawer drawer-mobile">
               <input id="side-bar" type="checkbox" className="drawer-toggle" />
               <div className="drawer-content">
                    <div className="bg-pastel-green py-2 lg:py-0 flex justify-between items-center px-5 lg:px-0">
                         <h2 className="text-2xl font-bold lg:hidden text-white">Dashboard</h2>
                         <label htmlFor="side-bar" className="btn drawer-button lg:hidden text-2xl bg-white focus:bg-white active:bg-white focus-visible:bg-white text-pastel-green border-0">
                              <GiHamburgerMenu />
                         </label>
                    </div>
                    <main className="w-full">
                         <Outlet />
                    </main>
               </div> 
               <div className="drawer-side">
                    <label htmlFor="side-bar" className="drawer-overlay"></label> 
                    <ul className="menu p-3 w-[21rem] bg-pastel-green text-white" id="side-bar">
                         <li className="text-xl font-semibold mb-5" onClick={() => {document.getElementById('side-bar').click()}}>
                              <Link to="/"><AiFillHome /> Back to Home</Link>
                         </li>
                         {
                              dashboardItems.map(({ title }) => <li className="text-xl font-semibold" onClick={() => {document.getElementById('side-bar').click()}}>
                                   <Link to={title === "Dashboard Home" ? "/dashboard" : `/dashboard/${title.replace(/\s+/g, '-').toLowerCase()}`}>{title}</Link>
                              </li>)
                         }
                    </ul>               
               </div>
          </div>
     );
};

export default Dashboard;