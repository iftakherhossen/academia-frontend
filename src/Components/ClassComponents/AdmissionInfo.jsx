import React from 'react';

const admissionInfoColumnData = [
     { title: "Class", key: "class" },
     { title: "ADMISSION FEE", key: "admissionFee" },
     { title: "Caution Money", key: "cautionMoney" },
     { title: "Year Book", key: "yearBook" },
     { title: "ID Card", key: "idCard" },     
     { title: "Tuition Fee", key: "tuitionFee" },
     { title: "Total", key: "total" }
];

const admissionInfoData = [{
     admissionFee: 15000,
     cautionMoney: 5000,
     yearBook: 400,
     idCard: 100,
}];

const tuitionFeeData = [
     { class: "Play", tuitionFee: 8000 },
     { class: "Nursery", tuitionFee: 8100 },
     { class: "Class-1", tuitionFee: 8700 },
     { class: "Class-2", tuitionFee: 8900 },
     { class: "Class-3", tuitionFee: 9100 },
     { class: "Class-4", tuitionFee: 9200 },
     { class: "Class-5", tuitionFee: 9400 },
     { class: "Class-6", tuitionFee: 9500 },
     { class: "Class-7", tuitionFee: 9600 },
     { class: "Class-8", tuitionFee: 9700 },
     { class: "Class-9", tuitionFee: 9700 },
     { class: "Class-10", tuitionFee: 9700 },
];

const AdmissionInfo = ({ classNo }) => {
     const others = 15000 + 5000 + 400 + 100;
     const tuitionCost = tuitionFeeData.find(data => data.class.toLowerCase() === classNo);
     const total = others + tuitionCost.tuitionFee;

     console.log(classNo);

     return (
          <div className="container mx-auto">
               <div className="mt-4">
                    <h2 className="text-3xl font-bold text-center text-black">Tuition Fees</h2>
                    <table className="w-full mt-5 mb-10 text-black text-lg">
                         <tr>
                              {
                                   admissionInfoColumnData?.map(({ title, key }) =>
                                        <th key={key} className="p-2.5 text-center">{title}</th>
                                   )
                              }
                         </tr>
                         {
                              admissionInfoData?.map((data, index) => <tr key={index} className="font-medium">
                                   <td className="p-2.5 text-center capitalize">{classNo}</td>
                                   <td className="p-2.5 text-center">{data?.admissionFee} ৳</td>
                                   <td className="p-2.5 text-center">{data?.cautionMoney} ৳</td>
                                   <td className="p-2.5 text-center">{data?.yearBook} ৳</td>
                                   <td className="p-2.5 text-center">{data?.idCard} ৳</td>
                                   {
                                        tuitionFeeData?.map(data => data?.class.toLowerCase() === classNo && <td className="p-2.5 text-center">
                                             {data.tuitionFee} ৳
                                        </td>)
                                   }
                                   <td className="p-2.5 text-center">{total} ৳</td>                                   
                              </tr>)
                         }
                    </table>
                    <div>
                         <h3 className="text-black text-xl font-semibold mb-2">Miscellaneous Fee Payable every year at a time.</h3>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
                              <div className="col-span-2">
                                   <h4 className="text-lg font-medium underline mb-1">You are requested to pay your child’s advance Tuition fees within 15th of each month  </h4>
                                   <ul className="list-disc pl-8">
                                        <li>Otherwise* Late fee: Per month Tk. 200 (Two Hundred)</li>
                                        <li>Next calendar month @Tk. 500 (Five Hundred) for each month</li>
                                        <li>Dishonoured cheque fine @ Tk.1000 (One thousand)</li>
                                        <li>Monthly Tuition fees & Transport charge are payable two month at a time in advance</li>
                                        <li>Scholarship is available for extraordinary Students of Class XI and XII</li>
                                   </ul>
                              </div>
                              <div>
                                   <h4 className="text-lg font-medium underline mb-1">Transport Charge</h4>
                                   <ul className="list-disc pl-8">
                                        <li>Up to 2 km. Tk. 4500 (monthly)</li>
                                        <li>Above 2km. Tk. 5500 (monthly)</li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="flex justify-center items-center mt-16">
                    <button className="btn btn-wide bg-pastel-green text-white border-0 text-lg shadow-sm hover:shadow-lg">Admission Form</button>
               </div>
          </div>
     );
};

export default AdmissionInfo;