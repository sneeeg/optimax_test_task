import React, {Component} from 'react';
import './Home.sass'
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";


class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="home_page">
                    <Banner />
                    <Products />
                </div>
            </div>
        )
    }
}

export default HomePage