import React, {Component} from 'react';
import './Footer.sass'
import logo from "../../images/logo.png";
import instIcon from "../../icons/instagram.svg";
import youtubeIcon from "../../icons/youtube.svg";


export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="footer_content">
                        <div className="footer_content_logo">
                            <a href="/" className="logo"><img src={logo} alt=""/></a>
                        </div>
                        <div className="footer_content_socials">
                            <h2>Нас можно найти:</h2>
                            <div className="footer_content_socials_group">
                                <a href="https://instagram.com"><img src={instIcon} alt=""/></a>
                                <a href="https://youtube.com"><img src={youtubeIcon} alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}