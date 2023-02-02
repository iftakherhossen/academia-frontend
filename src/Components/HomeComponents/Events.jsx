import React, { useState } from 'react';

const events = [
     { id: 1, name: "Event Name", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", date: "01/12/2022" },
     { id: 2, name: "Event Name", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.", date: "09/12/2022" },
     { id: 3, name: "Event Name", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.", date: "15/12/2022" }
];

const Event = ({ event }) => {
     const [showMore, setShowMore] = useState(false);

     return (
          <div className="card bg-white text-black shadow mb-4 hover:shadow-lg">
               <div className="card-body px-6 py-4">
                    <h2 className="text-xl font-semibold">{event.name}</h2>
                    <p className="text-md my-1">{showMore === true ? event.text : event.text.slice(0, 50)}{showMore === false && "..."} &nbsp; <span className="font-medium cursor-pointer" onClick={() => setShowMore(!showMore)}>{showMore === true ? "Show Less" : "Show More"}</span></p>
                    <div className="flex items-end">
                         <p className="text-sm text-right text-slate-400 select-none font-medium">- {event.date}</p>
                    </div>
               </div>
          </div>
     )
}

const Events = ({ dashboard }) => {
     return (
          <section className="container mx-auto py-10" id="events">
               <div className="flex flex-col justify-center items-center py-12">
                    <h2 className={`text-4xl font-bold text-black ${dashboard === true && 'mt-10'}`}>{dashboard === true ? 'Manage Events' : 'Events'}</h2>
               </div>
               <div className="px-5 md:px-10 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {
                         events.slice(0).reverse().map(event => <Event event={event} key={event.id} />)
                    }
               </div>
          </section>
     );
};

export default Events;