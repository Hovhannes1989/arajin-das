import React from 'react';
import './Header.css';
import { Button } from "reactstrap";

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
                    <li><a href="#">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="#">Contact</a></li>

                </ul>
            </nav>
        </header>
    )
}
export default Header;