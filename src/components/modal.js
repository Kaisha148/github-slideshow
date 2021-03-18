import React from 'react';
import { Link } from 'react-router-dom';
import './css/modal.css';
import Button from './button'

function Modal(props) {
    function handleClick(){
        props.setShow(false);
        props.setLoginState(true);
    }
    if (props.show) {
        return (
            <div className="modal">
                <div id="overlay">
                    <div id="content">
                        <p align='center'>ログインしますか？</p>
                        <p align='right'>
                            <Button event={() => props.setShow(false)} value='キャンセル' />
                            {/* <Link to={'/top'}><Button event={() => props.setShow(false)} value='OK' /></Link> */}
                            <Button event={() => handleClick} value='OK' />
                        </p>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }

}

export default Modal;
