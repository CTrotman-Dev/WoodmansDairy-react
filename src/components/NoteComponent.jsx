import React, {useState} from "react";

import NewNote from "./NewNote";
import Notes from "./Notes";

import notes from "../notes";

const NoteComponent = () => {
    const [allNotes, setAllNotes] = useState(notes);

    function addNewNote(newNote) {
        if(newNote.title !== "" && newNote.content !== ""){
            setAllNotes(prevValue => {
                return [...prevValue, newNote]
            })
        } else{
            alert("Note is empty");
        }
        
    }

    function deleteNote(id){
        console.log(id);
        setAllNotes(prevValue =>{
            return prevValue.filter((note,index)=>{
                return (id !== index);
            });
        })
        
    }

    return (
        <div className="row">
            <NewNote onAdd={addNewNote} />
            {allNotes.map((x,i) =>
                <Notes 
                key={i} 
                id={i} 
                title={x.title} 
                content={x.content} 
                onDelete={deleteNote}/>
            )}
        </div>
    );
}

export default NoteComponent;