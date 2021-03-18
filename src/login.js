import React, { useState } from 'react';
// import { Link } from 'react-router-dom'
// import './css/login.css';
import Input from './components/input'
import Header from './components/header'
import Button from './components/button'
import Modal from './components/modal'

function Login(props) {
    const [show, setShow] = useState(false)
    return (
        <div>
            <Header />
            <table border="0">
                <tr>
                    <td align="right"><b> ログインID：</b></td>
                    <td><Input type="text" name="name" size="30" maxlength="20" /></td>
                </tr>
                <tr>
                    <td align="right"><b> パスワード：</b></td>
                    <td><Input type="password" name="pass" size="6" maxlength="4" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <div>
                            <Button event={() => setShow(true)} value='ログイン' />
                            <Modal show={show} setShow={setShow} setLoginState={props.setLoginState}/>
                        </div>
                    </td>
                </tr>
            </table>

        </div>
    )
}

export default Login;