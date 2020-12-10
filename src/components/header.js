import '../styles/header.scss';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div class="Header">
                    <Link to="/"><h1 class="Header_logo">MovieSearch</h1></Link>
                    <nav class="Header_links">
                        <h3 class="Header_links_link">Trending</h3>
                    </nav>
                    <div class="Header_dropdown">
                        <button class="Header_dropdown_button">Search
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="Header_dropdown_content">
                            <Link to="/movies"><a href="#">Movies</a></Link>
                            <a href="#">TV Shows</a>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Header;