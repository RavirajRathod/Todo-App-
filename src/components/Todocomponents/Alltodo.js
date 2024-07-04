import React, { useEffect, useState } from 'react'
import Todolistdetail from './Todolistdetail'
import { useContext } from 'react'
import { modeContext } from '../../context/context'

export default function Alltodo() {

    const [currentpage, setCurrentpage] = useState(1);
    const itemsperPage = 10;

    const value = useContext(modeContext);

    // const note = JSON.parse(localStorage.getItem("noteData"))
    const [dataLoaded, setDataLoaded] = useState(false);
    const fetchAllData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "GET"
        })
        console.log(response)
        const data = await response.json()
        console.log(data)
        localStorage.setItem("data", JSON.stringify(data));
        setDataLoaded(true);
    }

    const Alldata = JSON.parse(localStorage.getItem("data")) || []

    const totalPage = Math.round(Alldata.length / itemsperPage);
    const startIndex = (currentpage - 1) * itemsperPage;
    const endIndex = startIndex + itemsperPage;
    const currentItems = Alldata.slice(startIndex, endIndex);

    const previous = () => {
        const page = currentpage - 1;
        setCurrentpage(page);
    }
    const next = () => {
        const page = currentpage + 1;
        setCurrentpage(page);
        console.log(totalPage);
        console.log(currentpage);

    }

    useEffect(() => {
        fetchAllData()
    }, [])

    return (
        <>
            {dataLoaded && <div className={`container my-5 about text-${(value.mode === 'light') ? 'dark' : 'light'}`}>
                <div className='todotitle'>
                    <h2 className='fw-bolder aboutt'>List of ToDos</h2>
                </div>

                <div className='container alltodos'>
                    {currentItems.map((note) => <Todolistdetail text={note.title} status={note.completed} />)}
                    {/* <Todolistdetail /> */}
                </div >
                <div className='page'>
                    <button className={`btn btn-primary ${(startIndex === 0) ? 'disabled' : ''}`} onClick={previous}>Previous</button>
                    <lable className="pagenum btn btn-light">{currentpage}</lable>
                    <button className={`btn btn-primary ${(currentpage === totalPage) ? 'disabled' : ''} `} onClick={next}>Next</button>
                </div>


            </div >}
        </>

    )

}
