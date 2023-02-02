import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../Common/Heading';

const classes = [
     { id: 1, name: "Play", icon: "ri-store-line", color: "#ffbb2c", link: "play" },
     { id: 2, name: "Nursery", icon: "ri-bar-chart-box-line", color: "#5578ff", link: "nursery" },
     { id: 3, name: "Class-One", icon: "ri-calendar-todo-line", color: "#e80368", link: "class-1" },
     { id: 4, name: "Class-Two", icon: "ri-paint-brush-line", color: "#e361ff", link: "class-2" },
     { id: 5, name: "Class-Three", icon: "ri-database-2-line", color: "#47aeff", link: "class-3" },
     { id: 6, name: "Class-Four", icon: "ri-gradienter-line", color: "#ffa76e", link: "class-4" },
     { id: 7, name: "Class-Five", icon: "ri-file-list-3-line", color: "#11dbcf", link: "class-5" },
     { id: 8, name: "Class-Six", icon: "ri-price-tag-2-line", color: "#4233ff", link: "class-6" },
     { id: 9, name: "Class-Seven", icon: "ri-anchor-line", color: "#b2904f", link: "class-7" },
     { id: 10, name: "Class-Eight", icon: "ri-disc-line", color: "#b20969", link: "class-8" },
     { id: 11, name: "Class-Nine", icon: "ri-base-station-line", color: "#ff5828", link: "class-9" },
     { id: 12, name: "Class-Ten", icon: "ri-fingerprint-line", color: "#29cc61", link: "class-10" },
];

const ClassWrapper = ({ academic, onlyClass }) => {
     return (
          <section id="academic" className={`container mx-auto px-4 md:px-10 ${academic === true ? 'mt-5 mb-16 y-10' : onlyClass === true ? 'mt-0' : 'mt-20'}`}>
               {onlyClass === false && <Heading text={"Academic Info"} />}
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                    {
                         classes.map(({ id, name, icon, link, color }) => <Link to={`/academic/${link}`} key={id}>
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