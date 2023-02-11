import React, { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import Heading from '../Common/Heading';
import database from '../../assets/database';

const DataTable = ({ data, showDegree }) => {
     return (
          <>
               <table className="w-full text-black text-left">
                    <thead>
                         <tr className="select-none font-bold md:text-xl">
                              {data.length !== 0 && <th className="py-2 px-4"></th>}
                              <th className={`${showDegree === false ? "w-1/4" : "w-1/5"} py-2 px-4`}>Name</th>
                              <th className={`${showDegree === false ? "w-1/4" : "w-1/5"} py-2 px-4`}>Designation</th>
                              {showDegree === true && <th className={`${showDegree === false ? "w-1/4" : "w-1/5"} py-2 px-4`}>Degree</th>}
                              <th className={`${showDegree === false ? "w-1/4" : "w-1/5"} py-2 px-4`}>Email</th>
                              <th className={`${showDegree === false ? "w-1/4" : "w-1/5"} py-2 px-4`}>Action</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              data.map(({ id, name, designation, degree, email }, index) => <tr key={id} className="hover:bg-slate-100 font-medium md:text-lg">
                                   <td className="py-2 px-4 font-semibold select-none">{index + 1}.</td>
                                   <td className={`${showDegree === false ? "w-1/4" : "w-1/5"} py-2 px-4`}>{name}</td>
                                   <td className={`${showDegree === false ? "w-1/4" : "w-1/5"} py-2 px-4`}>{designation ? designation : "--"}</td>
                                   {showDegree === true && <td className="w-1/5 py-2 px-4 whitespace-pre-line">{degree}</td>}
                                   <td className={`${showDegree === false ? "w-1/4" : "w-1/5"} py-2 px-4`}><a href={`mailto:${email}`} className="hover:underline">{email}</a></td>
                                   <td className={`${showDegree === false ? "w-1/4" : "w-1/5"} py-2 px-4`}>
                                        <div className="tooltip tooltip-bottom mr-3" data-tip="Approve">
                                             <button className="btn btn-sm bg-pastel-green border-0 text-white text-xl"><MdEdit /></button>
                                        </div>
                                        <div className="tooltip tooltip-bottom mr-3" data-tip="Delete">
                                             <button className="btn btn-sm bg-pastel-green border-0 text-white text-xl"><MdDelete /></button>
                                        </div>
                                   </td>
                              </tr>)
                         }
                    </tbody>
               </table>
               {data.length === 0 && <div className="border py-5 text-center text-xl text-black font-medium">
                    <p>No data to show!</p>
               </div>}
          </>
     )
}

const ManageStuffs = () => {
     const [governingBody, setGoverningBody] = useState(true);
     const [teachers, setTeachers] = useState(false);
     const [stuffs, setStuffs] = useState(false);

     return (
          <div>
               <Heading text={"Manage Stuffs"} dashboard={true} />
               <div className="container mx-auto">
                    <div className="px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 select-none">
                         <div className={`rounded-md py-3 ${governingBody === true ? "shadow-md" : "shadow-sm"} hover:shadow-md cursor-pointer text-black hover:bg-[#1EB2A6] hover:text-white ${governingBody === true && "bg-[#1EB2A6] text-white"}`} onClick={() => { setGoverningBody(true); setTeachers(false); setStuffs(false) }}>
                              <h3 className="text-xl font-bold text-center">Governing Body</h3>
                         </div>
                         <div className={`rounded-md py-3 ${teachers === true ? "shadow-md" : "shadow-sm"} hover:shadow-md cursor-pointer text-black hover:bg-[#1EB2A6] hover:text-white ${teachers === true && "bg-[#1EB2A6] text-white"}`} onClick={() => { setTeachers(true); setGoverningBody(false); setStuffs(false) }}>
                              <h3 className="text-xl font-bold text-center">Teachers</h3>
                         </div>
                         <div className={`rounded-md py-3 ${stuffs === true ? "shadow-md" : "shadow-sm"} hover:shadow-md cursor-pointer text-black hover:bg-[#1EB2A6] hover:text-white ${stuffs === true && "bg-[#1EB2A6] text-white"}`} onClick={() => { setStuffs(true); setTeachers(false); setGoverningBody(false) }}>
                              <h3 className="text-xl font-bold text-center">Stuffs</h3>
                         </div>
                    </div>
                    <div className="px-4 mb-20 h-full">
                         {governingBody === true && <DataTable data={database.governingBody} showDegree={false} />}
                         {teachers === true && <DataTable data={database.teachers} showDegree={true} />}
                         {stuffs === true && <DataTable data={database.stuffs} showDegree={false} />}
                    </div>
               </div>
          </div>
     );
};

export default ManageStuffs;