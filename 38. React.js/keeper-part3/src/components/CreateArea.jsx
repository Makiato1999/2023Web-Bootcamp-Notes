import React, {useState} from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleOnChange(event) {
        //console.log(event.target);
        const {name, value} = event.target;
        setNote((prev)=>{
            return {
                ...prev,
                [name]: value
            };
        });
    }

    function handleOnClick(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input name="title" onChange={handleOnChange} value={note.title} placeholder="title" />
                <textarea name="content" onChange={handleOnChange} value={note.content} placeholder="take a note..." rows="3" />
                <Fab size="small" color="primary" aria-label="add">
                    <AddIcon onClick={handleOnClick} />
                </Fab>
            </form>
        </div>
    );
}

export default CreateArea;