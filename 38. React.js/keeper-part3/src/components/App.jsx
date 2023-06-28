import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import existed_notes from '../notes';
import CreateArea from "./CreateArea";

function App() {
    
    const [new_notes, setNotes] = useState([]);

    function addNote(newNote) {
        console.log(newNote);
        setNotes((prev)=>{
            return [...prev, newNote];
        });
    }
    function delNote(id) {
        console.log(id);
        setNotes((prev)=>{
            return prev.filter((note, index)=>{
                return index !== id;
            });
        });
    }


    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />

            {
                new_notes.map((note, index) =>{
                    return (
                        <Note key={index} id={index} title={note.title} content={note.content} onDel={delNote} />
                    );
                })
            }
            <Footer />
        </div>
    );
}

export default App;