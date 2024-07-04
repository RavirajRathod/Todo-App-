import React, { useState } from 'react'

export default function Notes({ text, id, deleteNote, editNote, handleStrike, status }) {

    return (
        <div className=' mt-5 notes'>
            {(status === 'Pending') ? <p>{text}</p> : <s>{text}</s>}
            <div className='buttons'>
                <button className='bg-warning' onClick={() => handleStrike(id)}>&#10004;</button>
                <button className='bg-primary' onClick={() => editNote(id)}>&#128221;</button>
                <button className='bg-danger' onClick={() => deleteNote(id)}>&#128465; </button>
                <button className='bg-dark'>&#8594;</button>

            </div>

        </div>
    )
}
