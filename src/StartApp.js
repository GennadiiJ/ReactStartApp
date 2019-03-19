import React, {Component} from "react";

class StartApp extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.handleClickPlus = this.handleClickPlus.bind(this);
        this.handleClickMinus = this.handleClickMinus.bind(this);
    }

    handleClickPlus() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        });
    }

    handleClickMinus() {
        this.setState(prevState => {
            return {
                count: prevState.count >= 1 ? prevState.count - 1 : 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <div>
                    <button className="left" onClick={this.handleClickPlus}>Increase</button>
                    <button className="right" onClick={this.handleClickMinus}>Decrease</button>
                </div>
            </div>
        )
    }
}

export default StartApp;