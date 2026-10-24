import { useEffect, useState } from "react";

import Login from "./components/Login";
import Register from "./components/Register";

import Dashboard from "./components/Dashboard";
import TradeSelection from "./components/TradeSelection";
import StudentForm from "./components/StudentForm";
import StudentResultList from "./components/StudentResultList";
import Result from "./components/Result";

import "./App.css";

function App() {

    const [page, setPage] = useState("login");

    const [trade, setTrade] = useState("");

    const [students, setStudents] = useState([]);

    const [selectedStudent, setSelectedStudent] = useState(null);

    // Get students from backend

    const getStudents = () => {

        fetch("http://localhost:5000/students")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch students");
                }

                return response.json();
            })
            .then((data) => {
                setStudents(data);
            })
            .catch((error) => {
                console.log(error);
            });

    };

    // Load students

    useEffect(() => {
        getStudents();
    }, []);

    // Login

    const handleLogin = () => {
        setPage("menu");
    };

    // Open registration page

    const openRegister = () => {
        setPage("register");
    };

    // Return to login after registration

    const registrationComplete = () => {
        setPage("login");
    };

    // Open course

    const openCourse = () => {
        setPage("course");
    };

    // Select course

    const handleTrade = (selectedTrade) => {
        setTrade(selectedTrade);
        setPage("form");
    };

    // Show student result list

    const showResultList = () => {
        getStudents();
        setPage("resultList");
    };

    // Add student

    const addStudent = (studentData) => {

        const student = {
            ...studentData,
            trade: trade
        };

        fetch("http://localhost:5000/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to add student");
                }

                return response.json();
            })
            .then(() => {
                alert("Student added successfully!");

                getStudents();

                setPage("resultList");
            })
            .catch((error) => {
                console.log(error);
                alert("Error adding student");
            });

    };

    // Delete student

    const deleteStudent = (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmDelete) {
            return;
        }

        fetch(`http://localhost:5000/students/${id}`, {
            method: "DELETE"
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to delete student");
                }

                alert("Student deleted successfully");

                getStudents();
            })
            .catch((error) => {
                console.log(error);
                alert("Error deleting student");
            });

    };

    // Show individual result

    const showStudentResult = (student) => {
        setSelectedStudent(student);
        setPage("result");
    };

    // Logout

    const logout = () => {
        setTrade("");
        setSelectedStudent(null);
        setPage("login");
    };

    return (

        <div className="app">

            {/* Login page */}

            {page === "login" && (
                <Login
                    onLogin={handleLogin}
                    onShowRegister={openRegister}
                />
            )}

            {/* Registration page */}

            {page === "register" && (
                <Register
                    onRegister={registrationComplete}
                    onBack={() => setPage("login")}
                />
            )}

            {/* Dashboard */}

            {page === "menu" && (
                <Dashboard
                    students={students}
                    onCourse={openCourse}
                    onResult={showResultList}
                    onLogout={logout}
                />
            )}

            {/* Course selection */}

            {page === "course" && (
                <TradeSelection
                    onSelectTrade={handleTrade}
                    onBack={() => setPage("menu")}
                />
            )}

            {/* Student form */}

            {page === "form" && (
                <StudentForm
                    trade={trade}
                    onSubmit={addStudent}
                    onBack={() => setPage("course")}
                    onShowResults={showResultList}
                />
            )}

            {/* Student result list */}

            {page === "resultList" && (
                <StudentResultList
                    students={students}
                    onStudentClick={showStudentResult}
                    onDelete={deleteStudent}
                    onAddStudent={() => setPage("course")}
                    onBack={() => setPage("menu")}
                />
            )}

            {/* Individual result */}

            {page === "result" && selectedStudent && (
                <Result
                    student={selectedStudent}
                    onBack={() => setPage("resultList")}
                />
            )}

        </div>

    );
}

export default App;