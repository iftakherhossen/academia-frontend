import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const classes = [
     { id: 1, name: "Play", icon: "ri-store-line", color: "#ffbb2c", link: "play" },
     { id: 2, name: "Nursery", icon: "ri-bar-chart-box-line", color: "#5578ff", link: "nursery" },
     { id: 3, name: "Class-One", icon: "ri-calendar-todo-line", color: "#e80368", link: "class-1" },
     { id: 4, name: "Class-Two", icon: "ri-paint-brush-line", color: "#e361ff", link: "class-2" },
     { id: 5, name: "Class-Three", icon: "ri-database-2-line", color: "#47aeff", link: "class-3" },
     { id: 6, name: "Class-Four", icon: "ri-gradienter-line", color: "#ffa76e", link: "class-4" },
     { id: 7, name: "Class-Five", icon: "ri-file-list-3-line", color: "#11dbcf", link: "class-5" },
     { id: 8, name: "Class-Six", icon: "ri-price-tag-2-line", color: "#4233ff", link: "class-6" },
     { id: 9, name: "Class-Seven", icon: "ri-anchor-line", color: "#b2904f", link: "class-7" },
     { id: 10, name: "Class-Eight", icon: "ri-disc-line", color: "#b20969", link: "class-8" },
     { id: 11, name: "Class-Nine", icon: "ri-base-station-line", color: "#ff5828", link: "class-9" },
     { id: 12, name: "Class-Ten", icon: "ri-fingerprint-line", color: "#29cc61", link: "class-10" },
];

const Footer = () => {
     const date = new Date();
     const year = date.getFullYear();

     return (
          <div className="bg-white">
               <footer className="footer container mx-auto p-10 text-black">
                    <div>
                         <img src="https://academiaschool.edu.bd/wp-content/uploads/2022/05/cropped-Academia_Logo99-1.png" alt="Logo" className="w-16" />
                         <h2 className="text-3xl font-bold">Academia</h2>
                         <p className="text-sm font-medium -mt-2">English Medium School</p>
                    </div>
                    <div>
                         <span className="footer-title">School</span>
                         <HashLink to="/home#academic" className="link link-hover">Books</HashLink>
                         <HashLink to="/home#academic" className="link link-hover">Results</HashLink>
                         <Link to="/teachers" className="link link-hover">Teachers</Link>
                         <HashLink to="/home#notices" className="link link-hover">Notices</HashLink>
                    </div>
                    <div>
                         <span className="footer-title">At a Glance</span>
                         <Link to="/job-circular" className="link link-hover">Job Circular</Link>
                         <Link to="/governing-body" className="link link-hover">Governing Body</Link>
                         <label htmlFor="admissionForm" className="link link-hover">Admission Form</label>
                         <HashLink to="/home#events" className="link link-hover">Recent Events</HashLink>
                    </div>
                    <div>
                         <span className="footer-title">Useful Links</span>
                         <a href="http://nctb.gov.bd/" target="_blank" rel="noreferrer" className="link link-hover">NCTB</a>
                         <a href="https://muktopaath.gov.bd/" target="_blank" rel="noreferrer" className="link link-hover">Muktopath</a>
                         <a href="http://www.dpe.gov.bd/" target="_blank" rel="noreferrer" className="link link-hover">DPE</a>
                         <a href="http://www.dshe.gov.bd/" target="_blank" rel="noreferrer" className="link link-hover">DSHE</a>
                    </div>
               </footer>
               <footer className="footer container mx-auto py-10 border-t flex justify-center text-center">
                    <p className="text-base text-slate-400 inline">Copyright ©{year} All rights reserved, <Link to="/" className="font-medium hover:underline">Academia</Link></p>
               </footer>

               <div>
                    <input type="checkbox" id="admissionForm" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                         <div className="modal-box relative bg-white text-black sm:min-w-[800px]">
                              <label htmlFor="admissionForm" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                              <h3 className="text-2xl font-bold pl-1">Admission Form</h3>
                              <form className="pt-4 flex flex-col text-black">
                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <input type="text" placeholder="Full Name *" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-1.5 capitalize" required />
                                        <div className="tooltip tooltip-bottom" data-tip="Date of Birth">
                                             <input type="date" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-1.5" required />
                                        </div>
                                   </div>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <input type="text" placeholder="Fathers Name *" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-1.5 capitalize" required />
                                        <input type="text" placeholder="Mothers Name *" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-1.5 capitalize" required />
                                   </div>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div className="flex justify-start items-center pl-2 my-2">
                                             <span className="font-semibold text-lg">Gender:</span>                                             
                                             <input type="radio" name="gender" className="radio mx-2 checked:bg-white" />
                                             <span className="font-semibold text-lg">Male</span>                                             
                                             <input type="radio" name="gender" className="radio mx-2 checked:bg-white" />
                                             <span className="font-semibold text-lg mr-2">Female</span>
                                        </div>
                                        <div className="flex justify-start items-center pl-2 my-2">
                                             <span className="font-semibold text-lg">Transportation Service:</span>                                             
                                             <input type="radio" name="transportation" className="radio mx-2 checked:bg-white" />
                                             <span className="font-semibold text-lg">Yes</span>
                                             <input type="radio" name="transportation" className="radio mx-2 checked:bg-white" defaultChecked />
                                             <span className="font-semibold text-lg mr-2">No</span>                                             
                                        </div>
                                   </div>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <input type="tel" placeholder="Phone Number *" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-1.5 capitalize" required />
                                        <input type="email" placeholder="Email Address *" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-1.5 capitalize" required />
                                   </div>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <select className="select w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-1.5 capitalize">
                                             <option disabled selected>Select Class</option>
                                             {
                                                  classes.map(({ name }) => <option>{name}</option>)
                                             }
                                        </select>
                                        <select className="select w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-1.5 capitalize">
                                             <option disabled selected>Select Branch</option>
                                             <option>Mirpur (Main Campus)</option>
                                             <option>Gulshan</option>
                                             <option>Banani</option>
                                             <option>Uttara</option>
                                        </select>
                                   </div>
                                   <input type="text" placeholder="Address *" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-1.5 capitalize" required />
                                   <div className="divider my-0"></div>
                                   <p className="text-lg font-semibold text-center">Appointment Date</p>
                                   <div className="tooltip tooltip-top" data-tip="Appointment Date">
                                        <input type="date" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-1.5" required />
                                   </div>
                                   <button type="submit" className="btn w-full mt-2 text-lg bg-pastel-green text-white border-0">Send</button>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Footer;