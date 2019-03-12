import React from "react";
import ReactDOM from "react-dom";

function MyInfo () {
    return (
        <div>
            <h1>Name</h1>
            <p>Text about some issue.</p>
            <ul>
                <li>Tokyo</li>
                <li>Madrid</li>
                <li>New York</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<MyInfo />, document.getElementById('root'));