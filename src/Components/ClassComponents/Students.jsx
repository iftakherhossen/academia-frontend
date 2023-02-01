import React, { useEffect, useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const students = [
     { id: "20231001", name: "Meherima Sara", fathersName: "Masud Alam", mothersName: "Shewly Akter", phone: "+0123456789", email: "meherimasara@academia.com", className: "play", roll: "01", result: "99" },
     { id: "20232001", name: "Afraheem Ahmed", fathersName: "", mothersName: "Salma Akter", phone: "+0123456789", email: "afraheemahmed@academia.com", className: "nursery", roll: "01", result: "99" },
     { id: "20232002", name: "Salman", fathersName: "Abul Kalam Azad", mothersName: "Salena Akter", phone: "+0123456789", email: "salman@academia.com", className: "nursery", roll: "02", result: "95" },
]

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
                    <th className="px-4 py-2.5">ID</th>
                    <th className="px-4 py-2.5">Name</th>
                    <th className="px-4 py-2.5">Fathers Name</th>
                    <th className="px-4 py-2.5">Mothers Name</th>
                    <th className="px-4 py-2.5">Phone</th>
                    <th className="px-4 py-2.5">Email</th>
                    <th className="px-4 py-2.5">Roll</th>
                    <th className="px-4 py-2.5 flex justify-between items-center">
                         Result
                         <button onClick={sortByResult}>{sort === true ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}</button>
                    </th>
               </tr>
               {
                    results?.map(({ id, name, fathersName, mothersName, phone, email, className, roll, result }) => className === classNo && <tr key={id}>
                         <td className="px-4 py-2.5 hover:bg-slate-200">{id}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200">{name}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200">{fathersName ? fathersName : "——"}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200">{mothersName ? mothersName : "——"}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200">{phone ? <a href={`tel:${phone}`}>{phone}</a> : "——"}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200">{email ? <a href={`mailto:${email}`}>{email}</a> : "——"}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200">{roll}</td>
                         <td className="px-4 py-2.5 hover:bg-slate-200">{result ? `${result}%` : "——"}</td>
                    </tr>)
               }
          </table>
     );
};

export default Students;