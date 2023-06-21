import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <p>{props.key}</p>
                <h2 className="name">{props.name}</h2>
                <Avatar image={props.image} />
            </div>
            <div className="bottom"> 
                <Detail email={props.email} />
                <Detail intro={props.intro} />
            </div>
        </div>
    );
}

export default Card;