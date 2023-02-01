import React from 'react';
import { Link } from 'react-router-dom';

const learningMaterialsData = [
     {
          id: 1,
          title: "Academic Books",
          description: "PDF version of all the academic books of ",
          img: "https://www.shutterstock.com/image-vector/graduation-cap-on-book-stack-260nw-1912054282.jpg",
          link: "http://www.nctb.gov.bd/site/page/85da3a9e-fd7f-4b2f-be74-f8e6637ae785/-"
     },
     {
          id: 2,
          title: "Extra Curricular Activities",
          description: "Information about Extra Curricular Activities.",
          img: "https://www.shutterstock.com/image-photo/top-view-family-happy-children-260nw-1115225936.jpg",
     },
     {
          id: 3,
          title: "Online Class Schedule",
          description: "Here you can get all the info about online classes.",
          img: "https://media.istockphoto.com/id/1250479244/photo/asian-boy-student-video-conference-e-learning-with-teacher-and-classmates-on-computer-in.jpg?s=612x612&w=0&k=20&c=I4ZCPv42AqVPMM536-QNkmfFYL0KBse5ybcPlX4CJYo=",
          disable: true,
     },
     {
          id: 4,
          title: "Non-Academic Books",
          description: "Bookwroms can easily get latest e-books from here.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrlovgFIzBp1IRXR_PXI4FNWRQlMTCsLcsHXINyJ9Z1Z717Ke47K3pICPZOJS-mWzSqA4&usqp=CAU",
          link: "https://manybooks.net/"
     }
]

const LearningMaterials = ({ classNo }) => {
     return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-6 md:px-4 mt-5 mb-10">
               {
                    learningMaterialsData?.map(({ id, title, description, img, link, disable }) => <div className="card shadow hover:shadow-lg image-full h-[220px]">
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