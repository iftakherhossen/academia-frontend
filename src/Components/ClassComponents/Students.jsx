import SearchBar from 'material-ui-search-bar';
import moment from 'moment';
import React, { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { IoMdCall } from 'react-icons/io';
import database from '../../assets/database';
import useAuth from '../../hooks/useAuth';

const Students = ({ classNo }) => {
     const { user } = useAuth();
     const userData = database.users.find(data => data.email === user.email);
     const studentsData = database.students.filter(student => student.className === classNo);
     const [searchedValue, setSearchedValue] = useState("");
     const [searchedResult, setSearchedResult] = useState([]);
     const [notMatch, setNotMatch] = useState(false);
     const [loading, setLoading] = useState(false);
     const count = 10;
     const totalPageNo = Math.ceil(studentsData.length / count);
     const [pageNo, setPageNo] = useState(1);

     const currentTableData = useMemo(() => {
          const firstPageIndex = (pageNo - 1) * count;
          const lastPageIndex = firstPageIndex + count;
          let result;
          if (searchedResult.length > 0) result = searchedResult.slice(firstPageIndex, lastPageIndex)
          else result = studentsData.slice(firstPageIndex, lastPageIndex);
          return result
     }, [count, pageNo, searchedResult, studentsData]);

     const requestSearch = (searchedValue) => {
          setSearchedValue(searchedValue);
          setLoading(true);

          const filteredItems = studentsData.filter((item) => {
               return item.name.toLowerCase().startsWith(searchedValue.toLowerCase()) || item.id.includes(searchedValue);
          });
          const unfilteredItems = !studentsData.filter((item) => {
               return item.name.toLowerCase().includes(searchedValue.toLowerCase()) || item.id.includes(searchedValue);
          });

          setLoading(false);
          setSearchedResult(filteredItems);
          setNotMatch(unfilteredItems);
     };

     const cancelSearch = () => {
          window.location.reload();
          setSearchedValue('');
          requestSearch(searchedValue);
     };

     const handleCopy = (content) => {
          navigator.clipboard.writeText(content);
          toast.success('Content copied to clipboard!')
     }

     notMatch === true && toast.error("Your search doesn't match students record!")

     return (
          <div>
               <div className="flex flex-col justify-center md:flex-row md:justify-between mb-6">
                    <div className="w-full md:w-1/3 px-2">
                         <SearchBar
                              value={searchedValue}
                              onChange={(searchedValue) => requestSearch(searchedValue)}
                              onCancelSearch={() => cancelSearch()}
                              placeholder="Search Student by Name/ID"
                              style={{ borderRadius: 10, boxShadow: 'none' }}
                         />
                    </div>
                    <div className="flex justify-center md:justify-end items-center select-none w-full md:w-1/3">
                         <button className="btn btn-sm btn-circle mx-2 text-xl font-black bg-[#1EB2A6] text-white disabled:bg-slate-400 disabled:text-slate-100 hover:bg-white hover:text-[#1EB2A6] border-[#1EB2A6] hover:border-[#1EB2A6]" disabled={pageNo === 1} onClick={() => setPageNo(pageNo <= 1 ? pageNo : pageNo - 1)}>
                              <FaChevronLeft />
                         </button>
                         <p className="text-2xl text-center font-bold text-black w-12">
                              {pageNo}
                         </p>
                         <button className="btn btn-sm btn-circle mx-2 text-xl font-black bg-[#1EB2A6] text-white disabled:bg-slate-400 disabled:text-slate-100 hover:bg-white hover:text-[#1EB2A6] border-[#1EB2A6] hover:border-[#1EB2A6]" disabled={pageNo === totalPageNo} onClick={() => setPageNo(totalPageNo <= pageNo ? pageNo : pageNo + 1)}>
                              <FaChevronRight />
                         </button>
                         {
                              userData?.role === "Admin" && <button className="btn btn-sm h-10 text-white border-0 bg-pastel-green ml-2 px-6">Add New Student</button>
                         }
                    </div>
               </div>
               <div className="overflow-x-auto">
                    <table className="w-full select-none text-lg text-left text-black cursor-pointer">
                         <tr>
                              {
                                   database.studentInfoColumn.map(title => <th className="px-3.5 py-2 bg-slate-200">{title}</th>)
                              }
                              {
                                   userData?.role === "Admin" && <th className="px-3.5 py-2 bg-slate-200">Action</th>
                              }
                         </tr>
                         {
                              loading === true ? "Loading...." : ""
                         }
                         {
                              searchedResult.length > 0 ? searchedResult.map(({ id, name, fathersName, mothersName, dob, gender, phone, email, result }) => <tr key={id}>
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
                                   {
                                        userData?.role === "Admin" && <td className="px-3 py-2 flex justify-between items-center h-[45px]">
                                        <p className="text-2xl"><AiOutlineEdit /></p>
                                        <p className="text-2xl"><AiOutlineDelete /></p>
                                   </td>
                                   }
                              </tr>) : currentTableData.map(({ id, name, fathersName, mothersName, dob, gender, phone, email, result }) => <tr key={id}>
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
                                   {
                                        userData?.role === "Admin" && <td className="px-3 py-2 flex justify-between items-center h-[45px]">
                                             <p className="text-2xl"><AiOutlineEdit /></p>
                                             <p className="text-2xl"><AiOutlineDelete /></p>
                                        </td>
                                   }
                              </tr>)
                         }
                    </table>
               </div>
          </div>
     );
};

export default Students;