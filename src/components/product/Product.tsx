import React, {FC} from "react";
import {IProductModel} from "../../models/IProductModel";
import './Product.css';


const Product:FC<IProductModel> = ({id, title, description, category, price, image}) => {
    return (
        <div>
            <div>id - {id}</div>
            <p>title - {title}</p>
            <p>description - {description}</p>
            <div>category - {category}</div>
            <div>price - {price}</div>
            <img className={'img'} src={image} alt={title}/>
        </div>
    );
};

export default Product;