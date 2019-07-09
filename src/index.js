import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom';

import About from "./About";
import Contact from "./Contact";

import './index.css';
import App from './App';



ReactDOM.render(
    <Router>
        <Switch>
            <Route exact component={App} path="/" />
            <Route component={About} path="/about" />
            <Route component={Contact} path="/contact" />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>,
    document.getElementById('root')
);