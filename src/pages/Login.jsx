import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("https://localhost:4000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.token) {
        localStorage.setItem("token", data.token); // redirect to dashboard or protected route
        } else {
        alert(data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
            Password:
            <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            />
        </label>
        <br />
        <button type="submit">Login</button>
        </form>
    );
};

export default Login;

