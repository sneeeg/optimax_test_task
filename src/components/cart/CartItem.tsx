import React from "react";
import './CartItem.sass'
import crossIcon from '../../icons/cross.svg'


const CartItem = ({id, name, image, itemPrice, totalCount, onRemove, onMinus, onPlus}:{id:number,name:string,image:string, itemPrice:number,totalCount:number,onRemove:any,onMinus:any,onPlus:any}) => {
    const handleRemoveClick = () => {
        onRemove(id);
    };

    const handlePlusItem = () => {
        onPlus(id);
    };

    const handleMinusItem = () => {
        onMinus(id);
    };

    return (
        <div className="cart_item">
            <div className="cart_item_img">
                <img src={image} alt=""/>
            </div>
            <div className="cart_item_descr">
                <h1>{name}</h1>
                <p>Цена: {itemPrice}$</p>
            </div>
            <div className="cart_item_counter_block">
                <p>В корзине</p>
                <div className="cart_item_counter">
                    <button className="cart_item_counter_button" onClick={handlePlusItem}>+</button>
                    <p>{totalCount}</p>
                    <button className="cart_item_counter_button" onClick={handleMinusItem}>-</button>
                </div>
            </div>
            <div className="cart_remove_item" onClick={handleRemoveClick}>
                <img src={crossIcon} alt=""/>
            </div>
        </div>
    )
}
export default CartItem
