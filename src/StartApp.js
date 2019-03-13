import React from "react";
import Joke from "./components/Joke";

function StartApp () {
    return (
        <div>
            <Joke text={{question: "1. Why cat are so fast?", punchLine: " they are small."}} />
            <Joke text={{question: "2. Why code is hard to read", punchLine: " you wrote it."}} />
            <Joke text={{question: "3. Why dogs are good", punchLine: " they are smart."}} />
            <Joke text={{question: "4. Why sky is blue"}} />
        </div>
    )
}

export default StartApp;