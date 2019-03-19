import React from "react";

class Product extends React.Component {
    constructor () {
        super();
        this.state = {
            prodState: "Good"
        };
    }

    myMethod (num) {
        return num * 2;
    }

    render() {
        const multiply = this.myMethod(3);
        return (
            <div className="component">
                <h1>{this.props.item.name.toUpperCase()}</h1>
                <h4>{this.props.item.description}</h4>
                <h4>Price: {this.props.item.price.toLocaleString("en-GB", {style: "currency", currency: "GBP"})}</h4>
                <p>State: {this.state.prodState}</p>
                <p>Available: {this.props.item.available ? multiply : "no"} items</p>
            </div>
        )
    }
}

export default Product;