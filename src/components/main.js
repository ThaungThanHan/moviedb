import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import HomePage from '../components/homepage';
import Movies from '../components/movies';
import Shows from '../components/shows';
import MovieOverview from '../components/MovieOverview';
import ShowOverview from '../components/ShowOverview'
class Main extends Component {
    render() {
        return (
            <Switch>
            <Route path="/" component={HomePage}exact={true}/>
            <Route path="/movies" component={Movies}exact={true}/>
            <Route path="/movies/:id" component={MovieOverview} exact={true} />
            <Route path="/shows" component={Shows} exact={true} />
            <Route path="/shows/:id" component={ShowOverview} exact={true} />
            </Switch>
        );
    }
}

export default Main;