import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./routes/Home";
import StudentDetails from "./routes/StudentDetails";
import Student from "./routes/Student";
import { StudentsContextProvider } from "./context/StudentsContext";
import EmployeeDetails from "./routes/EmployeeDetails";
import Employee from "./routes/Employee";
import Signup from "./routes/Signup";
import Fees from "./routes/fees";
import Aboutus from "./routes/aboutus";


const App = () => {
    return (
        <StudentsContextProvider>
            <div >
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/students" element={<StudentDetails />} />
                    <Route exact path="/students/insert" element={<Student />} />
                    <Route exact path="/employees" element={<EmployeeDetails />} />
                    <Route exact path="/employees/insert" element={<Employee />} />
                    <Route exact path="/sign-up" element={<Signup />} />
                    <Route exact path="/fees" element={<Fees />} />
                    <Route exact path="/aboutus" element={<Aboutus />} />
                </Routes>



            </div>
        </StudentsContextProvider>
    );
};

export default App;
