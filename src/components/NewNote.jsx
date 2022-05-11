import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

import { Zoom, Fab } from '@mui/material';


const NewNote = (props) => {
    const [isExpanded,setIsExpanded] = useState(false);

    const [currentNote, setCurrentNote] = useState({
        title: "",
        content: ""
    });

    function handleClick(){
        setIsExpanded(true);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setCurrentNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(currentNote);
        setCurrentNote({ title: "", content: "" });
        setIsExpanded(false);
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && <input value={currentNote.title} onChange={handleChange} name="title" placeholder="Title" />}
                <textarea value={currentNote.content} onClick={handleClick} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
                {/* <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab> */}
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default NewNote;