import React from "react";
import AddStudent from "../components/AddStudent";
import Header from "../components/Header";
import Interactive from "../components/Interactive";


const Student = () => {
    return (
        <div>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <Interactive />
            <div className="container">

                <Header />
                <br />
                <h2 style={{ fontSize: "25px", color: "whitesmoke" }} className="font-weight-light-display-1 text-left .bg-secondary font-size color-whitesmoke">Student Insert</h2>
                <br />

                <AddStudent />
            </div>
        </div>
    );
};

export default Student;
