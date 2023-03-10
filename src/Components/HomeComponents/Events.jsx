import Linkify from "linkify-react";
import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { MdDelete, MdEdit, MdMoreHoriz } from 'react-icons/md';
import database from '../../assets/database';

const Event = ({ event, dashboard }) => {
     const [showMore, setShowMore] = useState(false);

     return (
          <div className="card bg-white text-black shadow mb-4 hover:shadow-lg h-full">
               <div className="card-body px-6 py-4">
                    <div className="flex justify-between items-center">
                         <h2 className="text-xl font-semibold">{event.name}</h2>
                         {
                              dashboard === true && <div className="dropdown dropdown-bottom dropdown-end ml-3">
                                   <label tabIndex={0} className="flex items-center cursor-pointer"><MdMoreHoriz /></label>
                                   <ul tabIndex={0} className="dropdown-content menu shadow-lg bg-white text-black rounded-lg w-52">
                                        <li><span className="flex justify-between font-semibold">Edit <MdEdit className="text-xl" /></span></li>
                                        <li><span className="flex justify-between font-semibold">Delete <MdDelete className="text-xl" /></span></li>
                                   </ul>
                              </div>
                         }
                    </div>
                    <p className="text-md my-1">
                         <Linkify>
                              {showMore === true ? event.text : event.text.slice(0, 50)}{showMore === false && "..."} &nbsp; <span className="font-medium cursor-pointer" onClick={() => setShowMore(!showMore)}>{showMore === true ? "Show Less" : "Show More"}</span>
                         </Linkify>
                    </p>
                    <div className="flex items-end">
                         <p className="text-sm text-right text-slate-400 select-none font-medium">- {event.publishedAt}</p>
                    </div>
               </div>
          </div>
     )
}

const Events = ({ dashboard }) => {
     const [eventData, setEventData] = useState({});
     const timestamp = new Date();

     const handleOnBlur = e => {
          const field = e.target.name;
          const value = e.target.value;
          const newEventData = { ...eventData, publishedAt: timestamp };
          newEventData[field] = value;
          setEventData(newEventData);
     }

     const handleAddEvent = (e) => {
          e.preventDefault();

          console.log(eventData);
     }

     return (
          <section className="container mx-auto mt-10 py-10" id="events">
               <div className="flex flex-col justify-center items-center pb-12">
                    <h2 className={`font-bold text-black ${dashboard === true ? 'mt-10 text-4xl' : 'text-3xl'}`}>{dashboard === true ? 'Manage Events' : 'Upcoming Events'}</h2>
               </div>
               <div className="px-5 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                    {
                         database.events.slice(0).reverse().map(event => <Event event={event} key={event.id} dashboard={dashboard} />)
                    }
                    {
                         dashboard === true && <div className="card bg-white text-black shadow mb-4 hover:shadow-lg h-[9.5rem]">
                              <div className="card-body py-4 flex justify-center items-center">
                                   <label htmlFor="add-event-modal" className="btn btn-circle bg-pastel-green border-0 text-white"><BsPlusLg className="cursor-pointer text-[1.7rem]" /></label>
                              </div>
                         </div>
                    }
               </div>

               {/* Add New Event Modal */}
               <div>
                    <input type="checkbox" id="add-event-modal" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                         <div className="modal-box relative bg-[#F8F8F8] text-black">
                              <label htmlFor="add-event-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white  text-black border-black hover:text-white">✕</label>
                              <h3 className="text-2xl font-bold pl-1">Add New Event</h3>
                              <form className="pt-4 pb-0" onSubmit={handleAddEvent}>
                                   <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Event Name *"
                                        className="input input-bordered focus:outline-0 w-full bg-white text-lg font-medium my-2"
                                        onBlur={handleOnBlur}
                                        required
                                   />
                                   <textarea
                                        placeholder="Enter Event Content *"
                                        name="text"
                                        className="textarea textarea-bordered focus:outline-0 w-full bg-white text-lg font-medium my-2 resize-none h-40"
                                        onBlur={handleOnBlur}
                                        required
                                   ></textarea>
                                   <button type="submit" className="btn mt-6 w-full bg-pastel-green border-0 text-white text-lg">Add Event</button>
                              </form>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Events;