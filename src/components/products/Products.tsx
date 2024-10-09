import React from "react";
import Product from "../product/Product";
import {products} from "../../data";
import {IProductModel} from "../../models/IProductModel";

const Products = () => {
    return (
        <ul>
            {products.map(({
                               id,
                               title,
                               description,
                               category,
                               price,
                               image
                           }: IProductModel) =>
                <li key={id}>
                    <Product id={id}
                             title={title}
                             description={description}
                             category={category}
                             price={price}
                             image={image}
                    />
                </li>)}
        </ul>
    );
};

export default Products;