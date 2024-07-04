import React from 'react';
import { useContext } from 'react';
import { modeContext } from '../../context/context';

export default function Aboutpage() {
    const value = useContext(modeContext);
    return (
        <div className={`container my-5 about text-${(value.mode === 'light') ? 'dark' : 'light'}`}>
            <div className='todotitle'>
                <h2 className='fw-bolder aboutt'>About Todo</h2>
            </div>
            <div>

            </div>
            <p className='fs-5'>A to-do list is a list of items that <span className='text-danger'>need to be completed.</span>
                The items on the list can range from simple activities like replying to an email,
                to more complex tasks like creating project briefs.</p>
            <p className='fs-5'>The items on a to-do list are usually <span className='text-danger'>action-oriented,</span>
                such as “Schedule a meet with the R&D team” or “Call back customer X.” Some lists include more abstract goals,
                such as “improve your time management skills” or “learn how to use a new software program.”</p>
        </div>
    )
}
