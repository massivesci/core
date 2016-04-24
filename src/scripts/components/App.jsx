import React from 'react';

export default function(props) {
    return (
        <div className="app">
            <h1>Hello, Worb!</h1>
            {props.children}
        </div>
    )
}
