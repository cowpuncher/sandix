import React from 'react';

const Link = props => {
    return (
        <a href={props.href} className="App-link">
            {props.linkName}
        </a>
    )
}

export default Link;