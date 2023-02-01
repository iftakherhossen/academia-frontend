import React, { useState } from 'react';

const notices = [
     { id: 1, name: "Notice Name", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", date: "01/12/2022" },
     { id: 2, name: "Notice Name", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.", date: "09/12/2022" },
     { id: 3, name: "Notice Name", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.", date: "15/12/2022" },
     { id: 4, name: "Notice Name", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.", date: "31/12/2022" },
     { id: 5, name: "Notice Name", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.", date: "01/01/2023" },
     { id: 6, name: "Notice Name", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.", date: "16/01/2023" },
     { id: 7, name: "Notice Name", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", date: "29/01/2023" }
];

const Notice = ({ notice }) => {
     const [showMore, setShowMore] = useState(false);

     return (
          <div className="card bg-white text-black shadow hover:shadow-lg">
               <div className="card-body px-6 py-4">
                    <h2 className="text-xl font-semibold">{notice.name}</h2>
                    <p className="text-md my-1">{showMore === true ? notice.text : notice.text.slice(0, 50)}{showMore === false && "..."} &nbsp;  <span className="font-medium cursor-pointer" onClick={() => setShowMore(!showMore)}>{showMore === true ? "Show Less" : "Show More"}</span></p>
                    <div className="flex items-end">
                         <p className="text-sm text-right text-slate-400 select-none font-medium">- {notice.date}</p>
                    </div>
               </div>
          </div>
     )
}

const NoticeBoard = () => {
     return (
          <section className="container mx-auto py-10" id="notices">
               <div className="flex flex-col justify-center items-center py-10">
                    <h2 className="text-4xl font-bold mt-10 text-black">Notice Board</h2>
               </div>
               <div className="px-5 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                    {
                         notices.slice(0).reverse().map(notice => <Notice notice={notice} key={notice.id} />)
                    }
               </div>
          </section>
     );
};

export default NoticeBoard;