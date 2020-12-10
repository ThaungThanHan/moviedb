import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import HomePage from '../components/homepage';
import Movies from '../components/movies';
class Main extends Component {
    render() {
        return (
            <Switch>
            <Route path="/" component={HomePage}exact={true}/>
            <Route path="/movies" component={Movies}exact={true}/>
            </Switch>
        );
    }
}

export default Main;