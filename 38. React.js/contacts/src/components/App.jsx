import React from "react";
let temp = [];

function App(props) {
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
    });
    return (
        <div>
            <h1 className="heading">My Gallery Contacts</h1>
            <Avatar />
            {temp}
        </div>
    );
}
export default App;