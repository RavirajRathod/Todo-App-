import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { modeContext } from '../../context/context';
import Logout from './Logout';


export default function Navbar() {

    // const fetchAllData = async () => {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    //         method: "GET"
    //     })
    //     console.log(response)
    //     const data = await response.json()
    //     console.log(data)
    //     localStorage.setItem("data", JSON.stringify(data));
    // }
    // useEffect(() => {
    //     fetchAllData()
    // }, [])



    const value = useContext(modeContext);

    const changeMode = () => {

        if (value.mode === 'dark') {
            value.setMode('light')
            document.body.style.background = '#eeeeee'
        } else {
            value.setMode('dark')
            document.body.style.background = '#373737'
        }
        return value.mode;
    }

    const [logoutvalue, setLogoutvalue] = useState(false)
    const logout = () => {
        setLogoutvalue(true);
    }

    return (
        <div >
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bolder fs-4 text-white todo" href="/">TODO <span className='icon'>&#9989;</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="links" >
                        <NavLink to="/" className={`nav-link text-white home ${(e) => { return e.isActive ? 'active' : "" }}`} >Home</NavLink>
                        <NavLink to="/about" className={`nav-link text-white about ${(e) => { return e.isActive ? 'active' : "" }}`} >About</NavLink>
                        <NavLink to="/alltodos" className={`nav-link text-white alltodo ${(e) => { return e.isActive ? 'active' : "" }}`} >Todos</NavLink>

                    </div>
                    <div>
                        <button className='mode' onClick={() => changeMode()}>{(value.mode === 'dark') ? <span>&#9925;</span> : <span>&#127769;</span>}</button>
                        <button className="btn btn-danger logout" type="submit" onClick={logout}>Logout</button>

                    </div>
                    {(logoutvalue === true) ? <Logout setLogoutvalue={setLogoutvalue} /> : ''}
                </div>
            </nav>
        </div>
    )
}
