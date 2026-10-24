import "./Result.css";


function Result({ student, onBack }) {


    const total =

        Number(student.javascript) +

        Number(student.react) +

        Number(student.database_marks) +

        Number(student.maths) +

        Number(student.computer);


    const percentage =
        total / 5;


    const pass =

        Number(student.javascript) >= 35 &&

        Number(student.react) >= 35 &&

        Number(student.database_marks) >= 35 &&

        Number(student.maths) >= 35 &&

        Number(student.computer) >= 35;


    return (

        <div className="result-page">


            <div className="result-card">


                <h1>
                    Student Result
                </h1>


                <h2>
                    Msbte  Institute of Technology & Engineering
                </h2>


                <p>
                    <b>Name:</b>{" "}
                    {student.name}
                </p>


                <p>
                    <b>Roll No:</b>{" "}
                    {student.roll_no}
                </p>


                <p>
                    <b>Course:</b>{" "}
                    {student.class_name}
                </p>


                <hr />


                <p>
                    JavaScript:
                    {" "}
                    {student.javascript}
                </p>


                <p>
                    React:
                    {" "}
                    {student.react}
                </p>


                <p>
                    Database:
                    {" "}
                    {student.database_marks}
                </p>


                <p>
                    Maths:
                    {" "}
                    {student.maths}
                </p>


                <p>
                    Computer:
                    {" "}
                    {student.computer}
                </p>


                <hr />


                <h3>
                    Total: {total} / 500
                </h3>


                <h3>
                    Percentage: {percentage}%
                </h3>


                <h2>

                    Result:{" "}

                    {pass
                        ? "PASS"
                        : "FAIL"}

                </h2>


                <button
                    onClick={onBack}
                >
                    Back
                </button>


            </div>


        </div>

    );

}


export default Result;