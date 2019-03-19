import React, {Component} from "react";

class StartApp extends Component {
    someFunction(){
        console.log("I was cklicked.")
    }
    render() {
        return (
           <div>
               <img onMouseOver={() => console.log("Hoverd")} src="https://fillmurray.com/200/100" alt=""/>
               <br/>
               <br/>
               <button onClick={this.someFunction}>Click me</button>
           </div> 
        )
    }
}

export default StartApp;