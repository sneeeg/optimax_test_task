import React, {Component} from 'react';
import './Products.sass'
import ProductCard from "./ProductCard";
import {connect} from 'react-redux';
import {fetchProducts} from "../../store/products/productsAction";
import {addProductToCart} from "../../store/cart/cartAction";

interface Products {
    title: string,
    price: number,
    image: string
}

interface Props {
    products: Products[],
    isLoading?: boolean,
    fetchProducts?: any,
    addProductToCart?:any
}

interface State {

}




class Products extends Component<Props,State> {

    componentDidMount() {
        this.props.fetchProducts()
    }

    handleAddProdToCart = (prod:any) => {
        this.props.addProductToCart(prod)
    };


    public render(): React.ReactNode {

        const {products,isLoading} = this.props
        if (isLoading) {
            return (
            <div className="loader">
                <div className="container">
                    Loading...
                </div>
            </div>)

        }

        return (
            <div>
                <div className="products_content">
                    <div className="container">
                        <div className="products_content_title">
                            <h1>
                                Список товаров
                            </h1>
                        </div>
                        <div className="products_content_list">
                                {products.map(
                                    (prod:any) =>
                                        <ProductCard
                                            key={prod.id}
                                            id={prod.id}
                                            title={prod.title}
                                            image={prod.image}
                                            price={prod.price}
                                            cartAdd={this.handleAddProdToCart}
                                        />
                                    )
                                }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state: any) {
    return{
        products: state.products.products,
        isLoading:state.app.isLoading
    }
}


const mapDispatchToProps = {
    fetchProducts,
    addProductToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);