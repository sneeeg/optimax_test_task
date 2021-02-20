import React from "react";


const ProductCard = ({id,title,image,price,cartAdd}:{id:number,title:string,image:string,price:number,cartAdd:any}) => {
    const onAddProduct = () => {
        const obj = {
            id,
            title,
            image,
            price,
        }
        {cartAdd(obj)}
        alert('Товар добавлен в корзину')
    };

    return (
        <div className="product_card">
            <div className="product_card_img">
                <img src={image} alt=""/>
            </div>
            <div className="product_card_descr">
                <div className="product_card_title"><h1>{title}</h1></div>
                <div className="product_card_price"><h2>{price + '$'}</h2> <button onClick={onAddProduct}>В корзину</button></div>
            </div>
        </div>
    )
}


export default ProductCard;