import React from 'react';
import {Route} from 'react-router-dom';
import './App.sass';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import CartPage from './pages/cart/CartPage'
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Route path="/" component={Home} exact />
            <Route path="/cart" component={CartPage} exact />
            <Footer />
        </div>
    )
}


export default App;