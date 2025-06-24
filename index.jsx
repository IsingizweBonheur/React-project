import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/login", { username, password })
            .then((res) => {
                toast.success(res.data.msg);
                navigate("/");
            })
            .catch((err) => {
                toast.error(err.response?.data?.msg);
            })
    }

    const containerStyle = {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f4f8",
    };

    const formStyle = {
        padding: "30px",
        borderRadius: "10px",
        background: "#fff",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "300px",
    };

    const inputStyle = {
        padding: "10px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    };

    const buttonStyle = {
        padding: "10px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#007bff",
        color: "#fff",
        cursor: "pointer",
    };

    return (
        <div style={containerStyle}>
            <form onSubmit={Submit} style={formStyle}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>Login</button>
            </form>
        </div>
    );
}
