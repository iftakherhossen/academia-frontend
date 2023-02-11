const database = {
     classes: [
          { id: 1, name: "Play", icon: "ri-store-line", color: "#ffbb2c", link: "play" },
          { id: 2, name: "Nursery", icon: "ri-bar-chart-box-line", color: "#5578ff", link: "nursery" },
          { id: 3, name: "Class-One", icon: "ri-calendar-todo-line", color: "#e80368", link: "class-1" },
          { id: 4, name: "Class-Two", icon: "ri-paint-brush-line", color: "#e361ff", link: "class-2" },
          { id: 5, name: "Class-Three", icon: "ri-database-2-line", color: "#47aeff", link: "class-3" },
          { id: 6, name: "Class-Four", icon: "ri-gradienter-line", color: "#ffa76e", link: "class-4" },
          { id: 7, name: "Class-Five", icon: "ri-file-list-3-line", color: "#11dbcf", link: "class-5" },
          { id: 8, name: "Class-Six", icon: "ri-price-tag-2-line", color: "#4233ff", link: "class-6" },
          { id: 9, name: "Class-Seven", icon: "ri-anchor-line", color: "#b2904f", link: "class-7" },
          { id: 10, name: "Class-Eight", icon: "ri-disc-line", color: "#b20969", link: "class-8" },
          { id: 11, name: "Class-Nine", icon: "ri-base-station-line", color: "#ff5828", link: "class-9" },
          { id: 12, name: "Class-Ten", icon: "ri-fingerprint-line", color: "#29cc61", link: "class-10" },
     ],
     studentInfoColumn: [ "ID", "Name", "Fathers Name", "Mothers Name", "publishedAt of Birth", "Gender", "Phone", "Email", "Result" ],
     students: [
          { id: "20231001", name: "Meherima Sara", fathersName: "Masud Alam", mothersName: "Shewly Akter", dob: "13-Sep-2018", gender: "Female", phone: "+0123456789", email: "meherimasara@academia.com", className: "play", roll: "1", result: "96" },
          { id: "20231002", name: "Gian D'souza", fathersName: "Roni D'souza", mothersName: "Lisa D'souza", dob: "13-Sep-2018", gender: "Female", phone: "+0123456789", email: "giandsouza@academia.com", className: "play", roll: "2", result: "100" },
          { id: "20231003", name: "Afraheem Ahmed", fathersName: "", mothersName: "Salma Akter", dob: "06-Jan-2018", gender: "Male", phone: "+0123456789", email: "afraheemahmed@academia.com", className: "nursery", roll: "1", result: "99" },
          { id: "20231004", name: "Salman", fathersName: "Abul Kalam Azad", mothersName: "Salena Akter", dob: "01-Jan-2018", gender: "Male", phone: "+0123456789", email: "salman@academia.com", className: "nursery", roll: "2", result: "95" },
          { id: "20231005", name: "Nisha Chowdhury", fathersName: "Nabil Chowdhury", mothersName: "Jui Chowdhury", dob: "01-Jan-2017", gender: "Female", phone: "+0123456776", email: "salman@academia.com", className: "class-1", roll: "1", result: "98" },
          { id: "20231006", name: "Yeasin Chowdhury", fathersName: "Habul Chowdhury", mothersName: "Rehena Akter", dob: "02-Feb-2017", gender: "Male", phone: "+0123456777", email: "yeasin@academia.com", className: "class-1", roll: "2", result: "95" },
          { id: "20231007", name: "Niloy Ahmed", fathersName: "Habul Ahmed", mothersName: "Jui Akter", dob: "01-Jan-2016", gender: "Male", phone: "+0123456778", email: "niloy@academia.com", className: "class-2", roll: "1", result: "97" },
          { id: "20231008", name: "Shafi Islam", fathersName: "Saiful Mia", mothersName: "Riya Akter", dob: "02-Feb-2016", gender: "Male", phone: "+0123456779", email: "shafi@academia.com", className: "class-2", roll: "2", result: "95" },
          { id: "20231009", name: "Nila Chowdhury", fathersName: "Habul Chowdhury", mothersName: "Rehena Begum", dob: "01-Jan-2015", gender: "Female", phone: "+0123456780", email: "niloyChowdhury@academia.com", className: "class-3", roll: "1", result: "97" },
          { id: "20231010", name: "Tamim Islam", fathersName: "Iftakher Hosssen", mothersName: "Sohana Akter", dob: "02-Feb-2015", gender: "Male", phone: "+0123456781", email: "tamin@academia.com", className: "class-3", roll: "2", result: "95" },
          { id: "20231011", name: "Hamima Islam", fathersName: "Ali mia", mothersName: "Shyamoli Akter", dob: "01-Jan-2014", gender: "Female", phone: "+0123456782", email: "hamim@academia.com", className: "class-4", roll: "1", result: "97" },
          { id: "20231012", name: "Rahim Mia", fathersName: "Yesin Arafat", mothersName: "Aysha Akter", dob: "02-Feb-2014", gender: "Male", phone: "+0123456723", email: "rahim@academia.com", className: "class-4", roll: "2", result: "95" },
          { id: "20231013", name: "Toya Islam", fathersName: "Siyam", mothersName: "Suborna Akter", dob: "01-Jan-2013", gender: "Female", phone: "+0123456784", email: "tasin@academia.com", className: "class-5", roll: "1", result: "97" },
          { id: "20231014", name: "Abdullah Islam", fathersName: "Habibur Rahman", mothersName: "Jafrina Begum", dob: "02-Feb-2013", gender: "Male", phone: "+0123456785", email: "tasin@academia.com", className: "class-5", roll: "2", result: "95" },
          { id: "20231015", name: "Ayan Islam", fathersName: "Faysal Ahmed", mothersName: "Ayrin Akter", dob: "01-Jan-2012", gender: "Male", phone: "+0123456786", email: "ayan@academia.com", className: "class-6", roll: "1", result: "97" },
          { id: "20231016", name: "Labiba Islam", fathersName: "Nabil Islam", mothersName: "Soumi Akter", dob: "02-Feb-2012", gender: "Female", phone: "+0123456787", email: "labib@academia.com", className: "class-6", roll: "2", result: "95" },
          { id: "20231017", name: "Anushka Islam", fathersName: "Ruhul Amin", mothersName: "Mow Akter", dob: "01-Jan-2011", gender: "Female", phone: "+0123456788", email: "aryan@academia.com", className: "class-7", roll: "1", result: "97" },
          { id: "20231018", name: "Ali Khan", fathersName: "Mustak Ali", mothersName: "Jasmine Akter", dob: "02-Feb-2011", gender: "Male", phone: "+0123456789", email: "ali@academia.com", className: "class-7", roll: "2", result: "95" },
          { id: "20231019", name: "Anannya Hossen", fathersName: "Muid Rubayet", mothersName: "Kona Akter", dob: "01-Jan-2010", gender: "Female", phone: "+0123456790", email: "anamul@academia.com", className: "class-8", roll: "1", result: "97" },
          { id: "20231020", name: "Arif Rahman", fathersName: "Babul MIa", mothersName: "Jessica Akter", dob: "02-Feb-2010", gender: "Male", phone: "+0123456791", email: "arif@academia.com", className: "class-8", roll: "2", result: "85" },
          { id: "20231021", name: "Mahreen Sultan", fathersName: "Rajib Sultan", mothersName: "Sania Sultana", dob: "02-Feb-2010", gender: "Female", phone: "+0123456791", email: "arif@academia.com", className: "class-8", roll: "3", result: "70" },
          { id: "20231022", name: "Bilal Mia", fathersName: "Kabir Islam", mothersName: "Jui Akter", dob: "01-Jan-2009", gender: "Male", phone: "+0123456792", email: "bilal@academia.com", className: "class-9", roll: "1", result: "97" },
          { id: "20231023", name: "Kheya Islam", fathersName: "Rahman Mia", mothersName: "Pushpa Akter", dob: "02-Feb-2009", gender: "Female", phone: "+0123456793", email: "karul@academia.com", className: "class-9", roll: "2", result: "95" },
          { id: "20231024", name: "Tonmoy Islam", fathersName: "Topon Islam", mothersName: "Parul Akter", dob: "01-Jan-2008", gender: "Male", phone: "+0123456794", email: "tonmoy@academia.com", className: "class-10", roll: "1", result: "97" },
          { id: "20231025", name: "Samia Islam", fathersName: "Kawsar Islam", mothersName: "Shewly Akter", dob: "02-Feb-2008", gender: "Female", phone: "+0123456795", email: "siam@academia.com", className: "class-10", roll: "2", result: "95" },
     ],
     learningMaterials: [
          {
               id: 1,
               title: "Academic Books",
               description: "PDF version of all the academic books of ",
               img: "https://www.shutterstock.com/image-vector/graduation-cap-on-book-stack-260nw-1912054282.jpg",
               link: "http://www.nctb.gov.bd/site/page/85da3a9e-fd7f-4b2f-be74-f8e6637ae785/-"
          },
          {
               id: 2,
               title: "Extra Curricular Activities",
               description: "Information about Extra Curricular Activities.",
               img: "https://www.shutterstock.com/image-photo/top-view-family-happy-children-260nw-1115225936.jpg",
          },
          {
               id: 3,
               title: "Online Class Schedule",
               description: "Here you can get all the info about online classes.",
               img: "https://media.istockphoto.com/id/1250479244/photo/asian-boy-student-video-conference-e-learning-with-teacher-and-classmates-on-computer-in.jpg?s=612x612&w=0&k=20&c=I4ZCPv42AqVPMM536-QNkmfFYL0KBse5ybcPlX4CJYo=",
               disable: true,
          },
          {
               id: 4,
               title: "Non-Academic Books",
               description: "Bookwroms can easily get latest e-books from here.",
               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrlovgFIzBp1IRXR_PXI4FNWRQlMTCsLcsHXINyJ9Z1Z717Ke47K3pICPZOJS-mWzSqA4&usqp=CAU",
               link: "https://manybooks.net/"
          }
     ],     
     admissionInfoColumnData: [ "Class", "Admission Fee", "Caution Money", "Year Book", "ID Card", "Tuition Fee", "Total" ],
     admissionInfoData: [{ admissionFee: 15000, cautionMoney: 5000, yearBook: 400, idCard: 100 }],
     tuitionFeeData: [
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
     ],
     user: [
         { id: 10109, name: "Iftakher Hossen", email: "iftakher.one@gmail.com", role: "Admin" },
         { id: 14064, name: "Tarek Munshi", email: "", role: "Teacher"},
         { id: 51700, name: "Yeasin Arafat Shawon", email: "yeasinarafat@academia.bd", role: "Student", classNo: "class-10" }
     ],
     teachers: [
          { id: 1, img: "https://i.postimg.cc/G3FKH8wV/photo-1548449112-96a38a643324.jpg", name: "Aminul Hoque", designation: "Principle", degree: "M.Phil in Education,\n M.A. in Astrophysics", email: "aminulhoque.@gmail.con" },
          { id: 2, img: "https://i.postimg.cc/QtWX0Jm8/photo-1664575602554-2087b04935a5.jpg", name: "Salena Akter", designation: "Vice Principle", degree: "M.Ed in Education,\n M.A in English", email: "salenaakter@gmail.com" },
          { id: 3, img: "https://i.postimg.cc/hPnCr81K/photo-6287089612149077876-y.jpg", name: "John Doe", designation: "English Teacher", degree: "M.A. in English", email: "johndoe@gmail.com" },
          { id: 4, img: "https://i.postimg.cc/T37CfzMP/photo-6287089612149077877-y.jpg", name: "Jp Justin", designation: "Math Teacher", degree: "M.Sc. in Math", email: "jpjsutin@gmail.com" },
          { id: 5, img: "https://i.postimg.cc/FFwwmQZH/female-1.jpg", name: "Rina Khan", designation: "Bangla Teacher", degree: "M.A. in Bangla", email: "rinakhan@gmail.com" },
          { id: 6, img: "https://i.postimg.cc/NFqQV2C1/photo-1594744803329-e58b31de8bf5.png", name: "Gorgia Meloni", designation: "Accounting Teacher", degree: "MBA in Accounting", email: "gorgiameloni.com" },
          { id: 7, img: "https://i.postimg.cc/kXwyv05y/photo-6287089612149077892-y.jpg", name: "Iftakher Hossen", designation: "Biology Teacher", degree: "M.Sc. in Biology", email: "iftakherhossen@gmail.com" },
          { id: 8, img: "https://i.postimg.cc/mkYm4hBx/photo-6287089612149077878-y.jpg", name: "Sher Tapang", designation: "ICT Teacher", degree: "M.A. in ICT", email: "shertapang@gmail.com" },
          { id: 9, img: "https://i.postimg.cc/HWXZXv5S/photo-6287089612149077879-y.jpg", name: "Gaby Suarez", designation: "Sports Teacher", degree: "M.Sc. in Physical Education", email: "gabysuarez@gmail.com" },
          { id: 10, img: "https://i.postimg.cc/hjxr8hJJ/photo-6287089612149077881-y.jpg", name: "Zan Doan", designation: "Chemistry Teacher", degree: "M.Sc. in Chemistry", email: "zandoan@gmail.com" },
          { id: 11, img: "https://i.postimg.cc/VN2gbXNQ/photo-6287089612149077882-y.jpg", name: "Christopher Latif", designation: "Physics Teacher", degree: "M.Sc. in Physics", email: "christopherlatif@gmail.com" },
          { id: 12, img: "https://i.postimg.cc/QdxfLXzP/photo-6287089612149077883-y.jpg", name: "Henry Cavil", designation: "Agriculture Teacher", degree: "M.Sc. in Agriculture", email: "henrycavil@gmail.com" },
          { id: 13, img: "https://i.postimg.cc/SKnVsgkf/photo-6287089612149077884-y.jpg", name: "Olaf Scholz", designation: "History Teacher", degree: "M.A in History", email: "olascholz@gmail.com" },
          { id: 14, img: "https://i.postimg.cc/SRhGgq8g/photo-6287089612149077889-y.jpg", name: "Rahim Milton", designation: "Islam Teacher", degree: "M.A Islam Studies", email: "rahimmilton@gmail.com" },
          { id: 15, img: "https://i.postimg.cc/jSZd55Cb/photo-1567532939604-b6b5b0db2604.png", name: "Sania Chowdhury", designation: "Social Science Teacher", degree: "M.A in Sociology", email: "saniachowdhury@gmail.com" },
          { id: 16, img: "https://i.postimg.cc/7YqV7Hq6/photo-6287089612149077893-y.jpg", name: "António Costa", designation: "Finance Teacher", degree: "MBA in Finance", email: "antoniocosta@gmail.com" },
          { id: 17, img: "https://i.postimg.cc/d3jjXXjw/photo-6287089612149077894-y.jpg", name: "Mohammed bin Salman", designation: "Geography Teacher", degree: "M.A in Geography", email: "mohammedbinsalman@gmail.com" },
          { id: 18, img: "https://i.postimg.cc/3xcCP2m4/photo-1615109398623-88346a601842.jpg", name: "Shahin Khan", designation: "Religion Teacher", degree: "M.A in Religion & Ethics", email: "shahinkhan@gmail.com" },
          { id: 19, img: "https://i.postimg.cc/wBWbrKMH/female-2.jpg", name: "Suhana Khan", designation: "Art Teacher", degree: "M.A in Arts & Crafts", email: "shahinkhan@gmail.com" },
          { id: 20, img: "https://i.postimg.cc/J4yF63sg/istockphoto-1369508766-170667a.jpg", name: "Rehana Sharif", designation: "Higher Math Teacher", degree: "M.Sc in Applied Mathematics", email: "rehanasharif@gmail.com" },
     ],
     stuffs: [
          { id: 1, img: "https://i.postimg.cc/qB2wzmCp/photo-1595956553066-fe24a8c33395.jpg", name: "Justin Biber", designation: "Peon" },
          { id: 2, img: "https://i.postimg.cc/QMPmWwbd/photo-1542909168-82c3e7fdca5c.jpg", name: "Alan Walker", designation: "Care Taker" },
          { id: 3, img: "https://i.postimg.cc/8zZHpRSm/photo-6287089612149077900-y.jpg", name: "Selena Gomez", designation: "Care Taker" },
          { id: 4, img: "https://i.postimg.cc/8cT6FmqC/istockphoto-1200677760-612x612.jpg", name: "Bill Gates", designation: "Cleaner" },
          { id: 5, img: "https://i.postimg.cc/T1MtBn8q/photo-6287089612149077875-y.jpg", name: "Elon Musk", designation: "Cleaner" },
          { id: 6, img: "https://i.postimg.cc/bvM9bqdG/photo-6287089612149077899-y.jpg", name: "Arian Grande", designation: "Cleaner" },
          { id: 7, img: "https://i.postimg.cc/FFSDykyh/photo-6287089612149077897-y.jpg", name: "Tailor Swift", designation: "Driver" },
          { id: 8, img: "https://i.postimg.cc/7h1nd6y5/photo-1608389769338-3d5ceb3c1bc4.jpg", name: "Tom Cruise", designation: "Driver" },
     ],
     governingBody: [
          { id: 1, img: "https://i.postimg.cc/05X30XyD/istockphoto-1364917563-170667a.jpg",  name: "Justin Trudeau", designation: "Headteacher", email: "justintrudeau@gmail.com" },
          { id: 2, img: "https://i.postimg.cc/9FBLN4LZ/photo-6287089612149077880-y.jpg", name: "Nikoli Pashinyan", designation: "Foundation Governer", email: "nikolpashinyan@gmail.com" },
          { id: 3, img: "https://i.postimg.cc/CxkQYFHs/photo-1604822064782-86b012c1a8f7.jpg", name: "Joe Biden", designation: "Parent Governer", email: "joebiden@gmail.com" },
          { id: 5, img: "https://i.postimg.cc/D0NMf0MB/istockphoto-1348560795-170667a.jpg", name: "Katie Holmes", designation: "Stuff Governer", email: "katieholmes@gmail.com" },
          { id: 5, img: "https://i.postimg.cc/Z5bHzf1q/photo-6287089612149077898-y.jpg", name: "Li Keqiang", designation: "Associate Member", email: "likeqiang@gmail.com" },
          { id: 6, img: "https://i.postimg.cc/02LBL6mN/photo-1568602471122-7832951cc4c5.jpg", name: "Vladimir Putin", designation: "Local Governer", email: "vladimirputin@gmail.com" },
     ],
     notices: [
          { id: 1, name: "Notice Name", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", publishedAt: "01/12/2022" },
          { id: 2, name: "Notice Name", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.", publishedAt: "09/12/2022" },
          { id: 3, name: "Notice Name", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.", publishedAt: "15/12/2022" },
          { id: 4, name: "Notice Name", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.", publishedAt: "31/12/2022" },
          { id: 5, name: "Notice Name", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.", publishedAt: "01/01/2023" },
          { id: 6, name: "Notice Name", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.", publishedAt: "16/01/2023" },
          { id: 7, name: "Notice Name", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", publishedAt: "29/01/2023" }
     ],
     events: [
          { id: 1, name: "Event Name", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", publishedAt: "01/12/2022" },
          { id: 2, name: "Event Name", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.", publishedAt: "09/12/2022" },
          { id: 3, name: "Event Name", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.", publishedAt: "15/12/2022" }
     ],
     testimonials: [
          {
               id: 1,
               name: "Roger Scott",
               img: "https://preview.colorlib.com/theme/academia/images/person_1.jpg.webp",
               text: "If a dog chews shoes whose shoes does he choose? whose shoes does he choose? And Whose shoes does he choose?"
          },
          {
               id: 2,
               name: "Severas Snape",
               img: "https://preview.colorlib.com/theme/academia/images/person_2.jpg.webp",
               text: "If a dog chews shoes whose shoes does he choose? whose shoes does he choose? And Whose shoes does he choose?"
          },
          {
               id: 3,
               name: "Robin Milford",
               img: "https://preview.colorlib.com/theme/academia/images/person_3.jpg.webp",
               text: "If a dog chews shoes whose shoes does he choose? whose shoes does he choose? And Whose shoes does he choose?"
          },
     ],
     dashboardItems: [
          { title: "Dashboard Home", teachers: true },
          { title: "Manage Academic Info", teachers: true },
          { title: "Manage Notices" },
          { title: "Manage Testimonials" },
          { title: "Manage Events" },     
          { title: "Manage Stuffs" },
          { title: "Manage Admission Forms" },
          { title: "Create Account" }
     ],
};

export default database;