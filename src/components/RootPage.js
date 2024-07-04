import React from 'react'
import Navbar from './Todocomponents/Navbar'
import { Outlet } from 'react-router-dom'

export const RootPage = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
