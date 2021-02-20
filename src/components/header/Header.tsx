import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import './Header.sass'
import logo from '../../images/logo.png'
import cartIcon from '../../icons/cart.svg'


const Header = () => {

    const {totalCount} = useSelector(({ cart }:any) => cart)

    return (
        <header>
            <div className="container">
                <div className="header_content">
                    <Link className="logo" to="/">
                        <img src={logo} alt=""/>
                    </Link>
                    <Link to="/cart" className="header_content_cart">
                        <span className="header_content_cart_total">{totalCount}</span>
                        <button >Моя корзина <img src={cartIcon} alt=""/></button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;