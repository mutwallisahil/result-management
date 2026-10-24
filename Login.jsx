import "./Login.css";

function Login({ onLogin, onShowRegister }) {

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = e.target.username.value.trim();
        const password = e.target.password.value;

        const admins = JSON.parse(
            localStorage.getItem("admins") || "[]"
        );

        // Default admin credentials
        const defaultAdmin =
            username === "admin" && password === "1234";

        // Registered admin credentials
        const registeredAdmin = admins.find(
            (admin) =>
                admin.username.toLowerCase() === username.toLowerCase() &&
                admin.password === password
        );

        if (defaultAdmin || registeredAdmin) {
            onLogin();
        } else {
            alert("Wrong username or password!");
        }
    };

    return (
        <div className="login-page">

            <div className="college-name">

                <h1>
                    MSBTE Institute of Technology & Engineering
                </h1>

                <p>
                    Student Result Management System
                </p>

            </div>

            <div className="login-box">

                <h2>Admin Login</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

                <div className="login-info">
                    <p>Default Username: admin</p>
                    <p>Default Password: 1234</p>
                </div>

                <div className="register-link">

                    <p>New administrator?</p>

                    <button
                        type="button"
                        onClick={onShowRegister}
                    >
                        Create an Account
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Login;