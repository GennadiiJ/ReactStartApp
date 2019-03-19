import React, {Component} from "react";
import productData from "./my-data/ProductsData"
import Product from "./components/Product"

class StartApp extends Component {
    render() {
        const productComponents = productData.map(elem => <Product key={elem.id} item={elem} />);
        return (
            <div>{productComponents}</div>
        )
    }
}

export default StartApp;