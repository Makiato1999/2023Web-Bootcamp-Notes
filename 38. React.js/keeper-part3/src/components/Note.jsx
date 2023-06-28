import React from "react";

function Note(props) {
    function handleOnClick(event) {
        props.onDel(props.id);
        event.preventDefault();
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleOnClick}>Del</button>
        </div>
    );
}

export default Note;