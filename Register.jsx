import "./Register.css";

function Register({ onRegister, onBack }) {
    const handleSubmit = (e) => {
        e.preventDefault();

        const username = e.target.username.value.trim();
        const email = e.target.email.value.trim();
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const admins = JSON.parse(
            localStorage.getItem("admins") || "[]"
        );

        const existingAdmin = admins.find(
            (admin) =>
                admin.username.toLowerCase() === username.toLowerCase() ||
                admin.email.toLowerCase() === email.toLowerCase()
        );

        if (existingAdmin) {
            alert("Username or email already exists!");
            return;
        }

        admins.push({
            username,
            email,
            password
        });

        localStorage.setItem("admins", JSON.stringify(admins));

        alert("Registration successful! Please login.");

        onRegister();
    };

    return (
        <div className="register-page">

            <div className="register-header">
                <h1>
                    MSBTE Institute of Technology & Engineering
                </h1>

                <p>Student Result Management System</p>
            </div>

            <div className="register-box">

                <h2>Admin Registration</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Create Password"
                        minLength="4"
                        required
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        minLength="4"
                        required
                    />

                    <button type="submit">
                        Register
                    </button>

                </form>

                <p>Already have an account?</p>

                <button
                    type="button"
                    className="back-button"
                    onClick={onBack}
                >
                    Back to Login
                </button>

            </div>

        </div>
    );
}

export default Register;