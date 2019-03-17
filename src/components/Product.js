import React from "react";

function Product (props) {
    return (
        <div className="component">
            <h1>{props.name}</h1>
            <p>{props.desc}</p>
            <span>Price: {props.price}</span>
        </div>
    )
}

export default Product;