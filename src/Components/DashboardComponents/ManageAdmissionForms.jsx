import React from 'react';
import Heading from '../Common/Heading';

const admissionForms = [
     { id: 1, name: "Mahreen Sultan", classNo: "class-8", appointmentDate: "05/02/2023" },
];

const ManageAdmissionForms = () => {
     return (
          <div>
               <Heading text={"Manage Admission Forms"} dashboard={true} />
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-5 md:mx-10">
                    {
                         admissionForms.map(({ id, name, classNo, appointmentDate }, index) => <div key={id} className="card rounded-lg bg-white shadow hover:shadow-lg text-black">
                              <div className="card-body px-5 py-4 grid grid-cols-4">
                                   <div className="col-span-3">
                                        <h2 className="text-2xl font-bold">{index + 1}. {name}</h2>
                                        <h3 className="text-lg font-semibold mt-1 -mb-1.5">Admission Class: <span className="capitalize">{classNo}</span></h3>
                                        <h3 className="text-lg font-semibold">Appointment Date: {appointmentDate}</h3>
                                   </div>
                                   <div className="flex flex-col">
                                        <button className="btn btn-sm h-9 my-1">Approve</button>
                                        <button className="btn btn-sm h-9 my-1">Delete</button>
                                   </div>
                              </div>
                         </div>)
                    }
               </div>
          </div>
     );
};

export default ManageAdmissionForms;