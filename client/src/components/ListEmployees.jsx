import React, { useContext, useEffect, useState } from "react";


const deleteEmployee = async (aadhaar) => {
    try {
        const deleteEmployee = await fetch("http://localhost:5000/employees/delete/" + aadhaar, { method: "DELETE" })
        window.location.reload(true);
    } catch (err) {
        console.error(err);


    }
}



const ListEmployees = () => {
    const [employees, setEmployees] = useState([]);

    const getEmployees = async () => {
        try {
            const response = await fetch("http://localhost:5000/employees");
            const data = await response.json();
            setEmployees(data);
            console.log(data);


        } catch (err) {
            console.log(err)

        }

    }
    useEffect(() => {
        getEmployees();
    }, []);



    return (
        <div className="list-group">

            <table class="table table-hover table-dark ">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Aadhaar</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Middle Init</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Address</th>
                        <th scope="col">Sex</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Super_ID</th>
                        <th scope="col">Mess_ID</th>
                        <th scope="col">D_ID</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (

                        <tr>
                            <td >{employee.aadhaar}</td>
                            <td >{employee.fname}</td>
                            <td >{employee.minit}</td>
                            <td >{employee.lname}</td>
                            <td >{new Date(employee.dob).toISOString().slice(0, 10).split("-").reverse().join("-")
                            }</td>
                            <td >{employee.addr}</td>
                            <td >{employee.sex}</td>
                            <td >{employee.salary}</td>
                            <td >{employee.super_id}</td>
                            <td >{employee.mess_id}</td>
                            <td >{employee.d_id}</td>
                            <td><button className="btn btn-danger" onClick={() => deleteEmployee(employee.aadhaar)}>Delete</button></td>
                        </tr>
                    )

                    )}

                </tbody>
            </table>

        </div>
    );
};

export default ListEmployees;