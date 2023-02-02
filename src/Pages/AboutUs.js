import React from 'react';
import { BsBuilding, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '../Components/Common/Footer';
import Navigation from '../Components/Common/Navigation';
import Stats from '../Components/HomeComponents/Stats';

const schoolContact = [
     {
          id: 1,
          name: "Mirpur-1, Dhaka (Main Campus)",
          phone: "+123456789",
          email: "admin@acdemia.com",
          facebook: "",
          instagram: "",
          twitter: ""
     },
     {
          id: 2,
          name: "Gulshasn Rd 2, Dhaka",
          phone: "+123456789",
          email: "admin@acdemia.com",
          facebook: "",
          instagram: "",
          twitter: ""
     },
     {
          id: 3,
          name: "Banani Model Town, Dhaka",
          phone: "+123456789",
          email: "admin@acdemia.com",
          facebook: "",
          instagram: "",
          twitter: ""
     },
     {
          id: 4,
          name: "Uttara Sector 15, Dhaka",
          phone: "+123456789",
          email: "admin@acdemia.com",
          facebook: "",
          instagram: "",
          twitter: ""
     },
]

const AboutUs = () => {
     return (
          <div>
               <Navigation />
               <div className="container mx-auto">
                    <div className="h-44 flex justify-center items-end pb-16">
                         <h2 className="text-4xl font-bold text-black">About Us</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="p-4 text-black">
                              <div>
                                   <h2 className="text-3xl font-bold">Welcome to Academia</h2>
                                   <div className="my-3">
                                        <p className="text-base text-justify">Academia English Medium School is a school located at Mirpur, Gulshan, Banani, and Uttara in Dhaka. It has been praised over time for providing quality education with qualified, expert and dedicated teaching staff. It was established in 2005.The School is regarded as one of the best schools in the town. Top 1 ranked in All English Medium School in Dhaka. We have transport facilities. We also provide all the materials and things a students need. We focus on personal skills rather then academic education. We teach every single thing a student need to learn.</p>
                                   </div>
                              </div>
                              <div className="px-2">
                                   <h4 className="text-xl font-semibold pt-2">Why You should choose Academia?</h4>
                                   <ul className="pl-8 list-disc pt-3">
                                        <li>lorem ipsum has been more powerful.</li>
                                        <li>lorem ipsum has been more powerful.</li>
                                        <li>lorem ipsum has been more powerful.</li>
                                        <li>lorem ipsum has been more powerful.</li>
                                   </ul>
                              </div>
                         </div>
                         <div className="tooltip tooltip-bottom" data-tip="Principle Sir">
                              <img src="https://gray-kwtx-prod.cdn.arcpublishing.com/resizer/cI-NVdgTlwBAehYJ1wVKZPBESLU=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/PNLLGQBX2JNZRELHBIFRJVJOKE.jpg" alt="Cover" className="w-full" draggable={false} />
                         </div>
                    </div>                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-16 text-black">
                         {
                              schoolContact.map(({ id, name, phone, email }) => <div className="card rounded-lg shadow hover:shadow-lg select-none">
                              <div className="card-body justify-center items-center text-lg font-medium">
                                   <BsBuilding className="text-5xl font-black mb-4" />
                                   <p>{name}</p>
                                   <p><a href={`tel:${phone}`}>{phone}</a></p>
                                   <p><a href={`tel:${email}`}>{email}</a></p>   
                                   <div className="flex justify-center items-center text-xl mt-2.5 text-pastel-green">
                                        <BsFacebook className="cursor-pointer hover:drop-shadow" />
                                        <BsInstagram className="mx-2.5 cursor-pointer hover:drop-shadow" />
                                        <BsTwitter className="cursor-pointer hover:drop-shadow" />
                                   </div>                                 
                              </div>
                         </div>)
                         }
                    </div>
                    <div className="w-full h-96 mt-8 mb-12 shadow-sm">
                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.773260356968!2d90.35206261534522!3d23.791087193136836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0ea406eb22f%3A0x24b00bda53244b9f!2sAnsar%20Camp%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1675094412526!5m2!1sen!2sbd" title="Main Campus Address" width="100%" height="100%" className="border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
               </div>  
               <Stats />
               <div className="container mx-auto mt-14 mb-20">
                    <div>
                         <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false} showThumbs={false}>
                              <img src="https://loremflickr.com/1000/600/paris?random=1" alt="Carousel" className="w-full h-[600px]" />
                              <img src="https://loremflickr.com/1000/600/brazil?random=2" alt="Carousel" className="w-full h-[600px]" />
                              <img src="https://loremflickr.com/1000/600/paris?random=3" alt="Carousel" className="w-full h-[600px]" />
                              <img src="https://loremflickr.com/1000/600/nature?random=4" alt="Carousel" className="w-full h-[600px]" />
                              <img src="https://loremflickr.com/1000/600/brazil?random=5" alt="Carousel" className="w-full h-[600px]" />
                              <img src="https://loremflickr.com/1000/600/nature?random=6" alt="Carousel" className="w-full h-[600px]" />
                         </Carousel>
                    </div>
               </div>         
               <Footer />
          </div>
     );
};

export default AboutUs;