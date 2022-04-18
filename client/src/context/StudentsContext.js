import React, { useState, createContext } from "react";
export const StudentsContext = createContext();

export const StudentsContextProvider = props => {
    const [Students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);


    return (
        <StudentsContext.Provider value={{ Students, setStudents }}>
            {props.children}
        </StudentsContext.Provider>
    );
};
