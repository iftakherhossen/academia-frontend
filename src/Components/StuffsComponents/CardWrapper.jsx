import React from 'react';

const CardWrapper = ({ data, slicedValue }) => {
     return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-5 p-5 md:p-0">
               {
                    data.slice(0, slicedValue).map(({ name, firstname, lastname, img, degree, designation, email }) => <div className="iCard" key={email}>
                         <img src={img ? img :"https://placeimg.com/640/640/people"} alt={designation} />
                         <div className="iCard-overlay"></div>
                         <div className="iCard-description">
                              <h3>{name ? name : firstname + " " + lastname}</h3>
                              <h6 className="subtitle">
                                   {designation ? designation : "Teacher"}
                                   <p></p>
                                   {degree && <p className="whitespace-pre-wrap">{degree}</p>}
                                   <p><a href={`mailto:${email}`}>Send Email</a></p>
                              </h6>
                         </div>
                    </div>)
               }
          </div>
     );
};

export default CardWrapper;