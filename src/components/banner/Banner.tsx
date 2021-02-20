import React, {Component} from 'react';
import './Banner.sass'
import watchImage from '../../images/S1_Smart_1_2x_1_1.png'

export default class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="container">
                    <div className="banner_content">
                        <div className="banner_content_title">
                            <h1>Оригинальная техника Apple напрямую <br/> из Америки</h1>
                        </div>
                        <div className="banner_content_subtitle">
                            <p>Широкий ассортимент оригинальной продукции Apple с гарантией и доставкой.
                                Самые выгодные цены и условия.
                                Мы тщательно отбираем товары, которые предлагаем своим покупателям
                            </p>
                        </div>
                        <div className="banner_content_btn">
                            <button>Смотреть каталог</button>
                        </div>
                    </div>
                    <div className="banner_apple_watch">
                        <img src={watchImage} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}