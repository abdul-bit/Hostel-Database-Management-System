import React from "react";
import ListEmployees from "../components/ListEmployees";
import Interactive from "../components/Interactive";


const EmployeeDetails = () => {
    return (
        <div>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <div style={{ position: "sticky" }}>
                <Interactive />
            </div>

            <ListEmployees />
        </div>
    );
};

export default EmployeeDetails;
