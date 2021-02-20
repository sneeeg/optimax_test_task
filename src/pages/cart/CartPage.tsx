import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './CartPage.sass'
import Cart from "../../components/cart/Cart";

class CartPage extends Component {
    render() {
        return (
            <div className="cart_page">
                <div className="container">
                    <div className="cart_page_title">
                        <h1>Ваша корзина</h1>
                    </div>
                    <p><Link to="/">Главная</Link> / Корзина</p>
                    <div className="cart_page_content">
                        <Cart/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartPage;