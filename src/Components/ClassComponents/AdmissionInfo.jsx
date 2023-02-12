import React from 'react';
import database from '../../assets/database';

const AdmissionInfo = ({ classNo }) => {
     const others = 15000 + 5000 + 400 + 100;
     const tuitionCost = database.tuitionFeeData.find(data => data.class.toLowerCase() === classNo);
     const total = others + tuitionCost.tuitionFee;

     return (
          <div className="container mx-auto">
               <div className="mt-4">
                    <h2 className="text-3xl font-bold text-center text-black">Tuition Fees</h2>
                    <table className="w-full mt-5 mb-10 text-black text-lg">
                         <tr>
                              {
                                   database.admissionInfoColumnData.map(title =>
                                        <th key={title} className="p-2.5 text-center font-bold">{title}</th>
                                   )
                              }
                         </tr>
                         {
                              database.admissionInfoData.map((data, index) => <tr key={index} className="font-medium">
                                   <td className="p-2.5 text-center capitalize font-semibold">{classNo}</td>
                                   <td className="p-2.5 text-center">{data.admissionFee} ৳</td>
                                   <td className="p-2.5 text-center">{data.cautionMoney} ৳</td>
                                   <td className="p-2.5 text-center">{data.yearBook} ৳</td>
                                   <td className="p-2.5 text-center">{data.idCard} ৳</td>
                                   {
                                        database.tuitionFeeData?.map(data => data.class.toLowerCase() === classNo && <td className="p-2.5 text-center">
                                             {data.tuitionFee} ৳
                                        </td>)
                                   }
                                   <td className="p-2.5 text-center">{total} ৳</td>
                              </tr>)
                         }
                    </table>
                    <div>
                         <h3 className="text-black text-xl font-semibold mb-2">Miscellaneous Fee Payable every year at a time.</h3>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
                              <div className="col-span-2">
                                   <h4 className="text-lg font-medium underline mb-1">You are requested to pay your child’s advance Tuition fees within 15th of each month  </h4>
                                   <ul className="list-disc pl-8">
                                        <li>Otherwise* Late fee: Per month Tk. 200 (Two Hundred)</li>
                                        <li>Next calendar month @Tk. 500 (Five Hundred) for each month</li>
                                        <li>Dishonoured cheque fine @ Tk.1000 (One thousand)</li>
                                        <li>Monthly Tuition fees & Transport charge are payable two month at a time in advance</li>
                                        <li>Scholarship is available for extraordinary Students of Class XI and XII</li>
                                   </ul>
                              </div>
                              <div>
                                   <h4 className="text-lg font-medium underline mb-1">Transport Charge</h4>
                                   <ul className="list-disc pl-8">
                                        <li>Up to 2 km. Tk. 4500 (monthly)</li>
                                        <li>Above 2km. Tk. 5500 (monthly)</li>
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
                              <form className="pt-4 flex flex-col text-black">
                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <input type="text" placeholder="Full Name *" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 capitalize" required />
                                        <div className="tooltip tooltip-bottom" data-tip="Date of Birth">
                                             <input type="date" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0" required />
                                        </div>
                                        <input type="text" placeholder="Fathers Name *" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 capitalize" required />
                                        <input type="text" placeholder="Mothers Name *" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 capitalize" required />
                                   </div>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div className="flex justify-start items-center pl-2 mt-2">
                                             <span className="font-semibold text-lg">Gender:</span>
                                             <input type="radio" name="gender" className="radio mx-2 checked:bg-white" />
                                             <span className="font-semibold text-lg">Male</span>
                                             <input type="radio" name="gender" className="radio mx-2 checked:bg-white" />
                                             <span className="font-semibold text-lg mr-2">Female</span>
                                        </div>
                                        <div className="flex justify-start items-center pl-2 mt-2">
                                             <span className="font-semibold text-lg">Transportation Service:</span>
                                             <input type="radio" name="transportation" className="radio mx-2 checked:bg-white" />
                                             <span className="font-semibold text-lg">Yes</span>
                                             <input type="radio" name="transportation" className="radio mx-2 checked:bg-white" defaultChecked />
                                             <span className="font-semibold text-lg mr-2">No</span>
                                        </div>
                                        <input type="tel" placeholder="Phone Number *" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 capitalize" required />
                                        <input type="email" placeholder="Email Address *" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 capitalize" required />
                                        <select className="select w-full text-lg font-semibold bg-slate-200 focus:outline-0 capitalize" required>
                                             <option disabled selected>Select Class *</option>
                                             {
                                                  database.classes.map(({ name }) => <option className="font-semibold" defaultValue={name} key={name}>{name}</option>)
                                             }
                                        </select>
                                        <select className="select w-full text-lg font-semibold bg-slate-200 focus:outline-0 capitalize" required>
                                             <option disabled selected>Select Branch *</option>
                                             <option className="fon-semibold" defaultValue="Mirpur">Mirpur (Main Campus)</option>
                                             <option className="fon-semibold" defaultValue="Gulshan">Gulshan</option>
                                             <option className="fon-semibold" defaultValue="Banani">Banani</option>
                                             <option className="fon-semibold" defaultValue="Uttara">Uttara</option>
                                        </select>
                                   </div>
                                   <input type="text" placeholder="Address" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 mt-3 mb-1.5 capitalize" />
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
          </div>
     );
};

export default AdmissionInfo;