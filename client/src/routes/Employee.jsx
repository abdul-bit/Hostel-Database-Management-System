import React from "react";
import AddEmployee from "../components/AddEmployee";
import Header from "../components/Header";
import Interactive from "../components/Interactive";


const Employee = () => {
    return (
        <div >
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <Interactive />
            <div className="container">
                <br />
                <h2 style={{ fontSize: "25px", color: "whitesmoke" }} className="font-weight-light-display-1 text-left .bg-secondary">Employee Insert</h2>
                <br />
                <AddEmployee />
            </div>
        </div>
    );
};

export default Employee;
