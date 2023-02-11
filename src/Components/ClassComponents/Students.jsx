import React, { useEffect, useState } from 'react';
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
          <table className="w-full select-none text-lg text-left text-black cursor-pointer">
               <tr>
                    {
                         database.studentInfoColumn.map(title => <th className="px-4 py-2.5 bg-slate-200">{title}</th>)
                    }
               </tr>
               {
                    database.students.map(({ id, name, fathersName, mothersName, dob, gender, phone, email, className, result }) => <tr key={id}>
                         <td className="px-4 py-2.5 hover:bg-slate-200" onDoubleClickCapture={() => handleCopy(id)}>{id}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200" onDoubleClickCapture={() => handleCopy(name)}>{name}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200" onDoubleClickCapture={() => handleCopy(fathersName)}>{fathersName ? fathersName : "——"}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200" onDoubleClickCapture={() => handleCopy(mothersName)}>{mothersName ? mothersName : "——"}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200" onDoubleClickCapture={() => handleCopy(dob)}>{dob ? dob : "——"}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200">{gender}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200" onDoubleClickCapture={() => handleCopy(phone)}>
                              {phone ? <a href={`tel:${phone}`}><IoMdCall className="text-xl" /></a> : "——"}
                         </td>
                         <td className="px-4 py-2.5 hover:bg-slate-200" onDoubleClickCapture={() => handleCopy(email)}>
                              {email ? <a href={`mailto:${email}`}><HiOutlineMail className="text-2xl" /></a> : "——"}
                         </td>
                         <td className="px-4 py-2.5 hover:bg-slate-200" onDoubleClickCapture={() => handleCopy(result)}>{result ? `${result}%` : "——"}</td>
                    </tr>)
               }
          </table >
     );
};

export default Students;