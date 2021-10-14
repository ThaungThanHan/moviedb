import '../styles/header.scss';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class HeaderSearch extends Component {
    render() {
        return (
            <div class="Header">
                    <Link to="/"><h1 class="Header_logo">MovieSearch</h1></Link>
                    <nav class="Header_links">
                        <h3 class="Header_links_link">Movies</h3>
                    </nav>
                    {/* <form class="Header_search" action="#" onSubmit={this.handle}>
                        <input class="Header_search_searchbox" type="search" placeholder="Search Movies" value={query}
                        onChange={(e)=> setQuery(e.target.value)}/>
                    </form> */}
            </div>
        );
    }
}

export default HeaderSearch;