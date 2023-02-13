import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import database from '../../assets/database';

const Footer = () => {
     const date = new Date();
     const year = date.getFullYear();

     const [formData, setFormData] = useState({});
     const [gender, setGender] = useState("");
     const [transportation, setTransportation] = useState(false);

     const handleOnChange = e => {
          const field = e.target.name;
          const value = e.target.value;
          const newFormData = { ...formData, gender: gender, transportation: transportation };
          newFormData[field] = value;
          setFormData(newFormData);
     }
     const handleRegister = e => {
          e.preventDefault();

          console.log(formData);
          e.target.reset();
          document.getElementById('admissionForm').checked = true;
          toast.success("Account created successfully!")
     }

     return (
          <div className="bg-white select-none">
               <footer className="footer container mx-auto p-10 text-black">
                    <div>
                         <Link to="/"><img src="https://academiaschool.edu.bd/wp-content/uploads/2022/05/cropped-Academia_Logo99-1.png" alt="Logo" className="w-16" draggable={false} /></Link>
                         <Link to="/"><h2 className="text-3xl font-bold">Academia</h2></Link>
                         <p className="text-sm font-medium -mt-2">English Medium School</p>
                    </div>
                    <div>
                         <span className="footer-title">School</span>
                         <HashLink to="/home#academic" className="link link-hover">Books</HashLink>
                         <HashLink to="/forum" className="link link-hover">Forum</HashLink>
                         <Link to="/teachers" className="link link-hover">Teachers</Link>
                         <HashLink to="/home#notices" className="link link-hover">Notices</HashLink>
                    </div>
                    <div>
                         <span className="footer-title">At a Glance</span>
                         <label htmlFor="jobCircular" className="link link-hover">Job Circular</label>
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

               {/* Admission Form Modal */}
               <div>
                    <input type="checkbox" id="admissionForm" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                         <div className="modal-box relative bg-white text-black sm:min-w-[800px]">
                              <label htmlFor="admissionForm" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white  text-black border-black hover:text-white">✕</label>
                              <h3 className="text-2xl font-bold pl-1">Admission Form</h3>
                              <form className="pt-4 flex flex-col text-black" onSubmit={handleRegister}>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <input
                                             type="text"
                                             placeholder="Full Name *"
                                             name="name"
                                             className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 capitalize"
                                             onChange={handleOnChange}
                                             required
                                        />
                                        <div className="tooltip tooltip-bottom" data-tip="Date of Birth">
                                             <input
                                                  type="date"
                                                  name="dob"
                                                  className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0"
                                                  onChange={handleOnChange}
                                                  required
                                             />
                                        </div>
                                        <input
                                             type="text"
                                             placeholder="Fathers Name *"
                                             name="fathersName"
                                             className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 capitalize"
                                             onChange={handleOnChange}
                                             required
                                        />
                                        <input
                                             type="text"
                                             placeholder="Mothers Name *"
                                             name="mothersName"
                                             className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 capitalize"
                                             onChange={handleOnChange}
                                             required
                                        />
                                   </div>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div className="flex justify-start items-center pl-2 mt-2">
                                             <span className="font-semibold text-lg">Gender:</span>
                                             <input
                                                  type="radio"
                                                  name="gender"
                                                  className="radio mx-2 checked:bg-white"
                                                  onChange={() => setGender("Male")}
                                             />
                                             <span className="font-semibold text-lg">Male</span>
                                             <input
                                                  type="radio"
                                                  name="gender"
                                                  className="radio mx-2 checked:bg-white"
                                                  onChange={() => setGender("Female")}
                                             />
                                             <span className="font-semibold text-lg mr-2">Female</span>
                                        </div>
                                        <div className="flex justify-start items-center pl-2 mt-2">
                                             <span className="font-semibold text-lg">Transportation Service:</span>
                                             <input
                                                  type="radio"
                                                  name="transportation"
                                                  className="radio mx-2 checked:bg-white"
                                                  onChange={() => setTransportation(!transportation)}
                                             />
                                             <span className="font-semibold text-lg">Yes</span>
                                             <input
                                                  type="radio"
                                                  name="transportation"
                                                  className="radio mx-2 checked:bg-white"
                                                  defaultChecked
                                                  onChange={() => setTransportation(!transportation)}
                                             />
                                             <span className="font-semibold text-lg mr-2">No</span>
                                        </div>
                                        <input
                                             type="tel"
                                             placeholder="Phone Number *"
                                             name="phone"
                                             className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 capitalize"
                                             onChange={handleOnChange}
                                             required
                                        />
                                        <input
                                             type="email"
                                             placeholder="Email Address *"
                                             name="email"
                                             className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0"
                                             onChange={handleOnChange}
                                             required
                                        />
                                        <select
                                             className="select w-full text-lg font-semibold bg-slate-200 focus:outline-0 capitalize"
                                             required
                                             name="className"
                                             onChange={handleOnChange}
                                        >
                                             <option disabled selected>Select Class *</option>
                                             {
                                                  database.classes.map(({ name, link }) => <option className="font-semibold" value={link} key={name}>{name}</option>)
                                             }
                                        </select>
                                        <select
                                             className="select w-full text-lg font-semibold bg-slate-200 focus:outline-0 capitalize"
                                             required
                                             name="branch"
                                             onChange={handleOnChange}
                                        >
                                             <option disabled selected>Select Branch *</option>
                                             <option className="fon-semibold" value="Mirpur">Mirpur (Main Campus)</option>
                                             <option className="fon-semibold" value="Gulshan">Gulshan</option>
                                             <option className="fon-semibold" value="Banani">Banani</option>
                                             <option className="fon-semibold" value="Uttara">Uttara</option>
                                        </select>
                                   </div>
                                   <input
                                        type="text"
                                        placeholder="Address e.g Mirpur -1, Dhaka"
                                        name="address"
                                        onChange={handleOnChange}
                                        className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 mt-3 mb-1.5 capitalize"
                                   />
                                   <div className="divider my-0"></div>
                                   <p className="text-lg font-semibold text-center">Appointment Date & Type</p>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div className="tooltip tooltip-top" data-tip="Appointment Date">
                                             <input
                                                  type="date"
                                                  name="appointmentDate"
                                                  className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-1.5"
                                                  onChange={handleOnChange}
                                                  required
                                             />
                                        </div>
                                        <select
                                             className="select w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-1.5 capitalize"
                                             required
                                             name="appointmentType"
                                             onChange={handleOnChange}
                                        >
                                             <option disabled selected>Appointment Type</option>
                                             <option className="font-semibold" defaultValue="Offline">Offline</option>
                                             <option className="font-semibold" defaultValue="Online">Online</option>
                                        </select>
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