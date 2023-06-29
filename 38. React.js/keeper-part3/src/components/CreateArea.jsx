import React, {useState} from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import ClickAwayListener from '@mui/base/ClickAwayListener';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isExpanded, setIsExpanded] = useState(false);

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

    function expand() {
        setIsExpanded(!isExpanded);
    }
    
    const handleClickAway = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
        <ClickAwayListener onClickAway={handleClickAway}>
        <form className="create-note">
                {
                    isExpanded === true && (<input name="title" onChange={handleOnChange} value={note.title} placeholder="title" />)
                }
                <textarea name="content" onClick={expand} onChange={handleOnChange} value={note.content} placeholder="take a note..." rows={isExpanded === true ? 3:1} />
                <Zoom in={isExpanded}>
                    <Fab onClick={handleOnClick} >
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </ClickAwayListener>
        </div>
    );
}

export default CreateArea;