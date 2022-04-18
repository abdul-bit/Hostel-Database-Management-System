import React, { useState, useContext } from "react";
//import EmployeeFinder from "../apis/EmployeeFinder";
//import { EmployeeContext } from "../context/EmployeeContext";
import './stylee.css';

const AddEmployee = () => {
    //const { addEmployees } = useContext(EmployeesContext);
    const [Fname, setFName] = useState("");
    const [Minit, setMinit] = useState("");
    const [Lname, setLname] = useState("");
    const [Aadhaar, setAadhaar] = useState("");
    const [DOB, setDOB] = useState("");
    const [Addr, setAddr] = useState("");
    const [Sex, setSex] = useState("");
    const [Salary, setSalary] = useState("");
    const [Super_ID, setSuper_ID] = useState("");
    const [Mess_ID, setMess_ID] = useState("");
    const [D_ID, setD_ID] = useState("");


    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {
                Fname,
                Minit,
                Lname,
                Aadhaar,
                DOB,
                Addr,
                Sex,
                Salary,
                Super_ID,
                Mess_ID,
                D_ID,
            }
            const response = await fetch("http://localhost:5000/employees/insert", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response)
            window.location.replace("http://localhost:3000/employees");
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="mb-4">
            <form onSubmit={onSubmitForm}>
                <div className="form-row">
                    <div className="col">
                        <input style={{ border: "dashed", outline: "none", background: "none", color: "white" }} value={Fname} onChange={(e) => setFName(e.target.value)} type="text" className="form-control" placeholder=" First Name" />
                    </div>
                    <div className="col">
                        <input style={{ border: "dashed", outline: "none", background: "none", color: "white" }} value={Minit} onChange={(e) => setMinit(e.target.value)} type="text" className="form-control" placeholder=" Middle Initial" />
                    </div>
                    <div className="col">
                        <input style={{ border: "dashed", outline: "none", background: "none", color: "white" }} value={Lname} onChange={(e) => setLname(e.target.value)} type="text" className="form-control" placeholder=" Last Name" />
                    </div>
                </div>
                <br />
                <br />
                <div className="form-row">
                    <div className="col">
                        <input style={{ border: "dashed", outline: "none", background: "none", color: "white" }} value={Aadhaar} onChange={(e) => setAadhaar(e.target.value)} type="text" className="form-control" placeholder=" Aadhar" />
                    </div>
                </div>
                <br />
                <br />
                <div className="form-row">
                    <div className="col">
                        <input style={{ border: "dashed", outline: "none", background: "none", color: "white" }} value={DOB} onChange={(e) => setDOB(e.target.value)} type="text" className="form-control" placeholder=" DOB" />
                    </div>
                </div>
                <br />
                <br />
                <div className="form-row">
                    <div className="col">
                        <input style={{ border: "dashed", outline: "none", background: "none", color: "white" }} value={Addr} onChange={(e) => setAddr(e.target.value)} type="text" className="form-control" placeholder=" Address" />
                    </div>
                </div>
                <br />
                <br />
                <div className="form-row">
                    <div className="col">
                        <input style={{ border: "dashed", outline: "none", background: "none", color: "white" }} value={Sex} onChange={(e) => setSex(e.target.value)} type="text" className="form-control" placeholder=" Sex" />
                    </div>
                </div>
                <br />
                <br />
                <div className="form-row">
                    <div className="col">
                        <input style={{ border: "dashed", outline: "none", background: "none", color: "white" }} value={Salary} onChange={(e) => setSalary(e.target.value)} type="text" className="form-control" placeholder="Salary" />
                    </div>
                </div>
                <br />
                <br />
                <div className="form-row">
                    <div className="col">
                        <input style={{ border: "dashed", outline: "none", background: "none", color: "white" }} value={Super_ID} onChange={(e) => setSuper_ID(e.target.value)} type="text" className="form-control" placeholder=" Super_ID" />
                    </div>
                </div>
                <br />
                <br />
                <div className="form-row">
                    <div className="col">
                        <input style={{ border: "dashed", outline: "none", background: "none", color: "white" }} value={Mess_ID} onChange={(e) => setMess_ID(e.target.value)} type="text" className="form-control" placeholder=" Mess_ID" />
                    </div>
                </div>
                <br />
                <br />
                <div className="form-row">
                    <div className="col">
                        <input style={{ border: "dashed", outline: "none", background: "none", color: "white" }} value={D_ID} onChange={(e) => setD_ID(e.target.value)} type="text" className="form-control" placeholder=" D_ID" />
                    </div>

                </div>
                <br />
                <br />
                <button className="btn btn-success">Insert Employee</button>
            </form>


        </div>
    );
};

export default AddEmployee;