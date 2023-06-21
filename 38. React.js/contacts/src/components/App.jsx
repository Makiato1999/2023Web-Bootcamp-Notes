import React from "react";
import Avatar from "./Avatar";
import * as contacts from "../contacts";
import Card from "./Card";
let temp = [];

function createCard(contact) {
    return (
        <Card 
            key={contact.id}
            name={contact.name}
            image={contact.image}
            email={contact.email}
            intro={contact.intro}
        />
    );
}

function App() {
    /*
    props.contacts.forEach(element => {
        temp.push(
            <div>
                <div className="card">
                    <div className="top">
                        <h2 className="name">{element.name}</h2>
                        <img className="circle-img" src={element.image} alt="none"></img>
                    </div>
                    <div className="bottom">
                        <p className="info">
                            {element.email}
                        </p>
                        <p className="info">
                            {element.intro}
                        </p>
                    </div>
                </div>
            </div>
        );
    });*/
    return (
        <div>
            <h1 className="heading">My Gallery Contacts</h1>
            {contacts.contacts.map(createCard)}
        </div>
    );
}
export default App;