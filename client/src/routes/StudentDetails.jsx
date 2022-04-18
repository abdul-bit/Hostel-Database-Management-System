import React from "react";
import Interactive from "../components/Interactive";
import ListStudents from "../components/ListStudents";


const StudentDetails = () => {
    return (
        <div>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <div style={{ backgroundColor: "black" }}>
                <div style={{ position: "sticky" }}>
                    <Interactive />
                </div>
                <ListStudents />

            </div>
        </div>
    );
};

export default StudentDetails;
