import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../Components/Common/Footer';
import Heading from '../Components/Common/Heading';
import Navigation from '../Components/Common/Navigation';
import CardWrapper from '../Components/StuffsComponents/CardWrapper';

const governingBodyData = [
     { id: 1, name: "A", img: "", designation: "" },
     { id: 2, name: "B", img: "", designation: "" },
];
const teachersData = [
     { id: 1001, name: "Centenio", img: "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGVhY2hlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", degree: "M.Sc in Math", designation: "Math Teacher", email: "centenio@acdemia.bd" },
     { id: 1002, name: "Don Rane", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxuMVYzWEExWEphRXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", degree: "M.A in English", designation: "English Teacher", email: "donrane@acdemia.bd" },
];
const stuffsData = [
     { id: 101, name: "E", img: "", designation: "" },
     { id: 102, name: "F", img: "", designation: "" },
];

const Stuffs = () => {
     let location = useLocation();

     return (
          <div>
               <Navigation />
               <div className="container mx-auto py-10 mb-5 md:mb-20 select-none">
                    {
                         location.pathname === "/governing-body" && <div>
                              <Heading text={"Governing Body"} />
                              <CardWrapper data={governingBodyData} />
                         </div>
                    }
                    {
                         location.pathname === "/teachers" && <div>
                              <Heading text={"Our Teachers"} />
                              <CardWrapper data={teachersData} />
                         </div>
                    }
                    {
                         location.pathname === "/stuffs" && <div>
                              <Heading text={"Our Stuffs"} />
                              <CardWrapper data={stuffsData} />
                         </div>
                    }
               </div>
               <Footer />
          </div>
     );
};

export default Stuffs;