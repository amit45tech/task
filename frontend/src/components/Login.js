import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../slices/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/users/login", formData);
            const { token } = response.data;

            // Decode token to get user information (for simplicity, hardcoded here)
            const user = { email: formData.email }; // Replace with actual decoding if needed.

            dispatch(login({ user, token }));
            alert("Login successful");
            navigate("/profile")
        } catch (err) {
            alert(err.response.data.error);
        }
    };

    return (
        <>
            <Link to="/register">Register</Link>
            <form onSubmit={handleSubmit}>
                <input name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login
