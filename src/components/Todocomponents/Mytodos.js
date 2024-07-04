import React, { useState } from 'react';
import Notes from './Notes';
import { nanoid } from 'nanoid';
import { useContext } from 'react';
import { modeContext } from '../../context/context';

export default function Mytodos({ handleStrike, notes, setNotes, updateNote, update, setUpdate, setUpid, text, setText }) {

    const value = useContext(modeContext);

    const handleText = (event) => {
        setText(event.target.value);
    }


    const addNote = () => {
        if (text !== '') {
            const newnote = {
                text: text,
                id: nanoid(),
                status: 'Pending'
            }
            const addnewNote = [...notes, newnote];
            setNotes(addnewNote);
            localStorage.setItem("noteData", JSON.stringify(notes))
            setText('');
        }
    }
    const deleteNote = (id) => {
        const note = notes.filter((item) => item.id !== id);
        setNotes(note);
        setUpdate(false);
    }
    const editNote = (id) => {
        const edit = notes.filter((item) => item.id === id);
        if (edit[0].status === "Completed") { console.log('Task is completed'); }
        else {
            setText(edit[0].text);
            setUpdate(true);
            setUpid(edit[0].id);
        }

    }

    return (
        <div className={`container todos bg-${(value.mode === 'light') ? 'light' : ''} shadow-lg`}>
            <p className={`fw-bolder fs-3 text-${(value.mode === 'light') ? 'dark' : 'light'} mytodo`}>My Todos <span className='icon'>&#9989;</span></p>
            <div class="container mb-3 note">
                <input type="text" class="form-control addnoteinput" placeholder="Enter Your Task..." value={text} onChange={handleText} />
                {(update === false) ? <button class="addbutton" type="button" onClick={addNote} >Add</button> :
                    <button class="addbutton" type="button" onClick={() => updateNote()} >Update</button>}


            </div>
            <div className='container notediv'>
                {(notes.length === 0) ? <h3 className='text-light mt-4'>No task added.</h3> : notes.map((note) => <Notes text={note.text} id={note.id} deleteNote={deleteNote} editNote={editNote} handleStrike={handleStrike} status={note.status} />)}
            </div>

        </div>
    )
}
