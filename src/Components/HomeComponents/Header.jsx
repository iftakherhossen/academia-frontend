import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import database from '../../assets/database';

const Header = () => {
     return (
          <>
               <div className="min-h-[75vh] container mx-auto text-white flex justify-start items-center">
                    <div className="w-[45%] ml-8">
                         <p className="text-lg tracking-wide font-bold">WELCOME TO ACADEMIA</p>
                         <h1 className="text-5xl font-bold mt-2 mb-7">Best Education in Town</h1>
                         <p className="text-lg tracking-wide font-semibold">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                         <label htmlFor="admissionForm" className="btn mt-7 text-[1rem] rounded bg-pastel-green border-0 text-white px-8 tracking-wider hover:shadow-lg">Apply in 2023 Session &nbsp; <BsArrowRight className="text-xl" /></label>
                    </div>
               </div>

               <div>
                    <input type="checkbox" id="admissionForm" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                         <div className="modal-box relative bg-white text-black sm:min-w-[800px]">
                              <label htmlFor="admissionForm" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white  text-black border-black hover:text-white">✕</label>
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
                                        <select className="select w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-1.5 capitalize" required>
                                             <option disabled selected>Select Class *</option>
                                             {
                                                  database.classes.map(({ name }) => <option className="font-semibold" defaultValue={name} key={name}>{name}</option>)
                                             }
                                        </select>
                                        <select className="select w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-1.5 capitalize" required>
                                             <option disabled selected>Select Branch *</option>
                                             <option className="fon-semibold" defaultValue="Mirpur">Mirpur (Main Campus)</option>
                                             <option className="fon-semibold" defaultValue="Gulshan">Gulshan</option>
                                             <option className="fon-semibold" defaultValue="Banani">Banani</option>
                                             <option className="fon-semibold" defaultValue="Uttara">Uttara</option>
                                        </select>
                                   </div>
                                   <input type="text" placeholder="Address" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-1.5 capitalize" />
                                   <div className="divider my-0"></div>
                                   <p className="text-lg font-semibold text-center">Appointment Date & Type</p>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div className="tooltip tooltip-top" data-tip="Appointment Date">
                                             <input type="date" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-1.5" required />
                                        </div>
                                        <select className="select w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-1.5 capitalize" required>
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
          </>
     );
};

export default Header;