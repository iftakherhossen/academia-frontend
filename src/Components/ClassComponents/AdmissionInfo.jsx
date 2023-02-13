import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import database from '../../assets/database';

const AdmissionInfo = ({ classNo }) => {
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
          <div className="container mx-auto">
               <div className="mt-4">
                    <h2 className="text-3xl font-bold text-center text-black">Tuition Fees</h2>
                    <div className="overflow-x-auto">
                         <table className="w-full mt-5 mb-10 text-black text-lg">
                              <tr>
                                   {
                                        database.admissionInfoColumnData.map(title =>
                                             <th key={title} className="p-2.5 text-center font-bold">{title}</th>
                                        )
                                   }
                              </tr>
                              {
                                   database.tuitionFeesData.map(({ className, admissionFee, cautionMoney, yearBook, idCard, tuitionFee }) => className.toLowerCase() === classNo && <tr key={className} className="font-medium">
                                        <td className="p-2.5 text-center capitalize font-semibold">{className}</td>
                                        <td className="p-2.5 text-center">{admissionFee} ৳</td>
                                        <td className="p-2.5 text-center">{cautionMoney} ৳</td>
                                        <td className="p-2.5 text-center">{yearBook} ৳</td>
                                        <td className="p-2.5 text-center">{idCard} ৳</td>
                                        <td className="p-2.5 text-center">{tuitionFee} ৳</td>
                                        <td className="p-2.5 text-center">{admissionFee + cautionMoney + yearBook + idCard + tuitionFee} ৳</td>
                                   </tr>)
                              }
                         </table>
                    </div>
                    <div>
                         <h3 className="text-black text-xl font-semibold mb-2">Miscellaneous Fee Payable every year at a time.</h3>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
                              <div className="col-span-2">
                                   <h4 className="text-lg font-medium underline mb-1">You are requested to pay your child’s advance Tuition fees within 15th of each month  </h4>
                                   <ul className="list-disc pl-8">
                                        <li>Otherwise* Late fee: Per month <b>@Tk. 200</b> (Two Hundred Tk)</li>
                                        <li>Next calendar month <b>@Tk. 500</b> (Five Hundred taka) for each month</li>
                                        <li>Dishonoured cheque fine <b>@Tk.1000</b> (One Thousand Tk)</li>
                                        <li>Monthly Tuition fees & Transport charge are payable two month at a time in advance</li>
                                        <li>Scholarship is available for extraordinary Students of Class XI and XII</li>
                                   </ul>
                              </div>
                              <div>
                                   <h4 className="text-lg font-medium underline mb-1">Transport Charge</h4>
                                   <ul className="list-disc pl-8">
                                        <li>Up to 2 km. Tk. 4500 (monthly)</li>
                                        <li>Above 2 km. Tk. 5500 (monthly)</li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="flex justify-center items-center mt-16">
                    <label htmlFor="admissionForm" className="btn btn-wide bg-pastel-green text-white border-0 text-lg shadow-sm hover:shadow-lg">Admission Form</label>
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

export default AdmissionInfo;