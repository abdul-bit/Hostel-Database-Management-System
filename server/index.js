const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const morgan = require("morgan");
const { response } = require("express");
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());


app.listen(5000, () => {
    console.log(`server is up and listening on port 5000`);
});



app.get("/employees", async (req, res) => {
    try {
        const results = await pool.query("select * from employee");
        res.json(results.rows);

    } catch (err) {
        console.log(err)

    }

    app.post("/employees/insert", async (req, res) => {


        try {
            const inserts = await pool.query(
                "INSERT INTO Employee(Fname, Minit, Lname, Aadhaar, DOB, Addr, Sex, Salary, Super_ID, Mess_ID, D_ID) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) returning *",
                [req.body.Fname, req.body.Minit, req.body.Lname, req.body.Aadhaar, req.body.DOB, req.body.Addr, req.body.Sex, req.body.Salary, req.body.Super_ID, req.body.Mess_ID, req.body.D_ID]
            );
            console.log(inserts);
            res.status(201).json({
                status: "success",
                data: {
                    student: inserts.rows[0],
                },
            });
        } catch (err) {
            console.log(err);
        }
    });


});
app.delete("/employees/delete/:aadhaar", async (req, res) => {
    try {
        const { aadhaar } = req.params;
        const deleteEmployee = await pool.query("DELETE FROM EMPLOYEE WHERE AADHAAR = $1", [aadhaar]);
        res.json("Employee was deleted");

    } catch (err) {
        console.error(err);
        prompt(err);

    }
})
//RETRIVE STUDENT ALL STUDENTS INFORMATIOM


app.get("/students", async (req, res) => {
    try {
        const results = await pool.query("select * from student");
        res.json(results.rows);

    } catch (err) {
        console.log(err)

    }




});
// RETRIEVE ALL STUDENTS BASED ON SRN
app.get("/students/:srn", async (req, res) => {
    console.log(req.params.srn);
    try {

        const student = await pool.query(
            "select * from student where srn = $1",
            [req.params.srn]

        );
        console.log(student);

        res.status(200).json({
            status: "success",
            student: student.rows[0],

        });
    } catch (err) {
        console.log(err);
    }
});

app.post("/students/insert", async (req, res) => {


    try {
        const inserts = await pool.query(
            "INSERT INTO Student(Fname, Minit, Lname, SRN, DOB, Addr, Sex, Email, CGPA, Fees, Attendance, Mess_ID, Room_ID) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) returning *",
            [req.body.Fname, req.body.Minit, req.body.Lname, req.body.SRN, req.body.DOB, req.body.Addr, req.body.Sex, req.body.Email, req.body.CGPA, req.body.Fees, req.body.Attendance, req.body.Mess_ID, req.body.Room_ID]
        );
        console.log(inserts);
        res.status(201).json({
            status: "success",
            data: {
                student: inserts.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});
app.delete("/students/delete/:srn", async (req, res) => {
    try {
        const { srn } = req.params;
        const deleteStudent = await pool.query("DELETE FROM STUDENT WHERE SRN = $1", [srn]);
        res.json("Student was deleted");

    } catch (err) {
        console.error(err);

    }
})