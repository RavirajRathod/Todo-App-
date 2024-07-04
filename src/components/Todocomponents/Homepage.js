import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Mytodos from './Mytodos'
// import Aboutpage from './Aboutpage'
// import Alltodo from './Alltodo'
// import Logout from './Logout'
// import { Link } from 'react-router-dom';

export default function Homepage() {

    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("noteData")) || [])
    const [update, setUpdate] = useState(false);
    const [upid, setUpid] = useState('')
    const [text, setText] = useState("")
    const [strike, setStrike] = useState(false)


    useEffect(() => {
        localStorage.setItem("noteData", JSON.stringify(notes))
    }, [notes])




    const handleStrike = (id) => {
        const ob = notes.filter((item) => item.id === id);
        const obtext = ob[0].text;

        console.log(JSON.parse(localStorage.getItem("noteData")))

        // const h = JSON.parse(localStorage.getItem("Registerdata"))
        // console.log(h);

        if (strike === false) {
            // const newText = obtext;
            const n = notes.indexOf(ob[0]);
            notes[n].text = obtext;
            notes[n].status = 'Completed';
            localStorage.setItem("noteData", JSON.stringify(notes))
            setStrike(true);

        } else {
            setStrike(false);
            // const newText = obtext;
            const n = notes.indexOf(ob[0]);
            notes[n].text = obtext;
            notes[n].status = 'Pending';
            localStorage.setItem("noteData", JSON.stringify(notes))
        }
    }

    const updateNote = () => {
        setText('');
        const ob = notes.filter((item) => item.id === upid)
        const n = notes.indexOf(ob[0]);
        notes[n].text = text;
        localStorage.setItem("noteData", JSON.stringify(notes))
        setUpdate(false);
    }


    return (
        <>
            {/* <Navbar /> */}
            <Mytodos handleStrike={handleStrike} notes={notes} setNotes={setNotes} updateNote={updateNote} setUpdate={setUpdate} update={update} text={text} setText={setText} setUpid={setUpid} />

        </>
    )
}
