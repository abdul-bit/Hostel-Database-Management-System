import React from "react";
import { useNavigate } from "react-router";


const Redirect = () => {
    let history = useNavigate();

    return (
        <div>
            <button onClick={() => {
                history('/students/insert');
            }} id="myButton" className="btn btn-success" >Alot Student</button>
            <br />
            <br />

            <button onClick={() => {
                history('/students');
            }} id="myButton" className="btn btn-success" >View Students</button>
            <br />
            <br />
            <button onClick={() => {
                history('/employees');
            }} id="myButton" className="btn btn-success" >View Employees</button>
            <br />
            <br />
            <button onClick={() => {
                history('/employees/insert');
            }} id="myButton" className="btn btn-success" >Insert Employee</button>
        </div>
    );
};

export default Redirect;
// import React from 'react';
// import { useNavigate } from "react-router-dom";
// function Redirect() {

//     const history = useNavigate();

//     const routeChange = () => {
//         let path = "http://localhost:3000/students/insert";
//         history.push(path);
//     }

//     return (
//         <div className="app flex-row align-items-center">

//             <button color="primary" className="px-4"
//                 onClick={routeChange}
//             >
//                 Login
//             </button>


//         </div>
//     );
// }
// export default Redirect;