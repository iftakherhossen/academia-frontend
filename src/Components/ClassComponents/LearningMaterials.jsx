import React from 'react';
import { Link } from 'react-router-dom';
import database from '../../assets/database';

const LearningMaterials = ({ classNo }) => {
     return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 px-6 md:px-4 mt-5 mb-10">
               {
                    database.learningMaterials?.map(({ id, title, description, img, link, disable }) => <div className="card shadow hover:shadow-lg image-full h-[220px]">
                         <figure><img src={img} alt={title} className="object-fill w-full" /></figure>
                         <div className="card-body py-5 px-7">
                              <h2 className="card-title text-2xl font-semibold text-white">{title}</h2>
                              <p className="text-white mt-2">
                                   {id === 1 ? <>
                                        {description} <span className="capitalize font-medium">{` ${classNo}`}</span>
                                   </> : description}
                              </p>
                              <div className="card-actions justify-end pt-0 mt-0">
                                   {
                                        disable === true ? <button className="btn btn-success btn-sm h-10 w-28 font-bold" disabled>View</button> : <Link to={link ? link : title.replace(/\s+/g, '-').toLowerCase()}>
                                             <button className="btn btn-success btn-sm h-10 w-28 font-bold">View</button>
                                        </Link>
                                   }
                              </div>
                         </div>
                    </div>)
               }
          </div>
     );
};

export default LearningMaterials;