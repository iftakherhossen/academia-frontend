import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';
import database from '../../assets/database';
import Heading from '../Common/Heading';

const ManageAdmissionForms = () => {
     return (
          <div>
               <Heading text={"Manage Admission Forms"} dashboard={true} />
               <div className="px-5 md:px-10 overflow-x-auto">
                    <table className="w-full text-black text-left">
                         <tr className="select-none font-bold md:text-xl">
                              <th className="py-2 px-4"></th>
                              <th className="lg:w-1/4 py-2 px-4">Name</th>
                              <th className="lg:w-1/4 py-2 px-4">Class</th>
                              <th className="lg:w-1/4 py-2 px-4">Appointment Date</th>
                              <th className="lg:w-1/4 py-2 px-4">Action</th>
                         </tr>
                         {
                              database.admissionForms.map(({ id, name, className, appointmentDate, status }, index) => <tr key={id} className="hover:bg-slate-100 font-medium md:text-lg">
                                   <td className="py-2 px-4 font-semibold select-none">{index + 1}.</td>
                                   <td className="lg:w-1/4 py-2 px-4">{name}</td>
                                   <td className="lg:w-1/4 py-2 px-4 capitalize">{className}</td>
                                   <td className="lg:w-1/4 py-2 px-4">{appointmentDate}</td>
                                   <td className="lg:w-1/4 py-2 px-4">
                                        {
                                             status === false ? <div>
                                                  <div className="tooltip tooltip-bottom mr-3" data-tip="Approve">
                                                       <button className="btn btn-sm bg-pastel-green border-0 text-white text-xl"><MdDone /></button>
                                                  </div>
                                                  <div className="tooltip tooltip-bottom mr-3" data-tip="Delete">
                                                       <button className="btn btn-sm bg-pastel-green border-0 text-white text-xl"><MdDelete /></button>
                                                  </div>
                                             </div> : <p>Approved</p>
                                        }
                                   </td>
                              </tr>)
                         }
                    </table>
                    {
                         database.admissionForms.length === 0 && <div className="border py-5 text-center text-xl text-black font-medium">
                              <p>No data to show!</p>
                         </div>
                    }
               </div>
          </div>
     );
};

export default ManageAdmissionForms;