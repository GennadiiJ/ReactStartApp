import React from "react";

function Joke (props) {
    const questStyle = {
        color: "red",
        backgroundColor: "yellow"
    }
    return (
        <div className="joke">
            <h1>You know what?</h1>
            <p style={questStyle}>{props.text.question}</p>
            <h2 style={{display: props.text.punchLine ? "block" : "none"}}>Because {props.text.punchLine}</h2>
            <h2 style={{display: !props.text.punchLine && "none"}}>Because {props.text.punchLine}</h2>
        </div>
        
    )
}

export default Joke;