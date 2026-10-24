import "./Dashboard.css";
import clipboard from "./asset/clipboard.jpg"

function Dashboard({
    students,
    onCourse,
    onResult,
    onLogout
}) {



    // total student

    const totalStudents =
        students.length;



    // pass student

    const passStudents =
        students.filter((student) => {

            return (

                Number(student.javascript) >= 35 &&

                Number(student.react) >= 35 &&

                Number(student.database_marks) >= 35 &&

                Number(student.maths) >= 35 &&

                Number(student.computer) >= 35

            );

        }).length;



    // fail student
    

    const failStudents =
        totalStudents - passStudents;


    return (

        <div className="dashboard">


            {/* header*/}

            <header className="dashboard-header">


                <h1>
                    Student Result Management System
                </h1>


                <nav>


                    <button
                        onClick={onCourse}
                    >
                        Course
                    </button>


                    <button
                        onClick={onResult}
                    >  <img src={clipboard} alt="laptop" style={{width:"20px", borderRadius:"6px"}}/>
                         {" "}
                        Result
                    </button>


                    <button
                        onClick={onLogout}
                    >
                        Logout
                    </button>


                </nav>


            </header>


            {/* conten */}

            <main className="dashboard-content">


                <h2>
                    Dashboard
                </h2>


                <p className="welcome">
                    Welcome to Student Result Management System
                </p>


                {/* statis */}

                <div className="statistics">


                    {/* total */}

                    <div className="stat-box">

                        <h3>
                            Total Students
                        </h3>

                        <p>
                            {totalStudents}
                        </p>

                    </div>


                    {/* pass */}

                    <div className="stat-box">

                        <h3>
                            Pass
                        </h3>

                        <p>
                            {passStudents}
                        </p>

                    </div>


                    {/* fail */}

                    <div className="stat-box">

                        <h3>
                            Fail
                        </h3>

                        <p>
                            {failStudents}
                        </p>

                    </div>


                </div>


            </main>


        </div>

    );

}


export default Dashboard;