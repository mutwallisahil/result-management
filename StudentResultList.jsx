import "./StudentResultList.css";


function StudentResultList({
    students,
    onStudentClick,
    onDelete,
    onAddStudent,
    onBack
}) {


    return (

        <div className="result-list-page">


            <header className="result-list-header">


                <h1>
                    Student Result List
                </h1>


                <div>


                    <button
                        onClick={onBack}
                    >
                        Dashboard
                    </button>


                    <button
                        onClick={onAddStudent}
                    >
                        Add Student
                    </button>


                </div>


            </header>


            <div className="result-list-container">


                {students.length === 0 ? (

                    <h2>
                        No students found
                    </h2>

                ) : (

                    <table>


                        <thead>

                            <tr>

                                <th>
                                    ID
                                </th>

                                <th>
                                    Name
                                </th>

                                <th>
                                    Roll No
                                </th>

                                <th>
                                    Course
                                </th>

                                <th>
                                    Action
                                </th>

                            </tr>

                        </thead>


                        <tbody>


                            {students.map(
                                (student) => (

                                    <tr
                                        key={
                                            student.id
                                        }
                                    >


                                        <td>
                                            {
                                                student.id
                                            }
                                        </td>


                                        <td>


                                            <button
                                                className="student-name"
                                                onClick={() =>
                                                    onStudentClick(
                                                        student
                                                    )
                                                }
                                            >

                                                {
                                                    student.name
                                                }

                                            </button>


                                        </td>


                                        <td>
                                            {
                                                student.roll_no
                                            }
                                        </td>


                                        <td>
                                            {
                                                student.class_name
                                            }
                                        </td>


                                        <td>


                                            <button
                                                className="delete-button"
                                                onClick={() =>
                                                    onDelete(
                                                        student.id
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>


                                        </td>


                                    </tr>

                                )
                            )}


                        </tbody>


                    </table>

                )}


            </div>


        </div>

    );

}


export default StudentResultList;