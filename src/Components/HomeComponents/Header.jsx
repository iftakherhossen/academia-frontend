import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsArrowRight } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';
import database from '../../assets/database';

const Header = () => {
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
          <div>
               <div className="min-h-[75vh] container mx-auto text-white flex justify-start items-center">
                    <div className="w-[45%] ml-8">
                         <p className="text-lg tracking-wide font-bold">WELCOME TO ACADEMIA</p>
                         <h1 className="text-5xl font-bold mt-2 mb-7">
                              <Typewriter
                                   options={{
                                        strings: ['Best School in Town', 'Quality Education', 'Expert Teachers', 'Extra-Curricular Activity'],
                                        pauseFor: 2500,
                                        autoStart: true,
                                        loop: true,
                                   }}
                              />
                         </h1>
                         <p className="text-lg tracking-wide font-semibold">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                         <label htmlFor="admissionForm" className="btn mt-7 text-[1rem] rounded bg-pastel-green border-0 text-white px-8 tracking-wider hover:shadow-lg">Apply in 2023 Session &nbsp; <BsArrowRight className="text-xl" /></label>
                    </div>
               </div>

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

export default Header;