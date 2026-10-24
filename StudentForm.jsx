import { useState } from "react";

import "./StudentForm.css";


function StudentForm({
    trade,
    onSubmit,
    onBack,
    onShowResults
}) {


    const [name, setName] = useState("");

    const [rollNo, setRollNo] = useState("");

    const [javascript, setJavascript] = useState("");

    const [react, setReact] = useState("");

    const [databaseMarks, setDatabaseMarks] = useState("");

    const [maths, setMaths] =  useState("");

    const [computer, setComputer] =  useState("");


    const handleSubmit = (event) => {

        event.preventDefault();


        const student = {

            name: name,

            roll_no: rollNo,

            class_name: trade,

            javascript: Number(javascript),

            react: Number(react),

            database_marks:
                Number(databaseMarks),

            maths: Number(maths),

            computer: Number(computer)

        };


        onSubmit(student);

    };


    return (

        <div className="student-form-page">


            <div className="form-box">


                <h1>
                    Add Student
                </h1>


                <h3>
                    {trade}
                </h3>


                <form
                    onSubmit={handleSubmit}
                >


                    <input
                        type="text"
                        placeholder="Student Name"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        required
                    />


                    <input
                        type="text"
                        placeholder="Roll Number"
                        value={rollNo}
                        onChange={(e) =>
                            setRollNo(e.target.value)
                        }
                        required
                    />


                    <input
                        type="number"
                        placeholder="JavaScript Marks"
                        value={javascript}
                        onChange={(e) =>
                            setJavascript(
                                e.target.value
                            )
                        }
                        min="0"
                        max="100"
                        required
                    />


                    <input
                        type="number"
                        placeholder="React Marks"
                        value={react}
                        onChange={(e) =>
                            setReact(
                                e.target.value
                            )
                        }
                        min="0"
                        max="100"
                        required
                    />


                    <input
                        type="number"
                        placeholder="Database Marks"
                        value={databaseMarks}
                        onChange={(e) =>
                            setDatabaseMarks(
                                e.target.value
                            )
                        }
                        min="0"
                        max="100"
                        required
                    />


                    <input
                        type="number"
                        placeholder="Maths Marks"
                        value={maths}
                        onChange={(e) =>
                            setMaths(
                                e.target.value
                            )
                        }
                        min="0"
                        max="100"
                        required
                    />


                    <input
                        type="number"
                        placeholder="Computer Marks"
                        value={computer}
                        onChange={(e) =>
                            setComputer(
                                e.target.value
                            )
                        }
                        min="0"
                        max="100"
                        required
                    />


                    <button
                        type="submit"
                    >
                        Add Student
                    </button>


                </form>


                <button
                    className="back-button"
                    onClick={onBack}
                >
                    Back
                </button>


                <button
                    className="result-button"
                    onClick={onShowResults}
                >
                    View Results
                </button>


            </div>


        </div>

    );

}


export default StudentForm;