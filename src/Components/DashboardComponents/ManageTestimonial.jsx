import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import Heading from '../Common/Heading';

const testimonialsData = [
     {
          id: 1,
          name: "Roger Scott",
          img: "https://preview.colorlib.com/theme/academia/images/person_1.jpg.webp",
          text: "If a dog chews shoes whose shoes does he choose? whose shoes does he choose? And Whose shoes does he choose?"
     },
     {
          id: 2,
          name: "Severas Snape",
          img: "https://preview.colorlib.com/theme/academia/images/person_2.jpg.webp",
          text: "If a dog chews shoes whose shoes does he choose? whose shoes does he choose? And Whose shoes does he choose?"
     },
     {
          id: 3,
          name: "Robin Milford",
          img: "https://preview.colorlib.com/theme/academia/images/person_3.jpg.webp",
          text: "If a dog chews shoes whose shoes does he choose? whose shoes does he choose? And Whose shoes does he choose?"
     },
];

const ManageTestimonial = () => {
     return (
          <div>
               <Heading text={"Manage Testimonials"} dashboard={true} />
               <div className="px-5 md:px-10 overflow-x-auto">
                    <table className="w-full text-black text-left">
                         <thead>
                              <tr className="select-none font-bold md:text-xl">
                                   <th className="w-2/6 py-2 px-4">Name</th>
                                   <th className="w-3/6 py-2 px-4">Feedback</th>
                                   <th className="w-1/6 py-2 px-4">Action</th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   testimonialsData.map(({ id, img, name, text }) => <tr key={id}>
                                        <td className="w-2/6 py-2 px-4">
                                             <div className="flex items-center justify-start space-x-3">
                                                  <div className="avatar">
                                                       <div className="mask mask-squircle w-12 h-12">
                                                            <img src={img} alt={name} />
                                                       </div>
                                                  </div>
                                                  <div>
                                                       <div className="text-lg font-bold">{name}</div>
                                                       <div className="text-sm opacity-50">Guardian</div>
                                                  </div>
                                             </div>
                                        </td>
                                        <td className="w-3/6 py-2 px-4">{text}</td>
                                        <td className="w-1/6 py-2 px-4">
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
               </div>
          </div>
     );
};

export default ManageTestimonial;