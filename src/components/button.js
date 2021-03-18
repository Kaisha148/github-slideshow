import React from 'react';
import './css/button.css'

function Button(props) {
    const style = ({ color, background,backgroundColor, width, height,float}) => ({
        color: color ? color : "auto",
        background: background ? background : "auto",
        backgroundColor: backgroundColor,
        width: width ? width : "auto",
        height: height ? height : "auto",
        float: float 
    });
    return (
        <button onClick={props.event} class={props.class} style={style(props)}>{props.value}</button>
    )
}

export default Button;