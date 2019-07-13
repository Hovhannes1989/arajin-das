import React from 'react';
import './Content.css';

function Content(props) {
    return (
        <main>
            {props.children}
        </main>
    )
}
export default Content;