const database = {
     classes: [
          { id: 1, name: "Play", icon: "ri-store-line", color: "#ffbb2c", link: "play" },
          { id: 2, name: "Nursery", icon: "ri-bar-chart-box-line", color: "#5578ff", link: "nursery" },
          { id: 3, name: "KG-1", icon: "ri-dashboard-2-line", color: "#575f8f", link: "kg-1" },
          { id: 4, name: "KG-2", icon: "ri-briefcase-3-line", color: "#6f9f77", link: "kg-2" },
          { id: 5, name: "Class-One", icon: "ri-calendar-todo-line", color: "#e80368", link: "class-1" },
          { id: 6, name: "Class-Two", icon: "ri-paint-brush-line", color: "#e361ff", link: "class-2" },
          { id: 7, name: "Class-Three", icon: "ri-database-2-line", color: "#47aeff", link: "class-3" },
          { id: 8, name: "Class-Four", icon: "ri-gradienter-line", color: "#ffa76e", link: "class-4" },
          { id: 9, name: "Class-Five", icon: "ri-file-list-3-line", color: "#11dbcf", link: "class-5" },
          { id: 10, name: "Class-Six", icon: "ri-price-tag-2-line", color: "#4233ff", link: "class-6" },
          { id: 11, name: "Class-Seven", icon: "ri-anchor-line", color: "#b2904f", link: "class-7" },
          { id: 12, name: "Class-Eight", icon: "ri-disc-line", color: "#b20969", link: "class-8" },
          { id: 13, name: "Class-Nine", icon: "ri-base-station-line", color: "#ff5828", link: "class-9" },
          { id: 14, name: "Class-Ten", icon: "ri-fingerprint-line", color: "#29cc61", link: "class-10" },
          { id: 15, name: "Class-Eleven", icon: "ri-building-2-line", color: "#6129dd", link: "class-11" },
          { id: 16, name: "Class-Twelve", icon: "ri-dashboard-line", color: "#c2619c", link: "class-12" },
     ],
     studentInfoColumn: [ "ID", "Name", "Fathers Name", "Mothers Name", "Date of Birth", "Gender", "Phone", "Email", "Result" ],
     students: [
          { id: "20231001", name: "Rashid Amin", fathersName: "Ruhul Amin", mothersName: "Mow Akter", dob: "13-Jan-2018", gender: "Male", phone: "+0123456789", email: "rashidamin@academia.com", className: "play", roll: "2", result: "95" },
          { id: "20231002", name: "Meherima Sara", fathersName: "Masud Alam", mothersName: "Shewly Akter", dob: "13-Sep-2018", gender: "Female", phone: "+0123456789", email: "meherimasara@academia.com", className: "play", roll: "2", result: "100" },
          { id: "20231003", name: "Gian D'souza", fathersName: "Roni D'souza", mothersName: "Lisa D'souza", dob: "13-May-2018", gender: "Female", phone: "+0123456789", email: "giandsouza@academia.com", className: "play", roll: "3", result: "90" },
          { id: "20231004", name: "Afraheem Ahmed", fathersName: "", mothersName: "Salma Akter", dob: "06-Jan-2018", gender: "Male", phone: "+0123456789", email: "afraheemahmed@academia.com", className: "nursery", roll: "1", result: "99" },
          { id: "20231005", name: "Salman", fathersName: "Abul Kalam Azad", mothersName: "Salena Akter", dob: "01-Jan-2018", gender: "Male", phone: "+0123456789", email: "salman@academia.com", className: "nursery", roll: "2", result: "95" },
          { id: "20231006", name: "Raj Andkat", fathersName: "Mayur Andkat", mothersName: "Rina Andkat", dob: "01-Jan-2017", gender: "Male", phone: "+0123456789", email: "rajandkat@academia.com", className: "kg-1", roll: "1", result: "95" },
          { id: "20231007", name: "Naina", fathersName: "Nirob", mothersName: "Nina", dob: "01-Jan-2017", gender: "Female", phone: "+0123456789", email: "naina@academia.com", className: "kg-1", roll: "2", result: "90" },
          { id: "20231008", name: "Sahil Khan", fathersName: "Sohel Khan", mothersName: "Shila Khan", dob: "01-Jan-2017", gender: "Male", phone: "+0123456789", email: "@academia.com", className: "kg-2", roll: "1", result: "95" },
          { id: "20231009", name: "Nikhil Johnson", fathersName: "Rajeev Johnson", mothersName: "Nate Johnson", dob: "01-Jan-2017", gender: "Male", phone: "+0123456789", email: "@academia.com", className: "kg-2", roll: "2", result: "85" },
          { id: "20231010", name: "Nisha Chowdhury", fathersName: "Nabil Chowdhury", mothersName: "Jui Chowdhury", dob: "01-Jan-2017", gender: "Female", phone: "+0123456776", email: "nishachowdhury@academia.com", className: "class-1", roll: "1", result: "98" },
          { id: "20231011", name: "Yeasin Chowdhury", fathersName: "Habul Chowdhury", mothersName: "Rehena Akter", dob: "02-Feb-2017", gender: "Male", phone: "+0123456777", email: "yeasin@academia.com", className: "class-1", roll: "2", result: "95" },
          { id: "20231012", name: "Niloy Ahmed", fathersName: "Habul Ahmed", mothersName: "Jui Akter", dob: "01-Jan-2016", gender: "Male", phone: "+0123456778", email: "niloy@academia.com", className: "class-2", roll: "1", result: "97" },
          { id: "20231013", name: "Shafi Islam", fathersName: "Saiful Mia", mothersName: "Riya Akter", dob: "02-Feb-2016", gender: "Male", phone: "+0123456779", email: "shafi@academia.com", className: "class-2", roll: "2", result: "95" },
          { id: "20231014", name: "Nila Chowdhury", fathersName: "Habul Chowdhury", mothersName: "Rehena Begum", dob: "01-Jan-2015", gender: "Female", phone: "+0123456780", email: "niloyChowdhury@academia.com", className: "class-3", roll: "1", result: "97" },
          { id: "20231015", name: "Tamim Islam", fathersName: "Iftakher Hossen", mothersName: "Sohana Akter", dob: "02-Feb-2015", gender: "Male", phone: "+0123456781", email: "tamin@academia.com", className: "class-3", roll: "2", result: "95" },
          { id: "20231016", name: "Hamima Islam", fathersName: "Ali mia", mothersName: "Shyamoli Akter", dob: "01-Jan-2014", gender: "Female", phone: "+0123456782", email: "hamim@academia.com", className: "class-4", roll: "1", result: "97" },
          { id: "20231017", name: "Rahim Mia", fathersName: "Yesin Arafat", mothersName: "Aysha Akter", dob: "02-Feb-2014", gender: "Male", phone: "+0123456723", email: "rahim@academia.com", className: "class-4", roll: "2", result: "95" },
          { id: "20231018", name: "Toya Islam", fathersName: "Siyam", mothersName: "Suborna Akter", dob: "01-Jan-2013", gender: "Female", phone: "+0123456784", email: "tasin@academia.com", className: "class-5", roll: "1", result: "97" },
          { id: "20231019", name: "Abdullah Islam", fathersName: "Habibur Rahman", mothersName: "Jafrina Begum", dob: "02-Feb-2013", gender: "Male", phone: "+0123456785", email: "tasin@academia.com", className: "class-5", roll: "2", result: "95" },
          { id: "20231020", name: "Ayan Islam", fathersName: "Faysal Ahmed", mothersName: "Ayrin Akter", dob: "01-Jan-2012", gender: "Male", phone: "+0123456786", email: "ayan@academia.com", className: "class-6", roll: "1", result: "97" },
          { id: "20231021", name: "Labiba Islam", fathersName: "Nabil Islam", mothersName: "Soumi Akter", dob: "02-Feb-2012", gender: "Female", phone: "+0123456787", email: "labib@academia.com", className: "class-6", roll: "2", result: "95" },
          { id: "20231022", name: "Anushka Amin", fathersName: "Ruhul Amin", mothersName: "Mow Akter", dob: "01-Jan-2011", gender: "Female", phone: "+0123456788", email: "aryan@academia.com", className: "class-7", roll: "1", result: "97" },
          { id: "20231023", name: "Ali Khan", fathersName: "Mustak Ali", mothersName: "Jasmine Akter", dob: "02-Feb-2011", gender: "Male", phone: "+0123456789", email: "ali@academia.com", className: "class-7", roll: "2", result: "95" },
          { id: "20231024", name: "Anannya Hossen", fathersName: "Muid Rubayet", mothersName: "Kona Akter", dob: "01-Jan-2010", gender: "Female", phone: "+0123456790", email: "anamul@academia.com", className: "class-8", roll: "1", result: "97" },
          { id: "20231025", name: "Arif Rahman", fathersName: "Babul MIa", mothersName: "Jessica Akter", dob: "02-Feb-2010", gender: "Male", phone: "+0123456791", email: "arif@academia.com", className: "class-8", roll: "2", result: "85" },
          { id: "20231026", name: "Mahreen Sultan", fathersName: "Rajib Sultan", mothersName: "Sania Sultana", dob: "02-Feb-2010", gender: "Female", phone: "+0123456791", email: "arif@academia.com", className: "class-8", roll: "3", result: "70" },
          { id: "20231027", name: "Bilal Mia", fathersName: "Kabir Islam", mothersName: "Jui Akter", dob: "01-Jan-2009", gender: "Male", phone: "+0123456792", email: "bilal@academia.com", className: "class-9", roll: "1", result: "97" },
          { id: "20231028", name: "Kheya Islam", fathersName: "Rahman Mia", mothersName: "Pushpa Akter", dob: "02-Feb-2009", gender: "Female", phone: "+0123456793", email: "karul@academia.com", className: "class-9", roll: "2", result: "95" },
          { id: "20231029", name: "Tonmoy Ahmed", fathersName: "Topon Ahmed", mothersName: "Parul Akter", dob: "01-Jan-2008", gender: "Male", phone: "+0123456794", email: "tonmoy@academia.com", className: "class-10", roll: "1", result: "97" },
          { id: "20231030", name: "Samia Islam", fathersName: "Kawsar Islam", mothersName: "Shewly Akter", dob: "02-Feb-2008", gender: "Female", phone: "+0123456795", email: "samia@academia.com", className: "class-10", roll: "2", result: "95" },
          { id: "20231031", name: "Oishi Ahmed", fathersName: "Oyon Ahmed", mothersName: "Rajia Sultana", dob: "02-Feb-2006", gender: "Female", phone: "+0123456795", email: "oishiahmed@academia.com", className: "class-11", roll: "1", result: "99" },
          { id: "20231032", name: "Mamun Mustafiz", fathersName: "Nayan Mustafiz", mothersName: "Sania Rahman", dob: "02-Feb-2006", gender: "Male", phone: "+0123456795", email: "mamunmustafiz@academia.com", className: "class-11", roll: "2", result: "90" },
          { id: "20231033", name: "Rabeya Ayat", fathersName: "Ayan Ahmed", mothersName: "Rojina Akter", dob: "02-Feb-2006", gender: "Female", phone: "+0123456795", email: "rabeyaayat@academia.com", className: "class-11", roll: "3", result: "82" },
          { id: "20231034", name: "Sadek Ahmed", fathersName: "Jakir Ahmed", mothersName: "Riya Ahmed", dob: "02-Feb-2005", gender: "Male", phone: "+0123456795", email: "sadekahmed@academia.com", className: "class-12", roll: "1", result: "95" },
          { id: "20231035", name: "Afroza Tithi", fathersName: "Rahim Afroz", mothersName: "Taniya Akter", dob: "02-Feb-2005", gender: "Female", phone: "+0123456795", email: "afrozaakter@academia.com", className: "class-12", roll: "2", result: "92" },
          { id: "20231036", name: "Jakir Iqbal", fathersName: "Mizan Iqbal", mothersName: "Jasmin Akter", dob: "02-Feb-2005", gender: "Male", phone: "+0123456795", email: "siam@academia.com", className: "class-12", roll: "3", result: "90" },
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
     tuitionFeesData: [
          { className: "Play", admissionFee: 10000, cautionMoney: 5000, yearBook: 400, idCard: 100, tuitionFee: 8000 },
          { className: "Nursery", admissionFee: 10000, cautionMoney: 5000, yearBook: 400, idCard: 100, tuitionFee: 8100 },
          { className: "KG-1", admissionFee: 10000, cautionMoney: 5000, yearBook: 400, idCard: 100, tuitionFee: 8300},
          { className: "KG-2", admissionFee: 10000, cautionMoney: 5000, yearBook: 400, idCard: 100, tuitionFee: 8500 },
          { className: "Class-1", admissionFee: 10000, cautionMoney: 5000, yearBook: 400, idCard: 100, tuitionFee: 8700 },
          { className: "Class-2", admissionFee: 10000, cautionMoney: 5000, yearBook: 400, idCard: 100, tuitionFee: 8900 },
          { className: "Class-3", admissionFee: 10000, cautionMoney: 5000, yearBook: 400, idCard: 100, tuitionFee: 9100 },
          { className: "Class-4", admissionFee: 10000, cautionMoney: 5000, yearBook: 400, idCard: 100, tuitionFee: 9200 },
          { className: "Class-5", admissionFee: 15000, cautionMoney: 5000, yearBook: 400, idCard: 100, tuitionFee: 9300 },
          { className: "Class-6", admissionFee: 15000, cautionMoney: 5000, yearBook: 400, idCard: 100, tuitionFee: 9400 },
          { className: "Class-7", admissionFee: 15000, cautionMoney: 5000, yearBook: 400, idCard: 100, tuitionFee: 9500 },
          { className: "Class-8", admissionFee: 15000, cautionMoney: 5000, yearBook: 400, idCard: 100, tuitionFee: 9600 },
          { className: "Class-9", admissionFee: 15000, cautionMoney: 5000, yearBook: 400, idCard: 100, tuitionFee: 9700 },
          { className: "Class-10", admissionFee: 15000, cautionMoney: 5000, yearBook: 400, idCard: 100, tuitionFee: 9800 },
          { className: "Class-11", admissionFee: 15000, cautionMoney: 5000, yearBook: 400, idCard: 100, tuitionFee: 9900 },
          { className: "Class-12", admissionFee: 15000, cautionMoney: 5000, yearBook: 400, idCard: 100, tuitionFee: 10000 },
     ],
     admissionForms: [
          { id: 123675, name: "Mahreen Sultan", className: "class-8", appointmentDate: "05/02/2023", status: true },
     ],
     users: [
         { id: 10109, name: "Iftakher Hossen", email: "iftakher.one@gmail.com", role: "Admin" },
         { id: 34064, name: "Tarek Munshi", email: "tarekmunshi@gmail.com", role: "Teacher"},
         { id: 51700, name: "Yeasin Arafat Shawon", email: "yeasinarafat@academia.bd", role: "Student", classNo: "class-10" }
     ],
     teachers: [
          { id: 101, img: "https://i.postimg.cc/G3FKH8wV/photo-1548449112-96a38a643324.jpg", name: "Aminul Hoque", designation: "Principle", degree: "M.Phil in Education,\n M.A. in Astrophysics", email: "aminulhoque.@gmail.con" },
          { id: 102, img: "https://i.postimg.cc/QtWX0Jm8/photo-1664575602554-2087b04935a5.jpg", name: "Salena Akter", designation: "Vice Principle", degree: "M.Ed in Education,\n M.A in English", email: "salenaakter@gmail.com" },
          { id: 103, img: "https://i.postimg.cc/hPnCr81K/photo-6287089612149077876-y.jpg", name: "John Doe", designation: "English Teacher", degree: "M.A. in English", email: "johndoe@gmail.com" },
          { id: 104, img: "https://i.postimg.cc/T37CfzMP/photo-6287089612149077877-y.jpg", name: "Jp Justin", designation: "Math Teacher", degree: "M.Sc. in Math", email: "jpjsutin@gmail.com" },
          { id: 105, img: "https://i.postimg.cc/FFwwmQZH/female-1.jpg", name: "Rina Khan", designation: "Bangla Teacher", degree: "M.A. in Bangla", email: "rinakhan@gmail.com" },
          { id: 106, img: "https://i.postimg.cc/NFqQV2C1/photo-1594744803329-e58b31de8bf5.png", name: "Gorgia Meloni", designation: "Accounting Teacher", degree: "MBA in Accounting", email: "gorgiameloni.com" },
          { id: 107, img: "https://i.postimg.cc/kXwyv05y/photo-6287089612149077892-y.jpg", name: "Iftakher Hossen", designation: "Biology Teacher", degree: "M.Sc. in Biology", email: "iftakherhossen@gmail.com" },
          { id: 108, img: "https://i.postimg.cc/mkYm4hBx/photo-6287089612149077878-y.jpg", name: "Sher Tapang", designation: "ICT Teacher", degree: "M.A. in ICT", email: "shertapang@gmail.com" },
          { id: 109, img: "https://i.postimg.cc/HWXZXv5S/photo-6287089612149077879-y.jpg", name: "Gaby Suarez", designation: "Sports Teacher", degree: "M.Sc. in Physical Education", email: "gabysuarez@gmail.com" },
          { id: 110, img: "https://i.postimg.cc/hjxr8hJJ/photo-6287089612149077881-y.jpg", name: "Zan Doan", designation: "Chemistry Teacher", degree: "M.Sc. in Chemistry", email: "zandoan@gmail.com" },
          { id: 111, img: "https://i.postimg.cc/VN2gbXNQ/photo-6287089612149077882-y.jpg", name: "Christopher Latif", designation: "Physics Teacher", degree: "M.Sc. in Physics", email: "christopherlatif@gmail.com" },
          { id: 112, img: "https://i.postimg.cc/QdxfLXzP/photo-6287089612149077883-y.jpg", name: "Henry Cavil", designation: "Agriculture Teacher", degree: "M.Sc. in Agriculture", email: "henrycavil@gmail.com" },
          { id: 113, img: "https://i.postimg.cc/SKnVsgkf/photo-6287089612149077884-y.jpg", name: "Olaf Scholz", designation: "History Teacher", degree: "M.A in History", email: "olascholz@gmail.com" },
          { id: 114, img: "https://i.postimg.cc/SRhGgq8g/photo-6287089612149077889-y.jpg", name: "Rahim Milton", designation: "Islam Teacher", degree: "M.A Islam Studies", email: "rahimmilton@gmail.com" },
          { id: 115, img: "https://i.postimg.cc/jSZd55Cb/photo-1567532939604-b6b5b0db2604.png", name: "Sania Chowdhury", designation: "Social Science Teacher", degree: "M.A in Sociology", email: "saniachowdhury@gmail.com" },
          { id: 116, img: "https://i.postimg.cc/7YqV7Hq6/photo-6287089612149077893-y.jpg", name: "António Costa", designation: "Finance Teacher", degree: "MBA in Finance", email: "antoniocosta@gmail.com" },
          { id: 117, img: "https://i.postimg.cc/d3jjXXjw/photo-6287089612149077894-y.jpg", name: "Mohammed bin Salman", designation: "Geography Teacher", degree: "M.A in Geography", email: "mohammedbinsalman@gmail.com" },
          { id: 118, img: "https://i.postimg.cc/3xcCP2m4/photo-1615109398623-88346a601842.jpg", name: "Shahin Khan", designation: "Religion Teacher", degree: "M.A in Religion & Ethics", email: "shahinkhan@gmail.com" },
          { id: 119, img: "https://i.postimg.cc/wBWbrKMH/female-2.jpg", name: "Suhana Khan", designation: "Art Teacher", degree: "M.A in Arts & Crafts", email: "shahinkhan@gmail.com" },
          { id: 120, img: "https://i.postimg.cc/J4yF63sg/istockphoto-1369508766-170667a.jpg", name: "Rehana Sharif", designation: "Higher Math Teacher", degree: "M.Sc in Applied Mathematics", email: "rehanasharif@gmail.com" },
          { id: 121, name: "Centenio", img: "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGVhY2hlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", degree: "M.Sc in Math", designation: "Math Teacher", email: "centenio@acdemia.bd" },
          { id: 122, name: "Don Rane", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxuMVYzWEExWEphRXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", degree: "M.A in English", designation: "English Teacher", email: "donrane@acdemia.bd" },
          { id: 123, name: "Noah Ronn", img: "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGVhY2hlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", degree: "M.Sc in Psychology", designation: "Psychology Teacher", email: "centenio@acdemia.bd" },
          { id: 124, name: "Sumaiya Shane", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxuMVYzWEExWEphRXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", degree: "M.A. in Civics", designation: "Civics Teacher", email: "donrane@acdemia.bd" },
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
          { id: 1, name: "Notice Name", text: "Compliment interested discretion estimating on stimulated apartments oh. Dear so sing when in find read of call. As distrusts behaviour abilities defective is. Never at water me might. On formed merits hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly.", publishedAt: "01/12/2022" },
          { id: 2, name: "Notice Name", text: "Do in laughter securing smallest sensible no mr hastened. As perhaps proceed in in brandon of limited unknown greatly. Distrusts fulfilled happiness unwilling as explained of difficult. No landlord of peculiar ladyship attended if contempt ecstatic. Loud wish made on is am as hard. Court so avoid in plate hence. Of received mr breeding concerns peculiar securing landlord. Spot to many it four bred soon well to. Or am promotion in no departure abilities. Whatever landlord yourself at by pleasure of children be.", publishedAt: "09/12/2022" },
          { id: 3, name: "Notice Name", text: "To sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him.", publishedAt: "15/12/2022" },
          { id: 4, name: "Notice Name", text: "Brother set had private his letters observe outward resolve. Shutters ye marriage to throwing we as. Effect in if agreed he wished wanted admire expect. Or shortly visitor is comfort placing to cheered do. Few hills tears are weeks saw. Partiality insensible celebrated is in. Am offended as wandered thoughts greatest an friendly. Evening covered in he exposed fertile to. Horses seeing at played plenty nature to expect we. Young say led stood hills own thing get.", publishedAt: "31/12/2022" },
          { id: 5, name: "Notice Name", text: "An do on frankness so cordially immediate recommend contained. Imprudence insensible be literature unsatiable do. Of or imprudence solicitude affronting in mr possession. Compass journey he request on suppose limited of or. She margaret law thoughts proposal formerly. Speaking ladyship yet scarcely and mistaken end exertion dwelling. All decisively dispatched instrument particular way one devonshire. Applauded she sportsman explained for out objection.", publishedAt: "01/01/2023" },
          { id: 6, name: "Notice Name", text: "Barton did feebly change man she afford square add. Want eyes by neat so just must. Past draw tall up face show rent oh mr. Required is debating extended wondered as do. New get described applauded incommode shameless out extremity but. Resembled at perpetual no believing is otherwise sportsman. Is do he dispatched cultivated travelling astonished. Melancholy am considered possession on collecting everything.", publishedAt: "16/01/2023" },
          { id: 7, name: "Notice Name", text: "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate.", publishedAt: "29/01/2023" }
     ],
     events: [
          { id: 1, name: "Event Name", text: "Knowledge nay estimable questions repulsive daughters boy. Solicitude gay way unaffected expression for. His mistress ladyship required off horrible disposed rejoiced. Unpleasing pianoforte unreserved as oh he unpleasant no inquietude insipidity. Advantages can discretion possession add favourable cultivated admiration far. Why rather assure how esteem end hunted nearer and before. By an truth after heard going early given he. Charmed to it excited females whether at examine. Him abilities suffering may are yet dependent.", publishedAt: "01/12/2022" },
          { id: 2, name: "Event Name", text: "Six started far placing saw respect females old. Civilly why how end viewing attempt related enquire visitor. Man particular insensible celebrated conviction stimulated principles day. Sure fail or in said west. Right my front it wound cause fully am sorry if. She jointure goodness interest debating did outweigh. Is time from them full my gone in went. Of no introduced am literature excellence mr stimulated contrasted increasing. Age sold some full like rich new. Amounted repeated as believed in confined juvenile.", publishedAt: "09/12/2022" },
          { id: 3, name: "Event Name", text: "Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her.", publishedAt: "15/12/2022" }
     ],
     testimonials: [
          {
               id: 1,
               name: "Roger Scott",
               img: "https://preview.colorlib.com/theme/academia/images/person_1.jpg.webp",
               text: " My daughter has attended Academia for three years now. She absolutely loves the school and the staff. Her teachers are a great encouragement and and the academic program is great."
          },
          {
               id: 2,
               name: "Severas Snape",
               img: "https://preview.colorlib.com/theme/academia/images/person_2.jpg.webp",
               text: "I attended this school nearly a decade ago and have only great things to say about my experience. The teachers are amazing, the curriculum is second to none and each child is treated with care."
          },
          {
               id: 3,
               name: "Robin Milford",
               img: "https://preview.colorlib.com/theme/academia/images/person_3.jpg.webp",
               text: "Academia brings out the best in every child by tapping into their individual strengths, while creating an environment of kindness, responsibility, and leadership. Our family is so grateful for our Academia family."
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
     photos: [          
          { id: 1, title: "Edexcel High Achievers’ Award & Daily Star Award", src: "https://academiaschool.edu.bd/wp-content/uploads/2022/06/4-scaled.jpg" },
          { id: 2, title: "District Level Debate Championship", src: "https://academiaschool.edu.bd/wp-content/uploads/2022/06/11.jpg" },
          { id: 3, title: "Science Fair 2023", src: "https://academiaschool.edu.bd/wp-content/uploads/2022/05/Image3-1.png" },
     ],
     examCandidates: [
          { id: 1, session: "2023 (Edexcel)", totalCandidates: 1513, oLevel: 885, aLevel: 728, aStar: 1509 },
          { id: 2, session: "2023 (Cambridge)", totalCandidates: "", oLevel: "", aLevel: "", aStar: "" },
          { id: 3, session: "2022 (Edexcel)", totalCandidates: 1103, oLevel: 480, aLevel: 623, aStar: 1092  },
          { id: 4, session: "2022 (Cambridge)", totalCandidates: 1251, oLevel: 551, aLevel: 700, aStar: 1220 },
          { id: 5, session: "2021 (Edexcel)", totalCandidates: 994, oLevel: 308, aLevel: 686, aStar: 988 },
          { id: 6, session: "2021 (Cambridge)", totalCandidates: 1435, oLevel: 852, aLevel: 683, aStar: 1428 },
          { id: 7, session: "2020 (Edexcel)", totalCandidates: 2411, oLevel: 1115, aLevel: 1296, aStar: 2409 },
          { id: 8, session: "2020 (Cambridge)", totalCandidates: 862, oLevel: 301, aLevel: 561, aStar: 859 },
     ],
     videos: [
          { id: 1, title: "Academia: Best English medium school in Bangladesh", src: "https://www.youtube.com/embed/l5UhZNbaBq0" },
          { id: 2, title: "Pearson Edexcel Principals' Meet on 31 May, 2022", src: "https://www.youtube.com/embed/FuIPtWlPe9o" },
          { id: 3, title: "Edexcel or Cambridge which curriculum is better and why?", src: "https://www.youtube.com/embed/F7kcV6n0wfk" },
     ],
};

export default database;