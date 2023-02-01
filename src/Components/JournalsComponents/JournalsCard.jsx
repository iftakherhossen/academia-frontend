import moment from 'moment';
import React from 'react';

const JournalsCard = ({ shuffledJournals }) => {
     return (
          <div className="grid grid-cols-1 gap-5 p-5 md:p-0">
               {
                    shuffledJournals.map(({ author, description, publishedAt, title, url, source }) => <a href={url} target="_blank" rel="noreferrer" key={title}>
                         <div className="card shadow hover:shadow-lg rounded-md text-black bg-white cursor-pointer">
                              <div className="card-body">
                                   <h2 className="text-2xl font-bold mb-1">{title}</h2>
                                   <p className="font-medium">{author && `Written By: ${author}`} {author && source.name && "~"} {source.name && `Published On: ${source.name}`}</p>
                                   <p>{description ? description : "Description is not available now!"}</p>
                                   <p className="font-semibold text-right mt-1 text-slate-500">{moment(publishedAt).format("MMM Do, YYYY")}</p>
                              </div>
                         </div>
                    </a>)
               }
          </div>
     );
};

export default JournalsCard;