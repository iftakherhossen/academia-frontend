import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../Common/Heading';
import database from '../../assets/database';

const ClassWrapper = ({ academic, onlyClass }) => {
     return (
          <section id="academic" className={`container mx-auto px-4 md:px-10 ${academic === true ? 'mt-8 mb-16 py-10' : onlyClass === true ? 'mt-0' : 'mt-28'}`}>
               {onlyClass === false && <Heading text={"Academic Info"} />}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4">
                    {
                         database.classes.map(({ id, name, icon, link, color }) => <Link to={`/academic/${link}`} key={id}>
                              <div className="card rounded-lg bg-white shadow-sm hover:shadow-lg hover:border border border-transparent hover:border-[#1EB2A6]">
                                   <div className="px-6 py-4 flex justify-start items-center">
                                        <div>
                                             <i className={`${icon} text-3xl mr-3`} style={{ color: color }}></i>
                                        </div>
                                        <div>
                                             <h3 className="text-xl font-semibold text-black mb-1.5">{name}</h3>
                                        </div>
                                   </div>
                              </div>
                         </Link>)
                    }
               </div>
          </section>
     );
};

export default ClassWrapper;