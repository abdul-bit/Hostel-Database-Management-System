\c hostel
INSERT INTO Mess(Mess_ID , MName , Capacity , Veg_NonVeg) VALUES (1,'Namdhari Foods', 250 , 'V');
INSERT INTO Mess(Mess_ID , MName , Capacity , Veg_NonVeg) VALUES (2,'Food Court', 500 , 'N');
INSERT INTO Mess(Mess_ID , MName , Capacity , Veg_NonVeg) VALUES (3,'Hostel Mess', 700 , 'N');


INSERT INTO Room(Room_ID ,Room_Type_Sharing , Attached_Bath) VALUES (101 , 1 , 'N'); 
INSERT INTO Room(Room_ID ,Room_Type_Sharing , Attached_Bath) VALUES (102 , 1 , 'N');

INSERT INTO Room(Room_ID ,Room_Type_Sharing , Attached_Bath) VALUES (110 , 1 , 'N');
INSERT INTO Room(Room_ID ,Room_Type_Sharing , Attached_Bath) VALUES (111 , 3 , 'N'); 
INSERT INTO Room(Room_ID ,Room_Type_Sharing , Attached_Bath) VALUES (112 , 6 , 'N'); 

INSERT INTO Room(Room_ID ,Room_Type_Sharing , Attached_Bath) VALUES (402 , 2 , 'N');
INSERT INTO Room(Room_ID ,Room_Type_Sharing , Attached_Bath) VALUES (403 , 2 , 'N');

INSERT INTO Room(Room_ID ,Room_Type_Sharing , Attached_Bath) VALUES (222, 1 , 'Y');
INSERT INTO Room(Room_ID ,Room_Type_Sharing , Attached_Bath) VALUES (223, 2 , 'Y');

INSERT INTO Room(Room_ID ,Room_Type_Sharing , Attached_Bath) VALUES (801 , 3 , 'Y');
INSERT INTO Room(Room_ID ,Room_Type_Sharing , Attached_Bath) VALUES (802 , 3 , 'Y');

INSERT INTO Room(Room_ID ,Room_Type_Sharing , Attached_Bath) VALUES (412 , 3, 'Y');
INSERT INTO Room(Room_ID ,Room_Type_Sharing , Attached_Bath) VALUES (413 , 3 , 'Y');


INSERT INTO Block(Block_ID , BName , No_of_Rooms , Capacity) VALUES (1, 'IH' , 200 , 200 );
INSERT INTO Block(Block_ID , BName , No_of_Rooms , Capacity) VALUES (2, 'IT' , 60 , 200 );
INSERT INTO Block(Block_ID , BName , No_of_Rooms , Capacity) VALUES (3, 'MESS' , 100 , 200 );
INSERT INTO Block(Block_ID , BName , No_of_Rooms , Capacity) VALUES (4, 'MM' , 50 , 80 );
INSERT INTO Block(Block_ID , BName , No_of_Rooms , Capacity) VALUES (5, 'NB' , 200 , 600 );
INSERT INTO Block(Block_ID , BName , No_of_Rooms , Capacity) VALUES (6, 'NBX' , 35 , 105 );


INSERT INTO Department(Dept_ID, DName, No_of_Emp)
VALUES (1, 'Housekeeping', 20);
INSERT INTO Department(Dept_ID, DName, No_of_Emp)
VALUES (2, 'Plumbing', 15);
INSERT INTO Department(Dept_ID, DName, No_of_Emp)
VALUES (3, 'Laundry', 15);
INSERT INTO Department(Dept_ID, DName, No_of_Emp)
VALUES (4, 'Electrician', 10);
INSERT INTO Department(Dept_ID, DName, No_of_Emp)
VALUES (5, 'Medical', 5);
INSERT INTO Department(Dept_ID, DName, No_of_Emp)
VALUES (6, 'Administration', 20);
INSERT INTO Department(Dept_ID, DName, No_of_Emp)
VALUES (7, 'Hostel Bakery', 10);


INSERT INTO Student(Fname, Minit, Lname, SRN, DOB, Addr, Sex, Email, CGPA, Fees, Attendance, Mess_ID, Room_ID)
VALUES ('Alex', 'M', 'Manjakunnel', 'PES1UG19CS047', '30-06-2001', 'Whitefield', 'M' , 'amanjakunnel@gmail.com',8.43, 320000, 99 , 3 , 802);
INSERT INTO Student(Fname, Minit, Lname, SRN, DOB, Addr, Sex, Email, CGPA, Fees, Attendance, Mess_ID, Room_ID)
VALUES ('Abdul Rahman', 'A', 'Shigihalli', 'PES1UG19CS009', '24-08-2001', 'Banashankari', 'M' , 'iamnotabdul@gmail.com', 7.43 ,110573 , 98 , 2 , 101);
INSERT INTO Student(Fname, Minit, Lname, SRN, DOB, Addr, Sex, Email, CGPA, Fees, Attendance, Mess_ID, Room_ID)
VALUES ('Raj', 'M', 'Gandhi', 'PES1UG19CS035', '01-06-2000', 'Kolkata', 'M' , 'rajpatty@gmail.com', 8.49 , 320000, 97, 3 , 102);
INSERT INTO Student(Fname, Minit, Lname, SRN, DOB, Addr, Sex, Email, CGPA, Fees, Attendance, Mess_ID, Room_ID)
VALUES ('Eren', 'G', 'Yeager', 'PES1UG19CS067', '30-01-2000', 'Shiganshina', 'M' , 'freedomrocks@gmail.com', 6.55 , 320000, 99 , 1 , 110);
INSERT INTO Student(Fname, Minit, Lname, SRN, DOB, Addr, Sex, Email, CGPA, Fees, Attendance, Mess_ID, Room_ID)
VALUES ('Gopalcharan', 'R', 'Prabhu', 'PES1UG19EC042', '05-09-2001', 'Kundapura', 'M' , 'prabhmam@gmail.com', 7.4 , 500000, 99 , 3 , 111);
INSERT INTO Student(Fname, Minit, Lname, SRN, DOB, Addr, Sex, Email, CGPA, Fees, Attendance, Mess_ID, Room_ID)
VALUES ('Ankit', 'M', 'Emmi', 'PES1UG19ME034', '03-07-2001', 'Belgaum', 'M' , 'ankitemmi@gmail.com', 4.2, 110573, 67 , 1 , 222);
INSERT INTO Student(Fname, Minit, Lname, SRN, DOB, Addr, Sex, Email, CGPA, Fees, Attendance, Mess_ID, Room_ID)
VALUES ('Vipul', 'M', 'Bharadwaj', 'PES1UG19CS137', '10-03-2001', 'Mysore', 'M' , 'vipullqma@gmail.com', 6.81 , 320000, 97 , 2 , 802);
INSERT INTO Student(Fname, Minit, Lname, SRN, DOB, Addr, Sex, Email, CGPA, Fees, Attendance, Mess_ID, Room_ID)
VALUES ('Akshay', 'S', 'Rajput', 'PES1UG19CS087', '15-08-2001', 'Amritsar', 'M' , 'rajputroxx@gmail.com', 7.48 , 700000, 99 , 3 , 413);


INSERT INTO Employee(Fname, Minit, Lname, aadhaar, DOB, Addr ,Sex, Salary, Super_ID, Mess_ID, D_ID)
VALUES ('Tun', 'T', 'Mausi', 367264738475, '02-03-1988','Delhi','F', 10000, 367264738475, 1, 1);
INSERT INTO Employee(Fname, Minit, Lname, aadhaar, DOB, Addr ,Sex, Salary, Super_ID, Mess_ID, D_ID)
VALUES ('Raj', 'M', 'Kapoor', 347764839469, '22-06-1979', 'Noida','M', 7000, 367264738475, 2, 1);
INSERT INTO Employee(Fname, Minit, Lname, aadhaar, DOB, Addr ,Sex, Salary, Super_ID, Mess_ID, D_ID)
VALUES ('Tushar', 'Y', 'Shetty', 987845676875, '29-09-1973', 'Mangalore', 'M', 8000, 367264738475, 3, 1);
INSERT INTO Employee(Fname, Minit, Lname, aadhaar, DOB, Addr ,Sex, Salary, Super_ID, Mess_ID, D_ID)
VALUES ('Prikshith', 'T', 'Rajput', 765609873456, '14-12-1977','Bangalore','M', 15000, 367264738475, 3, 1);
INSERT INTO Employee(Fname, Minit, Lname, aadhaar, DOB, Addr ,Sex, Salary, Super_ID, Mess_ID, D_ID)
VALUES ('Param', 'V', 'Rajgopalan', 567834560987, '09-04-1972','Amritsar','M', 20000, 765609873456, 2, 5);
INSERT INTO Employee(Fname, Minit, Lname, aadhaar, DOB, Addr ,Sex, Salary, Super_ID, Mess_ID, D_ID)
VALUES ('Vignesh', 'M', 'Shenoy', 876534566789, '02-07-1969', 'Kolkata','M', 22000, 765609873456, 1, 5);
INSERT INTO Employee(Fname, Minit, Lname, aadhaar, DOB, Addr ,Sex, Salary, Super_ID, Mess_ID, D_ID)
VALUES ('Pramith', 'K', 'Desai', 456734567890, '05-09-1992', 'Bhopal', 'M', 24000, 456734567890, 2, 7);
INSERT INTO Employee(Fname, Minit, Lname, aadhaar, DOB, Addr ,Sex, Salary, Super_ID, Mess_ID, D_ID)
VALUES ('Rajpal', 'U', 'Yadhav', 987654323456, '08-10-1989', 'Bangalore ','M', 30000, 987654323456, 3, 6);


INSERT INTO Parent (SRN, Fname, Minit, Lname, Addr, Email, Occupation)
VALUES ('PES1UG19CS047', 'Michael', 'C', 'Manjakunnel', 'Whitefield', 'mc@gmail.com', 'Consultant');
INSERT INTO Parent (SRN, Fname, Minit, Lname, Addr, Email, Occupation)
VALUES ('PES1UG19CS009', 'Abdul', 'M', 'Shigihalli', 'Dharwad', 'karimms1@gmail.com', 'Manager');
INSERT INTO Parent (SRN, Fname, Minit, Lname, Addr, Email, Occupation)
VALUES ('PES1UG19CS035', 'Mahadev', 'C', 'Gandhi', 'Kolkata', 'mcgd@gmail.com', 'Business');
INSERT INTO Parent (SRN, Fname, Minit, Lname, Addr, Email, Occupation)
VALUES ('PES1UG19CS067', 'Grisha', 'Y', 'Yeager', 'Shiganshina', 'grishac@gmail.com', 'Contractor');
INSERT INTO Parent (SRN, Fname, Minit, Lname, Addr, Email, Occupation)
VALUES ('PES1UG19EC042', 'Rajeev', 'C', 'Prabhu', 'Kundapur', 'prabhurajeev@gmail.com', 'Teacher');
INSERT INTO Parent (SRN, Fname, Minit, Lname, Addr, Email, Occupation)
VALUES ('PES1UG19ME034', 'Sohan', 'C', 'Emmi', 'Belgaum', 'haamman@gmail.com', 'Accountant');
INSERT INTO Parent (SRN, Fname, Minit, Lname, Addr, Email, Occupation)
VALUES ('PES1UG19CS137', 'Murty', 'K', 'Bharadwaj', 'Mysore', 'bharadwajservices@gmail.com', 'Business');
INSERT INTO Parent (SRN, Fname, Minit, Lname, Addr, Email, Occupation)
VALUES ('PES1UG19CS087', 'Pratap', 'S', 'Rajput', 'Amritsar', 'rajputandsons@gmail.com', 'Engineer');


INSERT INTO Belongs_To (Block_ID, R_ID)
VALUES (1, 101);
INSERT INTO Belongs_To (Block_ID, R_ID)
VALUES (1, 102);
INSERT INTO Belongs_To (Block_ID, R_ID)
VALUES (2, 110);
INSERT INTO Belongs_To (Block_ID, R_ID)
VALUES (2, 111);
INSERT INTO Belongs_To (Block_ID, R_ID)
VALUES (2, 112);
INSERT INTO Belongs_To (Block_ID, R_ID)
VALUES (3, 402);
INSERT INTO Belongs_To (Block_ID, R_ID)
VALUES (3, 403);
INSERT INTO Belongs_To (Block_ID, R_ID)
VALUES (4, 222);
INSERT INTO Belongs_To (Block_ID, R_ID)
VALUES (5, 801);
INSERT INTO Belongs_To (Block_ID, R_ID)
VALUES (5, 802);
INSERT INTO Belongs_To (Block_ID, R_ID)
VALUES (6, 412);
INSERT INTO Belongs_To (Block_ID, R_ID)
VALUES (6, 413);


INSERT INTO Student_Phone(Stu_ID,phone)
VALUES ('PES1UG19CS047',  6302821743);
INSERT INTO Student_Phone(Stu_ID,phone)
VALUES ('PES1UG19CS009', 6361692361);
INSERT INTO Student_Phone(Stu_ID,phone)
VALUES ('PES1UG19CS035', 6363791101);
INSERT INTO Student_Phone(Stu_ID,phone)
VALUES ('PES1UG19CS067', 7210993681);
INSERT INTO Student_Phone(Stu_ID,phone)
VALUES ('PES1UG19EC042', 7022209617);
INSERT INTO Student_Phone(Stu_ID,phone)
VALUES ('PES1UG19ME034', 7022574896);
INSERT INTO Student_Phone(Stu_ID,phone)
VALUES ('PES1UG19CS137', 7022735995);
INSERT INTO Student_Phone(Stu_ID,phone)
VALUES ('PES1UG19CS087', 7071641739);


INSERT INTO Employee_Phone(Emp_ID, phone)
VALUES (367264738475, 2943569987);
INSERT INTO Employee_Phone(Emp_ID, phone)
VALUES (347764839469, 9640065471);
INSERT INTO Employee_Phone(Emp_ID, phone)
VALUES (987845676875, 3224566789);
INSERT INTO Employee_Phone(Emp_ID, phone)
VALUES (765609873456, 9234565471);
INSERT INTO Employee_Phone(Emp_ID, phone)
VALUES (567834560987, 9650345671);
INSERT INTO Employee_Phone(Emp_ID, phone)
VALUES (876534566789, 9678954700);
INSERT INTO Employee_Phone(Emp_ID, phone)
VALUES (456734567890, 9250034587);
INSERT INTO Employee_Phone(Emp_ID, phone)
VALUES (987654323456, 9234555471);




INSERT INTO Parent_Phone(Stu_ID, Fname, phone)
VALUES ('PES1UG19CS047', 'Michael', 9650065471);
INSERT INTO Parent_Phone(Stu_ID, Fname, phone)
VALUES ('PES1UG19CS009', 'Abdul', 5550065471);
INSERT INTO Parent_Phone(Stu_ID, Fname, phone)
VALUES ('PES1UG19CS035','Mahadev',9873456231);
INSERT INTO Parent_Phone(Stu_ID, Fname, phone)
VALUES ('PES1UG19CS067','Grisha',9978567890);
INSERT INTO Parent_Phone(Stu_ID, Fname, phone)
VALUES ('PES1UG19EC042', 'Rajeev',6789456709);
INSERT INTO Parent_Phone(Stu_ID, Fname, phone)
VALUES ('PES1UG19ME034', 'Sohan',2345667899);
INSERT INTO Parent_Phone(Stu_ID, Fname, phone)
VALUES ('PES1UG19CS137', 'Murty',9223344551);
INSERT INTO Parent_Phone(Stu_ID, Fname, phone)
VALUES ('PES1UG19CS087', 'Pratap',2334445557);


