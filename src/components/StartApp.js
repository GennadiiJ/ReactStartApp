import React from "react";

function StartApp () {
    let dayTime;
    const hours = new Date().getHours();
    const day = new Date().getDay();
    if (hours < 12)
        dayTime = "morning";
    else if (hours >= 12 && hours < 18)
        dayTime = "afternoon";
    else dayTime = "night";
    return (
        <div>
            <h1>It is {dayTime} now</h1>
            <h3>Another way to treat params {`${dayTime} "and" ${day}`}</h3>
        </div>
    )
}

export default StartApp;