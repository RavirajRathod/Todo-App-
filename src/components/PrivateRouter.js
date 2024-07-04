import React from 'react'
import { Navigate } from 'react-router-dom';


export default function PrivateRouter(props) {

    const login = JSON.parse(localStorage.getItem("loginData")) || false
    const register = JSON.parse(localStorage.getItem("Registerdata")) || false

    console.log(register, login)

    return <>

        {
            !register && !login ?
                <Navigate to="/register" />
                : register && !login ?
                    <Navigate to="/login" />
                    : register && login &&
                    props.children

        }
    </>
}
