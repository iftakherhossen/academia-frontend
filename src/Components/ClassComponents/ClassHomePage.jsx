import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AdmissionInfo from './AdmissionInfo';
import LearningMaterials from './LearningMaterials';
import Results from './Results';
import Students from './Students';

const ClassHomePage = () => {
     let params = useParams();

     const [admission, setAdmission] = useState(true);
     const [learning, setLearning] = useState(false);
     const [results, setResults] = useState(false);
     const [students, setStudents] = useState(false);

     return (
          <div className="container mx-auto">
               <div className="h-full pt-20 pb-4 text-center">
                    <h2 className="text-[2.5rem] font-semibold text-black capitalize">Resources for <span className="text-pastel-green font-bold">{params.class}</span></h2>
               </div>
               <div className="px-4 md:px-0 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 select-none">
                    <div className={`rounded-md py-3 ${admission === true ? "shadow-md" : "shadow-sm"} hover:shadow-md cursor-pointer text-black hover:bg-[#1EB2A6] hover:text-white ${admission === true && "bg-[#1EB2A6] text-white"}`} onClick={() => { setAdmission(true); setLearning(false); setResults(false); setStudents(false) }}>
                         <h3 className="text-xl font-bold text-center">Admission Info</h3>
                    </div>
                    <div className={`rounded-md py-3 ${learning === true ? "shadow-md" : "shadow-sm"} hover:shadow-md cursor-pointer text-black hover:bg-[#1EB2A6] hover:text-white ${learning === true && "bg-[#1EB2A6] text-white"}`} onClick={() => { setLearning(true); setAdmission(false); setResults(false); setStudents(false) }}>
                         <h3 className="text-xl font-bold text-center">Learning Materials</h3>
                    </div>
                    <div className={`rounded-md py-3 ${results === true ? "shadow-md" : "shadow-sm"} hover:shadow-md cursor-pointer text-black hover:bg-[#1EB2A6] hover:text-white ${results === true && "bg-[#1EB2A6] text-white"}`} onClick={() => { setResults(true); setLearning(false); setAdmission(false); setStudents(false) }}>
                         <h3 className="text-xl font-bold text-center">Results</h3>
                    </div>
                    <div className={`rounded-md py-3 ${students === true ? "shadow-md" : "shadow-sm"} hover:shadow-md cursor-pointer text-black hover:bg-[#1EB2A6] hover:text-white ${students === true && "bg-[#1EB2A6] text-white"}`} onClick={() => { setStudents(true); setAdmission(false); setLearning(false); setResults(false) }}>
                         <h3 className="text-xl font-bold text-center">Students</h3>
                    </div>
               </div>
               <div className="px-4 md:px-0 mb-20 h-full">
                    {admission === true && <AdmissionInfo classNo={params.class} />}
                    {learning === true && <LearningMaterials classNo={params.class} />}
                    {results === true && <Results classNo={params.class} />}
                    {students === true && <Students classNo={params.class} />}
               </div>
          </div>
     );
};

export default ClassHomePage;