import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { modeContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import { isAuthenticate } from '../../context/context';

export default function Logout({ setLogoutvalue }) {
    const value = useContext(modeContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("loginData");

        navigate('/login');

    }

    return (
        <div className='logoutmenu'>
            <div className={`logoutpopup shadow-lg  bg-${(value.mode === "light") ? 'light' : ''}`}>
                <h4 className={`text-${(value.mode === 'light') ? 'dark' : ''}`}>Are you sure you want to logout?</h4>
                <div className='logoutconfirm '>
                    <button className='cancel bg-danger text-light' onClick={() => setLogoutvalue(false)}>Cancel</button>
                    <button className='logoutbtn bg-warning text-light' onClick={logout}>Logout</button>
                </div>

            </div>
        </div>

    )
}
