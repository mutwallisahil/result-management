const express = require("express"); //Express helps you create your backend server and API whithout Express it hards to create 
const mysql = require("mysql2");
const cors = require("cors");

const app = express();


// middleware


app.use(cors());
app.use(express.json());



// mysql connection


const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "root",
    database: "student_result"

});



// connect to mysql


db.connect((error) => {

    if (error) {

        console.log("MySQL connection failed!");

        console.log(error.message);

        return;
    }

    console.log("MySQL connected successfully!");

});



// home route


app.get("/", (req, res) => {

    res.send("Student Result Backend is Running");

});



// get all students


app.get("/students", (req, res) => {

    const sql = "SELECT * FROM students";

    db.query(sql, (error, results) => {

        if (error) {

            console.log(error);

            return res.status(500).json({
                message: "Database error"
            });

        }

        res.json(results);

    });

});



// add student


app.post("/students", (req, res) => {
    // console.log("DATA RECEIVED FROM REACT:");
    // console.log(req.body);

    const {
        name,
        roll_no,
        class_name,
        trade,
        javascript,
        react,
        database_marks,
        maths,
        computer
    } = req.body;


    const sql = `

        INSERT INTO students

        (
            name,
            roll_no,
            class_name,
            trade,
            javascript,
            react,
            database_marks,
            maths,
            computer
        )

        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)

    `;


    const values = [

        name,
        roll_no,
        class_name,
        trade,
        javascript,
        react,
        database_marks,
        maths,
        computer
    ];


    db.query(sql, values, (error, result) => {

        if (error) {

            console.log(error);
            return res.status(500).json({
                message: "Error adding student"
            });

        }


        res.json({

            message: "Student added successfully",
            id: result.insertId

        });

    });

});


// ==============================
// DELETE STUDENT
// ==============================

// app.delete("/students/:id", (req, res) => {

//     const id = req.params.id;


//     const sql = "DELETE FROM students WHERE id = ?";


//     db.query(sql, [id], (error) => {

//         if (error) {

//             console.log(error);

//             return res.status(500).json({

//                 message: "Error deleting student"

//             });

//         }


//         res.json({

//             message: "Student deleted successfully"

//         });

//     });

// });

app.delete("/students/:id", (req, res) => {

    const id = req.params.id;

    db.query(
        "DELETE FROM students WHERE id = ?",
        [id],
        (error) => {

            if (error) {
                console.log(error);
                return res.status(500).json({
                    message: "Error deleting student"
                });
            }

            db.query(
                "SELECT COUNT(*) AS total FROM students",
                (error, result) => {

                    if (error) {
                        console.log(error);
                        return res.status(500).json({
                            message: "Error checking students"
                        });
                    }

                    if (result[0].total === 0) {

                        db.query(
                            "ALTER TABLE students AUTO_INCREMENT = 1",
                            (error) => {

                                if (error) {
                                    console.log(error);
                                    return res.status(500).json({
                                        message: "Error resetting ID"
                                    });
                                }

                                res.json({
                                    message: "All students deleted. ID reset to 1"
                                });
                            }
                        );

                    } else {

                        res.json({
                            message: "Student deleted successfully"
                        });

                    }

                }
            );

        }
    );

});
  

// start server


app.listen(5000, () => {

    console.log(
        "Server running on http://localhost:5000"
    );

});