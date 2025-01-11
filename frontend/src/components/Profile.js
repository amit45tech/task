import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from './Logout';

const Profile = () => {
    const { user, token } = useSelector((state) => state.user);

    if (!user) {
        return <p>No user logged in</p>;
    }

    return (
        <div>
            <h1>Welcome, {user.email}</h1>
            <p>Your token: {token}</p>
            <Logout />
        </div>
    )
}

export default Profile
