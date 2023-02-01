import React from 'react';
import { BiTimeFive, BiPhoneCall } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';

const TopBar = () => {
     return (
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 py-3 text-white">
               <div className="p-2">
                    <div>
                         <h2 className="text-3xl uppercase font-bold tracking-wide">Academia</h2>
                         <p className="text-sm">English Medium School</p>
                    </div>
               </div>
               <div className="grid grid-cols-3 p-2">
                    <div className="flex items-center">
                         <div className="text-3xl mr-2.5">
                              <BiPhoneCall />
                         </div>
                         <div>
                              <h2 className="text-xl font-bold">Sunday - Friday</h2>
                              <p className="font-medium">8:00 AM - 6:00 PM</p>
                         </div>
                    </div>
                    <div className="flex justify-center items-center">
                         <div className="text-3xl mr-2.5">
                              <BiTimeFive />
                         </div>
                         <div>
                              <h2 className="text-xl font-bold">Call Us</h2>
                              <a href="tel:0123456789" className="font-medium">0123456789</a>
                         </div>
                    </div>
                    <div className="flex items-center text-pastel-green justify-end">
                         <div className="p-3 rounded-full mx-1 text-xl hover:shadow cursor-pointer">
                              <BsFacebook />
                         </div>
                         <div className="p-3 rounded-full mx-1 text-xl hover:shadow cursor-pointer">
                              <BsTwitter />
                         </div>
                         <div className="p-3 rounded-full mx-1 text-xl hover:shadow cursor-pointer">
                              <BsInstagram />
                         </div>
                         <div className="p-3 rounded-full mx-1 text-xl hover:shadow cursor-pointer">
                              <BsYoutube />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default TopBar;