import React from 'react';
import './Cart.sass'
import {connect, useDispatch, useSelector} from "react-redux";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";
import {clearCart, minusCartItem, plusCartItem, removeCartItem} from "../../store/cart/cartAction";




const Cart = () => {
    const dispatch = useDispatch();
    const { totalPrice, totalCount, items } = useSelector(({ cart }:any) => cart)

    const addedProducts = Object.keys(items).map((key) => {
        return items[key].items[0]
    })

    const onClearCart = () => {
        if (window.confirm('Вы действительно хотите очистить корзину?')) {
            dispatch(clearCart())
        }
    }

    const onRemoveItem = (id:number) => {
        if (window.confirm('Вы действительно хотите удалить продукт из корзины?')) {
            dispatch(removeCartItem(id))
        }
    }

    const onPlusItem = (id:number) => {
        dispatch(plusCartItem(id))
    }

    const onMinusItem = (id:number) => {
        dispatch(minusCartItem(id))
    }

    return (
        <div className="cart_wrapper">
            <div className="cart_title">
                {totalCount === 0?
                    <div>
                        <h1>Ваша корзина пустая</h1>
                        <p>.....но не на долго</p>
                        <Link to="/">
                            <p>продолжить покупки</p>
                        </Link>
                    </div>: <></>}
            </div>
            <div className="cart_content">
                {addedProducts.map((obj:any) => (
                    <CartItem
                        key={obj.id}
                        id={obj.id}
                        name={obj.title}
                        image={obj.image}
                        itemPrice={obj.price}
                        totalCount={items[obj.id].items.length}
                        onRemove={onRemoveItem}
                        onMinus={onMinusItem}
                        onPlus={onPlusItem}
                    />
                ))}
            </div>
            {totalCount === 0? <></>:
            <div className="cart_footer">
                <div className="cart_footer_content">
                    <span>Товаров в корзине: {totalCount}</span>
                    <p>Итоговая сумма: {totalPrice}$</p>
                    <button className="cart_get-order" onClick={() => alert('Наш сотрудник свяжется с вами в ближайшее время')}>Оформить заказ</button>
                    <button className="cart_clean-cart" onClick={onClearCart}>Очистить корзину</button>
                </div>
            </div>}
        </div>
    )
}

const mapDispatchToProps = {
    clearCart,
    removeCartItem
}

export default connect(null,mapDispatchToProps) (Cart)
