import React from 'react';
import './Header.css';
import { Button } from "reactstrap";
import {NavLink} from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <Button
                onClick={props.onToggleHandler}
                type="button"
                color="primary">
                burger
            </Button>
            <nav className="logo">
                <ul>
                    <li><NavLink exact to="/"activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/contact"activeClassName="active">Contact</NavLink></li>
                    <li><NavLink to="/about"activeClassName="active">About</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;