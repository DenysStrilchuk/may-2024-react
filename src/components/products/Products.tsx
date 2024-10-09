import React, {FC} from "react";
import Product from "../product/Product";

interface IProps {
    id: number;
    title: string;
    description: string;
    category: string;
    price: string;
    images: string[];

}

const Products: FC<IProps> = (props) => {
    const products = fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(console.log);
    return (
        <ul>
            {products.map(({
                               id,
                               title,
                               description,
                               category,
                               price,
                               images
                           }: IProps) => <li>
                <Product id={id}
                         title={title}
                         description={description}
                         category={category}
                         price={price}
                         images={images}
                />
            </li>)}
        </ul>
    );
};

export default Products;