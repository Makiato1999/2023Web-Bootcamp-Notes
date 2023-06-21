import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from '../notes';

function App() {
    
    return (
        <div>
            <Header />
            {
                notes.map((card)=>(
                    <Note 
                        key={card.id}
                        title={card.title}
                        content={card.content}
                    />
                ))
            }
            <Footer />
        </div>
    );
}

export default App;