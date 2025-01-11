import React from 'react'
import { useDispatch } from "react-redux";
import { logout } from "../slices/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        alert("Logged out");
        navigate("/")
    };

    return <button onClick={handleLogout}>Logout</button>;
}

export default Logout
