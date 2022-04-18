import React, { useContext, useEffect, useState } from "react";




const deleteStudent = async (srn) => {
    try {
        const deleteStudent = await fetch("http://localhost:5000/students/delete/" + srn, { method: "DELETE" })
        window.location.reload(true);
    } catch (err) {
        console.error(err);

    }
}

const ListStudents = () => {
    const [students, setStudents] = useState([]);

    const getStudents = async () => {
        try {
            const response = await fetch("http://localhost:5000/students");
            const data = await response.json();
            setStudents(data);
            console.log(data);


        } catch (err) {
            console.log(err)

        }

    }
    useEffect(() => {
        getStudents();
    }, []);



    return (
        <div className="list-group">

            <table class="table table-hover table-dark ">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">SRN</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Middle Init</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Address</th>
                        <th scope="col">Sex</th>
                        <th scope="col">Email</th>
                        <th scope="col">CGPA</th>
                        <th scope="col">Fees</th>
                        <th scope="col">Attendance</th>
                        <th scope="col">Mess_ID</th>
                        <th scope="col">Room_ID</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (

                        <tr>
                            <td >{student.srn}</td>
                            <td >{student.fname}</td>
                            <td >{student.minit}</td>
                            <td >{student.lname}</td>
                            <td >{student.dob}</td>
                            <td >{student.addr}</td>
                            <td >{student.sex}</td>
                            <td >{student.email}</td>
                            <td >{student.cgpa}</td>
                            <td >{student.fees}</td>
                            <td >{student.attendance}</td>
                            <td >{student.mess_id}</td>
                            <td >{student.room_id}</td>
                            <td><button className="btn btn-danger" onClick={() => deleteStudent(student.srn)}>Delete</button></td>
                        </tr>
                    )

                    )}

                </tbody>
            </table>

        </div>
    );
};

export default ListStudents;