import React, { useEffect, useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { IoMdCall } from 'react-icons/io'

const students = [
     { id: "20231001", name: "Meherima Sara", fathersName: "Masud Alam", mothersName: "Shewly Akter", dob: "13-Sep-2018", gender: "Female", phone: "+0123456789", email: "meherimasara@academia.com", className: "play", roll: "01", result: "99" },
     { id: "20232001", name: "Afraheem Ahmed", fathersName: "", mothersName: "Salma Akter", dob: "06-Jan-2018", gender: "Male", phone: "+0123456789", email: "afraheemahmed@academia.com", className: "nursery", roll: "01", result: "99" },
     { id: "20232002", name: "Salman", fathersName: "Abul Kalam Azad", mothersName: "Salena Akter", dob: "01-Jan-2018", gender: "Male", phone: "+0123456789", email: "salman@academia.com", className: "nursery", roll: "02", result: "95" },
];

const studentInfoColumn = ["ID", "Name", "Fathers Name", "Mothers Name", "Date of Birth", "Gender", "Phone", "Email", "Roll"]

const Students = ({ classNo }) => {
     const [sort, setSort] = useState(true);
     const [results, setResults] = useState([]);

     useEffect(() => {
          let results = students.filter(r => r.className === classNo && r.result);
          console.log(results);
          setResults(results)
     }, [classNo]);

     const sortByResult = () => {
          const sortDescPrices = [...results];
          sortDescPrices.sort((a, b) => a - b).reverse();
          setSort(!sort);
          setResults(sortDescPrices);
     }

     return (
          <table className="w-full select-none text-lg text-left text-black cursor-pointer">
               <tr>
                    {
                         studentInfoColumn.map(title => <th className="px-4 py-2.5">{title}</th>)
                    }
                    <th className="px-4 py-2.5 flex justify-between items-center">
                         Result
                         <button onClick={sortByResult}>{sort === true ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}</button>
                    </th>
               </tr>
               {
                    results?.map(({ id, name, fathersName, mothersName, dob, gender, phone, email, className, roll, result }) => className === classNo && <tr key={id}>
                         <td className="px-4 py-2.5 hover:bg-slate-200">{id}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200">{name}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200">{fathersName ? fathersName : "——"}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200">{mothersName ? mothersName : "——"}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200">{dob ? dob : "——"}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200">{gender}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200">{phone ? <a href={`tel:${phone}`}><IoMdCall className="text-xl" /></a> : "——"}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200">{email ? <a href={`mailto:${email}`}><HiOutlineMail className="text-2xl" /></a> : "——"}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200">{roll}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200">{result ? `${result}%` : "——"}</td>
                    </tr>)
               }
          </table>
     );
};

export default Students;