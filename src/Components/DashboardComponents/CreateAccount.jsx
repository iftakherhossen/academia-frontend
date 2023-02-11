import React, { useState } from 'react';
import toast from 'react-hot-toast';
import database from '../../assets/database';
import useAuth from '../../hooks/useAuth';

const AccountForm = ({ admin, teacher, student }) => {
     const [registrationData, setRegistrationData] = useState({});
     const { user, success, authError, registerUser } = useAuth();
     const [classNo, setClassNo] = useState("");
     const role = (admin === true && 'Admin') || (teacher === true && 'Teacher') || (student === true && 'Student');

     const handleOnBlur = e => {
          const field = e.target.name;
          const value = e.target.value;
          const newRegistrationData = { ...registrationData, role: role, classNo: classNo };
          newRegistrationData[field] = value;
          setRegistrationData(newRegistrationData);
     }
     const handleRegister = e => {
          e.preventDefault();

          if (registrationData.password !== registrationData.confirmPassword) {
               toast.error("Password mismatched!");
          }
          else {
               registerUser(registrationData.name, registrationData.email, registrationData.role, registrationData.classNo, registrationData.password, registrationData.confirmPassword);
               e.target.reset();
               toast.success("Account created successfully!")
          }
     }

     user.email && success && toast.success(`Welcome, ${user.displayName}`);
     authError && toast.error({ authError });

     return (
          <form className="pt-4 pb-0 text-black" onSubmit={handleRegister} autoComplete="false">
               <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    className="input input-bordered focus:outline-0 w-full bg-white text-lg font-medium my-1.5 capitalize"
                    onBlur={handleOnBlur}
                    required
               />
               <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    className="input input-bordered focus:outline-0 w-full bg-white text-lg font-medium my-1.5"
                    onBlur={handleOnBlur}
                    required
               />
               <input
                    type="text"
                    placeholder="Role"
                    name="role"
                    className="input input-bordered focus:outline-0 w-full bg-white text-lg font-medium my-1.5"
                    defaultValue={role}
                    readOnly
               />
               {
                    student && <select className="select w-full text-lg font-semibold bg-white focus:outline-0 my-1.5 capitalize" required onChange={e => setClassNo(e.target.value)}>
                         <option disabled selected>Select Class *</option>
                         {
                              database.classes.map(({ name }) => <option className="font-semibold" value={name} key={name}>{name}</option>)
                         }
                    </select>
               }
               <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="input input-bordered focus:outline-0 w-full bg-white text-lg font-medium my-1.5"
                    min={6}
                    max={10}
                    onBlur={handleOnBlur}
                    pattern="^[\S\s]{6,10}$"
                    required
               />
               <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    className="input input-bordered focus:outline-0 w-full bg-white text-lg font-medium my-1.5"
                    min={6}
                    max={10}
                    pattern="^[\S\s]{6,10}$"
                    onBlur={handleOnBlur}
                    required
               />
               <button type="submit" className="btn mt-4 w-full bg-pastel-green border-0 text-white text-lg tracking-wide">Create</button>
          </form>
     )
}

const CreateAccount = () => {
     const [admin, setAdmin] = useState(true);
     const [teacher, setTeacher] = useState(false);
     const [student, setStudent] = useState(false);

     return (
          <div className="container mx-auto">
               <div className="h-full pt-20 pb-4 text-center">
                    <h2 className="text-[2.5rem] font-semibold text-black capitalize">Create <span className="text-pastel-green">{(admin === true && 'Admin') || (teacher === true && 'Teacher') || (student === true && 'Student')}</span> Account</h2>
               </div>
               <div className="px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 select-none">
                    <div className={`rounded-md py-3 ${admin === true ? "shadow-md" : "shadow-sm"} hover:shadow-md cursor-pointer text-black hover:bg-[#1EB2A6] hover:text-white ${admin === true && "bg-[#1EB2A6] text-white"}`} onClick={() => { setAdmin(true); setTeacher(false); setStudent(false) }}>
                         <h3 className="text-xl font-bold text-center">Admin</h3>
                    </div>
                    <div className={`rounded-md py-3 ${teacher === true ? "shadow-md" : "shadow-sm"} hover:shadow-md cursor-pointer text-black hover:bg-[#1EB2A6] hover:text-white ${teacher === true && "bg-[#1EB2A6] text-white"}`} onClick={() => { setTeacher(true); setAdmin(false); setStudent(false) }}>
                         <h3 className="text-xl font-bold text-center">Teacher</h3>
                    </div>
                    <div className={`rounded-md py-3 ${student === true ? "shadow-md" : "shadow-sm"} hover:shadow-md cursor-pointer text-black hover:bg-[#1EB2A6] hover:text-white ${student === true && "bg-[#1EB2A6] text-white"}`} onClick={() => { setStudent(true); setTeacher(false); setAdmin(false) }}>
                         <h3 className="text-xl font-bold text-center">Student</h3>
                    </div>
               </div>
               <div className="px-4 mb-20 h-full w-1/2 mx-auto">
                    {admin === true && <AccountForm admin={true} />}
                    {teacher === true && <AccountForm teacher={true} />}
                    {student === true && <AccountForm student={true} />}
               </div>
          </div>
     );
};

export default CreateAccount;