import html2canvas from 'html2canvas';
import React, { useState } from 'react';
import Pie from './Pie';

const students = [
     { id: "20231001", name: "Meherima Sara", fathersName: "Masud Alam", mothersName: "Shewly Akter", phone: "+0123456789", email: "meherimasara@academia.com", className: "play", roll: "01", result: "99" },
     { id: "20232001", name: "Afraheem Ahmed", fathersName: "", mothersName: "Salma Akter", phone: "+0123456789", email: "afraheemahmed@academia.com", className: "nursery", roll: "01", result: "99" },
     { id: "20232002", name: "Salman", fathersName: "Abul Kalam Azad", mothersName: "Salena Akter", phone: "+0123456789", email: "salman@academia.com", className: "nursery", roll: "02", result: "95" },
]

const Results = ({ classNo }) => {
     const [resultCard, setResultCard] = useState([]);
     const [notFound, setNotFound] = useState(false);
     const [id, setId] = useState();
     const [roll, setRoll] = useState();

     const handleSearch = (e) => {
          e.preventDefault();
          setResultCard(students.filter(data => data.className === classNo && data.id === id && data.roll === roll));
          if (students.filter(data => data.className !== classNo && data.id !== id && data.roll !== roll)) setNotFound(true)
          e.target.reset();
     }

     const results = students.filter(data => data.className === classNo);
     const scoreArray = results.map(data => parseInt(data.result));
     let positions;

     const getPosition = () => {
          scoreArray.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
          positions = scoreArray.slice(0, 3);
     }

     getPosition();
     const date = new Date();
     const year = date.getFullYear();

     return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
               <div className="p-2">
                    <h2 className="text-2xl font-bold text-black text-center mt-6">Search Result</h2>
                    <form className="w-2/3 flex flex-col justify-center items-center mx-auto py-6 text-black" onSubmit={(e) => handleSearch(e)}>
                         <input type="text" placeholder="Type Class *" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-2.5 appearance-none capitalize" defaultValue={classNo} readOnly required />
                         <input type="number" placeholder="Type ID Number *" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-2.5 appearance-none" onChange={(e) => setId(e.target.value)} required minLength="8" maxLength="10" />
                         <input type="number" placeholder="Type Roll Number *" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-2.5 appearance-none" onChange={(e) => setRoll(e.target.value)} required minLength="1" maxLength="3" />
                         <input type="text" placeholder="Type Session *" className="input w-full text-lg font-semibold bg-slate-200 focus:outline-0 my-2.5 appearance-none capitalize" defaultValue={year} readOnly required />
                         <button type="submit" className="btn w-full my-2.5 text-base bg-pastel-green text-white border-0">Search</button>
                    </form>
               </div>
               {
                    resultCard?.length > 0 ? resultCard?.map(data => <div className="my-auto" id="result-card">
                         <div className="w-3/4 card border mx-auto rounded-lg">
                              <div className="card-body px-4 py-3">
                                   <div className="flex justify-between items-center">
                                        <div className="text-xl font-medium text-black pl-8 capitalize">
                                             <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
                                             <p>Class: {data.className}</p>
                                             <p>ID: {data.id}</p>
                                             <p>Roll: {data.roll}</p>
                                             <p>Position: {positions.findIndex(i => i === 95) === 0 ? "First" : positions.findIndex(i => i === 95) === 1 ? "Second" : "Third"}</p>
                                        </div>
                                        <Pie result={parseInt(data.result)} />
                                   </div>
                              </div>
                         </div>
                    </div>) : <div className="w-2/3 mx-auto text-center text-base text-black font-medium flex flex-col justify-center items-center">
                         {notFound === true && <p className="text-lg font-semibold mb-8">Result Not Found! Please double check ID & Roll then try again!</p>}
                         <p>N.B.: You can instantly see your result at our website for detailed consult with your class teacher.</p>
                    </div>
               }
          </div>
     );
};

export default Results;