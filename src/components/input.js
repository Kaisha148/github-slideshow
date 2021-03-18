import React from 'react';
import './css/input.css';

function Input(props) {
    return (
        <input type={props.type} name={props.name} min="1900-01-01" max="2100-12-31"></input>
    )
}

export default Input;