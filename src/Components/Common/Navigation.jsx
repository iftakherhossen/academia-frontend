import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import database from '../../assets/database';
import useAuth from '../../hooks/useAuth';

const Navigation = ({ home }) => {
     const { user, loginUser, logOut } = useAuth();
     const userData = database.users.find(data => data.email === user.email);
     const [loginData, setLoginData] = useState();     

     const splitString = userData ? userData.name.split(' ') : "Not Found";
     let lastName = splitString[splitString.length - 1];

     const handleOnBlur = e => {
          const field = e.target.name;
          const value = e.target.value;
          const newLoginData = { ...loginData };
          newLoginData[field] = value;
          setLoginData(newLoginData);
     }

     const handleLogin = (e) => {
          e.preventDefault();
          
          loginUser(loginData.email, loginData.password)
     }

     return (
          <div className={`${home !== true && 'bg-[#1EB2A6] shadow sticky top-0 z-20'}`}>
               <div className={`container mx-auto navbar ${home === true ? 'bg-[#f8f8f818] text-[#1EB2A6] shadow-sm rounded-lg' : 'bg-[#1EB2A6] text-white'}`}>
                    <div className="navbar-start md:w-[80%] hidden md:flex">
                         <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                   <li><Link to="/">Home</Link></li>
                                   <li><HashLink to="/home#academic">Academic</HashLink></li>
                                   <li tabIndex={0}>
                                        <a>
                                             Stuffs
                                             <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul className="p-2 bg-white mt-3">
                                             <li><Link to="/governing-body">Governing Body</Link></li>
                                             <li><Link to="/teachers">Teachers</Link></li>
                                             <li><Link to="/stuffs">Stuffs</Link></li>
                                        </ul>
                                   </li>
                                   <li><HashLink to="/home#notices">Notices</HashLink></li>
                                   <li><Link to="/journals">Journals</Link></li>
                                   <li><HashLink to="/home#events">Events</HashLink></li>
                                   <li><Link to="about-us">About Us</Link></li>
                                   <li><label htmlFor="contact">Contact</label></li>
                                   <li tabIndex={0}>
                                        <a>
                                             Get Started
                                             <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul className="p-2 bg-white right-0 mt-3">
                                             <li><label htmlFor="admin-login">Login as Admin</label></li>
                                             <li><label htmlFor="teacher-login">Login as Teacher</label></li>
                                             <li><label htmlFor="student-login">Login as Student</label></li>
                                        </ul>
                                   </li>
                              </ul>
                         </div>
                         <ul className="menu menu-horizontal px-1 font-bold text-lg">
                              <li><Link to="/">Home</Link></li>
                              <li><HashLink to="/home#academic">Academic</HashLink></li>
                              <li tabIndex={0}>
                                   <a>
                                        Stuffs
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                   </a>
                                   <ul className="menu menu-compact dropdown-content mt-4 shadow rounded-xl w-52 bg-white text-[#1EB2A6] font-semibold">
                                        <li><Link to="/governing-body" className="text-base">Governing Body</Link></li>
                                        <li><Link to="/teachers" className="text-base">Teachers</Link></li>
                                        <li><Link to="/stuffs" className="text-base">Stuffs</Link></li>
                                   </ul>
                              </li>
                              <li><HashLink to="/home#notices">Notices</HashLink></li>
                              <li><Link to="/journals">Journals</Link></li>
                              <li><HashLink to="/home#events">Events</HashLink></li>
                              <li><Link to="/about-us">About Us</Link></li>
                              <li><label htmlFor="contact">Contact</label></li>
                         </ul>
                    </div>
                    <div className="md:navbar-end md:w-[20%]">
                         {
                              user.email ? <div className="dropdown dropdown-end tooltip tooltip-bottom" data-tip={userData.name}>
                                   <label tabIndex={0} className={`btn btn-ghost btn-circle avatar placeholder border-2 ${userData.role === 'Admin' && 'border-red-500'} ${userData.role === 'Teacher' && 'border-green-500'} ${userData.role === 'Student' && 'border-yellow-500'}`}>
                                        <div className="bg-white text-pastel-green rounded-full w-24">
                                             <span className="text-2xl">{userData.name.charAt(0)}</span>
                                        </div>
                                   </label>
                                   <ul tabIndex={0} className="menu menu-compact dropdown-content mt-4 shadow rounded-xl w-52 bg-white text-[#1EB2A6] font-semibold">
                                        <li><label htmlFor="profile-modal" className="text-base">Profile</label></li>
                                        {/* <li><Link to="/forum" className="text-base">Forum</Link></li> */}
                                        {userData.role === "Admin" && <li><Link to="/dashboard" className="text-base">Dashboard</Link></li>}
                                        <li><span className="text-base" onClick={logOut}>Logout</span></li>
                                   </ul>
                              </div> : <ul className="menu menu-horizontal px-1 font-bold text-lg">
                                   <li tabIndex={0}>
                                        <a>
                                             Get Started
                                             <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul className="p-2 bg-white right-0 mt-3">
                                             <li><label htmlFor="admin-login">Login as Admin</label></li>
                                             <li><label htmlFor="teacher-login">Login as Teacher</label></li>
                                             <li><label htmlFor="student-login">Login as Student</label></li>
                                        </ul>
                                   </li>
                              </ul>
                         }
                    </div>
               </div>

               {/* Contact Modal */}
               <div>
                    <input type="checkbox" id="contact" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                         <div className="modal-box relative bg-white text-black">
                              <label htmlFor="contact" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white  text-black border-black hover:text-white">???</label>
                              <h3 className="text-[1.7rem] font-bold pl-1">Contact</h3>
                              <div className="pt-4">
                                   <form className="flex flex-col justify-center items-center text-black">
                                        <input type="text" placeholder="Type Name *" className="input w-full text-base font-semibold bg-slate-200 focus:outline-0 my-1.5 capitalize" required />
                                        <input type="text" placeholder="Type Subject *" className="input w-full text-base font-semibold bg-slate-200 focus:outline-0 my-1.5" required />
                                        <input type="email" placeholder="Type Email *" className="input w-full text-base font-semibold bg-slate-200 focus:outline-0 my-1.5" required />
                                        <textarea type="text" placeholder="Type Message *" className="textarea w-full text-base font-semibold bg-slate-200 focus:outline-0 my-2 capitalize resize-none h-36" required></textarea>
                                        <button type="submit" className="btn w-full mt-2 text-base bg-pastel-green text-white border-0">Send</button>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Admin Login Modal */}
               <div>
                    <input type="checkbox" id="admin-login" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                         <div className="modal-box relative bg-white text-black">
                              <label htmlFor="admin-login" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white text-black border-black hover:text-white">???</label>
                              <h3 className="text-2xl font-bold pl-1">Welcome, Admin</h3>
                              <form className="pt-4 pb-0" onSubmit={handleLogin}>
                                   <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email here"
                                        className="input input-bordered focus:outline-0 w-full bg-white text-lg font-medium my-2"
                                        required
                                        onBlur={handleOnBlur}
                                   />
                                   <input
                                        type="password"
                                        placeholder="Enter Password here"
                                        name="password"
                                        className="input input-bordered focus:outline-0 w-full bg-white text-lg font-medium my-2"
                                        min={6}
                                        required
                                        onBlur={handleOnBlur}
                                   />
                                   <button className="btn mt-4 w-full bg-pastel-green border-0 text-white text-lg">Login</button>
                              </form>
                         </div>
                    </div>
               </div>

               {/* Teacher Login Modal */}
               <div>
                    <input type="checkbox" id="teacher-login" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                         <div className="modal-box relative bg-white text-black">
                              <label htmlFor="teacher-login" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white text-black border-black hover:text-white">???</label>
                              <h3 className="text-2xl font-bold pl-1">Welcome, Teacher</h3>
                              <form className="pt-4 pb-0" onSubmit={handleLogin}>
                                   <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email here"
                                        className="input input-bordered focus:outline-0 w-full bg-white text-lg font-medium my-2"
                                        required
                                        onBlur={handleOnBlur}
                                   />
                                   <input
                                        type="password"
                                        placeholder="Enter Password here"
                                        name="password"
                                        className="input input-bordered focus:outline-0 w-full bg-white text-lg font-medium my-2"
                                        min={6}
                                        required
                                        onBlur={handleOnBlur}
                                   />
                                   <p className="text-sm text-slate-400 pl-1.5 font-medium">N.B. If you don't have any account, consult with your admin panel.</p>
                                   <button className="btn mt-6 w-full bg-pastel-green border-0 text-white text-lg">Login</button>
                              </form>
                         </div>
                    </div>
               </div>

               {/* Student Login Modal */}
               <div>
                    <input type="checkbox" id="student-login" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                         <div className="modal-box relative bg-white text-black">
                              <label htmlFor="student-login" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white text-black border-black hover:text-white">???</label>
                              <h3 className="text-2xl font-bold pl-1">Welcome, Student</h3>
                              <form className="pt-4 pb-0" onSubmit={handleLogin}>
                                   <input
                                        type="email"
                                        placeholder="Enter Email here"
                                        name="email"
                                        className="input input-bordered focus:outline-0 w-full bg-white text-lg font-medium my-2"
                                        required
                                        onBlur={handleOnBlur}
                                   />
                                   <input
                                        type="password"
                                        placeholder="Enter Password here"
                                        name="password"
                                        className="input input-bordered focus:outline-0 w-full bg-white text-lg font-medium my-2"
                                        min={6}
                                        required
                                        onBlur={handleOnBlur}
                                   />
                                   <p className="text-sm text-slate-400 pl-1.5 font-medium">N.B. If you don't have any account, consult with your teacher.</p>
                                   <button className="btn mt-6 w-full bg-pastel-green border-0 text-white text-lg">Login</button>
                              </form>
                         </div>
                    </div>
               </div>

               {/* Profile Modal */}
               <div>
                    <input type="checkbox" id="profile-modal" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                         <div className="modal-box relative bg-white text-black">
                              <label htmlFor="profile-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white  text-black border-black hover:text-white">???</label>
                              <h3 className="text-2xl font-medium pl-1">Welcome, Mr. <span className="font-semibold text-[#1EB2A6]">{lastName}</span></h3>
                              <div className="mt-4 px-2 mb-0 overflow-x-auto">
                                   <table className="table w-full">
                                        <tr>
                                             <th className="profileTableHeading"><span>Name</span> <span className="select-none">:</span></th>
                                             <td className="profileTableData">{userData?.name}</td>
                                        </tr>
                                        <tr>
                                             <th className="profileTableHeading"><span>Email</span> <span className="select-none">:</span></th>
                                             <td className="profileTableData">{userData?.email}</td>
                                        </tr>
                                        <tr>
                                             <th className="profileTableHeading"><span>Role</span> <span className="select-none">:</span></th>
                                             <td className="profileTableData">{userData?.role}</td>
                                        </tr>
                                        {
                                             userData?.classNo && <tr>
                                                  <th className="profileTableHeading"><span>Class</span> <span>:</span></th>
                                                  <td className="profileTableData">{userData?.classNo}</td>
                                             </tr>
                                        }
                                   </table>
                                   {
                                        userData?.classNo && <div className="flex justify-center mt-5">
                                             <Link to={`/academic/${userData?.classNo}`}><button className="btn btn-sm text-white bg-pastel-green border-0">View Full Record</button></Link>
                                        </div>
                                   }
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Navigation;