import moment from 'moment';
import React from 'react';
import toast from 'react-hot-toast';
import { HiOutlineMail } from 'react-icons/hi';
import { IoMdCall } from 'react-icons/io';
import database from '../../assets/database';

const Students = ({ classNo }) => {
     const handleCopy = (content) => {
          navigator.clipboard.writeText(content);
          toast.success('Content copied to clipboard!')
     }

     return (
          <div>
               <div className="flex justify-center md:justify-end mb-10">
                    <div className="border p-2"></div>
               </div>
               <table className="w-full select-none text-lg text-left text-black cursor-pointer">
                    <tr>
                         {
                              database.studentInfoColumn.map(title => <th className="px-3.5 py-2 bg-slate-200">{title}</th>)
                         }
                    </tr>
                    {
                         database.students.map(({ id, name, fathersName, mothersName, dob, gender, phone, email, className, result }) => <tr key={id}>
                              <td className="px-3.5 py-2 hover:bg-slate-200" onDoubleClickCapture={() => handleCopy(id)}>{id}</td>
                              <td className="px-3.5 py-2 hover:bg-slate-200" onDoubleClickCapture={() => handleCopy(name)}>{name}</td>
                              <td className="px-3.5 py-2 hover:bg-slate-200" onDoubleClickCapture={() => handleCopy(fathersName)}>{fathersName ? fathersName : "——"}</td>
                              <td className="px-3.5 py-2 hover:bg-slate-200" onDoubleClickCapture={() => handleCopy(mothersName)}>{mothersName ? mothersName : "——"}</td>
                              <td className="px-3.5 py-2 hover:bg-slate-200" onDoubleClickCapture={() => handleCopy(dob)}>{dob ? moment(dob).format("DD-MMM-YYYY") : "——"}</td>
                              <td className="px-3.5 py-2 hover:bg-slate-200">{gender}</td>
                              <td className="px-3.5 py-2 hover:bg-slate-200" onDoubleClickCapture={() => handleCopy(phone)}>
                                   {phone ? <a href={`tel:${phone}`}><IoMdCall className="text-xl" /></a> : "——"}
                              </td>
                              <td className="px-3 py-2 hover:bg-slate-200" onDoubleClickCapture={() => handleCopy(email)}>
                                   {email ? <a href={`mailto:${email}`}><HiOutlineMail className="text-2xl" /></a> : "——"}
                              </td>
                              <td className="px-3 py-2 hover:bg-slate-200" onDoubleClickCapture={() => handleCopy(result)}>{result ? `${result}%` : "——"}</td>
                         </tr>)
                    }
               </table>
          </div>
     );
};

export default Students;