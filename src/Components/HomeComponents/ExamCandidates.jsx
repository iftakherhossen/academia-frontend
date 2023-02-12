import React from 'react';
import database from '../../assets/database';

const ExamCandidates = () => {
     return (
          <div className="container mx-auto pb-10 mb-12 px-4 md:px-0">
               <div className="py-5">
                    <h2 className="text-center text-3xl text-black font-bold">Our Excellency</h2>
               </div>
               <table className="w-full mt-5 text-black">
                    <thead>
                         <tr>
                              <th className="w-1/6 py-2 px-3 text-[1.35rem] bg-slate-200">Session</th>
                              <th className="w-1/6 py-2 px-3 text-[1.35rem] bg-slate-200">Total Candidates</th>
                              <th className="w-1/6 py-2 px-3 text-[1.35rem] bg-slate-200">IGCSE/O-Level</th>
                              <th className="w-1/6 py-2 px-3 text-[1.35rem] bg-slate-200">IAL/A-Level</th>
                              <th className="w-1/6 py-2 px-3 text-[1.35rem] bg-slate-200">Total Grade A*</th>
                              <th className="w-1/6 py-2 px-3 text-[1.35rem] bg-slate-200">Under Grade B</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              database.examCandidates.map(({ id, session, totalCandidates, oLevel, aLevel, aStar }) => <tr key={id} className="odd:bg-slate-50 even:bg-slate-100">
                                   <td className="w-1/6 py-2 px-3 text-center font-semibold text-[1.2rem]">{session}</td>
                                   <td className="w-1/6 py-2 px-3 text-center font-medium text-[1.2rem]">{totalCandidates ? totalCandidates : "——"}</td>
                                   <td className="w-1/6 py-2 px-3 text-center font-medium text-[1.2rem]">{oLevel ? oLevel : "——"}</td>
                                   <td className="w-1/6 py-2 px-3 text-center font-medium text-[1.2rem]">{aLevel ? aLevel : "——"}</td>
                                   <td className="w-1/6 py-2 px-3 text-center font-medium text-[1.2rem]">{aStar ? aStar : "——"}</td>
                                   <td className="w-1/6 py-2 px-3 text-center font-medium text-[1.2rem]">{aStar ? 0 : "——"}</td>
                              </tr>)
                         }
                    </tbody>
               </table>
          </div>
     );
};

export default ExamCandidates;