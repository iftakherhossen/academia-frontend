import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import database from '../assets/database';
import Heading from '../Components/Common/Heading';
import Navigation from '../Components/Common/Navigation';
import CardWrapper from '../Components/StuffsComponents/CardWrapper';

const Stuffs = () => {
     let location = useLocation();
     const [randomStudents1, setRandomStudents1] = useState([]);
     const [randomStudents2, setRandomStudents2] = useState([]);
     const [loadMore, setLoadMore] = useState(false);
     let slicedValue;
     if (loadMore === true) slicedValue = 44;
     else slicedValue = 20;

     useEffect(() => {
          fetch('https://fakerapi.it/api/v1/persons')
               .then(res => res.json())
               .then(data => setRandomStudents1(data.data));

          fetch('https://jsonplaceholder.typicode.com/users')
               .then(res => res.json())
               .then(data => setRandomStudents2(data));
     }, []);

     return (
          <div>
               <Navigation />
               <div className="container mx-auto py-10 mb-5 md:mb-20 select-none">
                    {
                         location.pathname === "/governing-body" && <div>
                              <Heading text={"Governing Body"} />
                              <CardWrapper data={database.governingBody} />
                         </div>
                    }
                    {
                         location.pathname === "/teachers" && <div>
                              <Heading text={"Our Expert Teachers"} />
                              <CardWrapper data={[...database.teachers, ...randomStudents1, ...randomStudents2]} slicedValue={slicedValue} />
                              <div className="flex justify-center mt-16">
                                   <button className="btn btn-sm h-10 px-8 tracking-wide bg-pastel-green border-0 text-white text-base" onClick={() => setLoadMore(!loadMore)}>{loadMore === false ? "Show More!" : "Show Less!"}</button>
                              </div>
                         </div>
                    }
                    {
                         location.pathname === "/stuffs" && <div>
                              <Heading text={"Our Stuffs"} />
                              <CardWrapper data={database.stuffs} />
                         </div>
                    }
               </div>
          </div>
     );
};

export default Stuffs;