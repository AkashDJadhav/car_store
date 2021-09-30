import React, { useState } from 'react'
import Axios from 'axios'

export const Register = () => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const register = () => {
        Axios({
            method: "POST",
            data: {
                username: registerUsername,
                password: registerPassword,
            },
            withCredentials: true,
            url: "http://localhost:5000/register",
        }).then((res) => console.log(res));
    };
    return (

        <div>
            <h1>Register</h1>
            <input
                placeholder="username"
                onChange={(e) => setRegisterUsername(e.target.value)}
            />
            <input
                placeholder="password"
                onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <button onClick={register}>Submit</button>
        </div>
    )
}
