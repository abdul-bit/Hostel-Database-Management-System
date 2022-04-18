import React, { useState, useContext } from "react";
//import StudentFinder from "../apis/StudentFinder";
//import { StudentContext } from "../context/StudentContext";
import './style.css';


const AddStudent = () => {
    //const { addStudents } = useContext(StudentsContext);
    const [Fname, setFName] = useState("");
    const [Minit, setMinit] = useState("");
    const [Lname, setLname] = useState("");
    const [SRN, setSRN] = useState("");
    const [DOB, setDOB] = useState("");
    const [Addr, setAddr] = useState("");
    const [Sex, setSex] = useState("");
    const [Email, setEmail] = useState("");
    const [CGPA, setCGPA] = useState("");
    const [Fees, setFees] = useState("");
    const [Attendance, setAttendance] = useState("");
    const [Mess_ID, setMess_ID] = useState("");
    const [Room_ID, setRoom_ID] = useState("");


    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {
                Fname,
                Minit,
                Lname,
                SRN,
                DOB,
                Addr,
                Sex,
                Email,
                CGPA,
                Fees,
                Attendance,
                Mess_ID,
                Room_ID,
            }
            const response = await fetch("http://localhost:5000/students/insert", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response)
            window.location.replace("http://localhost:3000/students");
        } catch (err) {
            console.log(err)
        }
    }

    /*const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await StudentFinder.post("/", {
                Fname, Minit, Lname, SRN, DOB, Addr, Sex, Email, CGPA, Fees, Attendance, Mess_ID, Room_ID
            });
            console.log(response.data.data);
            addStudents(response.data.data.student);
        } catch (err) {
            console.log(err);
        }
    };*/



    return (
        <div className="mb-4">
            <form class="form form-hover form-dark" onSubmit={onSubmitForm}>
                <div className="form-row">
                    <div className="textbook col">

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
                        <input style={{ border: "dashed", outline: "none", background: "none", color: "white" }} value={SRN} onChange={(e) => setSRN(e.target.value)} type="text" className="form-control" placeholder=" SRN" />
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
                        <input style={{ border: "dashed", outline: "none", background: "none", color: "white" }} value={Email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Email" />
                    </div>
                </div>
                <br />
                <br />
                <div className="form-row">
                    <div className="col">
                        <input style={{ border: "dashed", outline: "none", background: "none", color: "white" }} value={CGPA} onChange={(e) => setCGPA(e.target.value)} type="text" className="form-control" placeholder=" CGPA" />
                    </div>
                </div>
                <br />
                <br />
                <div className="form-row">
                    <div className="col">
                        <input style={{ border: "dashed", outline: "none", background: "none", color: "white" }} value={Fees} onChange={(e) => setFees(e.target.value)} type="text" className="form-control" placeholder=" Fees" />
                    </div>
                </div>
                <br />
                <br />
                <div className="form-row">
                    <div className="col">
                        <input style={{ border: "dashed", outline: "none", background: "none", color: "white" }} value={Attendance} onChange={(e) => setAttendance(e.target.value)} type="text" className="form-control" placeholder=" Attendance" />
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
                        <input style={{ border: "dashed", outline: "none", background: "none", color: "white" }} value={Room_ID} onChange={(e) => setRoom_ID(e.target.value)} type="text" className="form-control" placeholder=" Room_ID" />
                    </div>

                </div>
                <br />
                <br />
                <button className="btn btn-success">Allot Student</button>
            </form>


        </div>
    );
};

export default AddStudent;