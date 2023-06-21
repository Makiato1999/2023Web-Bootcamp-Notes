import React from "react";

function Detail(props) {
    return (
        <div>
            <p className="info">{props.email}</p>
            <p className="info">{props.intro}</p>
        </div>
    );
}

export default Detail;