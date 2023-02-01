import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
     const date = new Date();
     const year = date.getFullYear();

     return (
          <div className="bg-white">
               <footer className="footer container mx-auto p-10 text-black">
                    <div>
                         <img src="https://academiaschool.edu.bd/wp-content/uploads/2022/05/cropped-Academia_Logo99-1.png" alt="Logo" className="w-16" />
                         <h2 className="text-3xl font-bold">Academia</h2>
                         <p className="text-sm font-medium -mt-2">English Medium School</p>
                    </div>
                    <div>
                         <span className="footer-title">School</span>
                         <HashLink to="/home#academic" className="link link-hover">Books</HashLink>
                         <HashLink to="/home#academic" className="link link-hover">Results</HashLink>
                         <Link to="/teachers" className="link link-hover">Teachers</Link>
                         <HashLink to="/home#notices" className="link link-hover">Notices</HashLink>
                    </div>
                    <div>
                         <span className="footer-title">At a Glance</span>
                         <Link to="/job-circular" className="link link-hover">Job Circular</Link>
                         <Link to="/governing-body" className="link link-hover">Governing Body</Link>
                         <Link to="/admission-form" className="link link-hover">Admission Form</Link>
                         <HashLink to="/home#events" className="link link-hover">Recent Events</HashLink>
                    </div>
                    <div>
                         <span className="footer-title">Useful Links</span>
                         <a href="http://nctb.gov.bd/" target="_blank" rel="noreferrer" className="link link-hover">NCTB</a>
                         <a href="https://muktopaath.gov.bd/" target="_blank" rel="noreferrer" className="link link-hover">Muktopath</a>
                         <a href="http://www.dpe.gov.bd/" target="_blank" rel="noreferrer" className="link link-hover">DPE</a>
                         <a href="http://www.dshe.gov.bd/" target="_blank" rel="noreferrer" className="link link-hover">DSHE</a>
                    </div>
               </footer>
               <footer className="footer container mx-auto py-10 border-t flex justify-center text-center">
                    <p className="text-base text-slate-400 inline">Copyright ©{year} All rights reserved, <Link to="/" className="font-medium hover:underline">Academia</Link></p>
               </footer>
          </div>
     );
};

export default Footer;