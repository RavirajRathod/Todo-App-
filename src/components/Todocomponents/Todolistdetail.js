import React from 'react'
import { useContext } from 'react'
import { modeContext } from '../../context/context'

export default function Todolistdetail({ text, status }) {
    const value = useContext(modeContext);
    return (
        <>
            <div className={`todolist my-2 bg-${(value.mode === 'light') ? 'light' : ''} shadow-sm`}>
                <p>{text}</p>
                {(status === false) ? <p class="textstatus bg-danger text-light ">Pending</p> : (status === true) ? <p class="bg-warning textstatus text-light">Completed</p> : ''}
            </div >
        </>
    )
}
