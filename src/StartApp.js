import React from "react";
import productData from "./my-data/ProductsData"
import Product from "./components/Product"

function StartApp () {
    const productComponents = productData.map(elem =>
        <Product 
            key={elem.id} 
            price={elem.price} 
            desc={elem.description} 
            name={elem.name.toUpperCase()}
         />
    )
    return (
        <div>
            {productComponents}
        </div>
    )
}

export default StartApp;