import React, {useState, useEffect} from 'react';
import './css/table.css';
import fetch from 'node-fetch';

function Table(props) {
    const [arr,setArr] = useState([]);
    const URL = 'http://localhost:8080/api/sample/getDemo'
    useEffect(async()=>{
        var resArr = [];
        await fetch(URL, {mode: 'cors'})
        .then(res => res.json())
        .then(json => {
            resArr= json;
        });
        setArr(resArr);
    }, []);
    return (
        <div align='center'>
                {renderTable(arr,props.table_num)}
        </div>
    );
}
export default Table;

function renderTable(arr,table_num) {
    var td_rows;
    var th_rows;
    switch (table_num){
        case '1':
            th_rows=(
                <tr class="title_rec">
                    <th id="stetus">状態</th>
                    <th id="name_enum">氏名<br/>従業員番号</th>
                    <th id="dep_id">所属部門<br/>(部門ID)</th>
                    <th id="last_run_time">最終走行日時<br/>ナンバープレート<br/>(車台番号)<br/>社内管理番号</th>
                    <th id="driver_id">ドライバーID</th>
                    <th id="action">操作</th>
                    <th id="latest_loc">最新位置</th>
                </tr>
            )
            td_rows = arr.map((index) =>
                <tr key={index} class="row"> 
                    <td>{index.no}</td>
                    <td>{index.firstname}</td>
                    <td>{index.lastname}</td>
                    <td>{index.username}</td>
                </tr>
            )
            break;
        default:
            th_rows=(
                <tr class="title_rec">
                    <th id="#">#</th>
                    <th id="first_name">First Name</th>
                    <th id="last_name">Last Name</th>
                    <th id="username">Username</th>
                </tr>
            )
            td_rows = arr.map((index) =>
                <tr key={index} class="row"> 
                    <td>{index.no}</td>
                    <td>{index.firstname}</td>
                    <td>{index.lastname}</td>
                    <td>{index.username}</td>
                </tr>
            )
    }
    return (
        <table class="table table-bordered">
            <thead>
                {th_rows}
            </thead>
            <tbody>
                {td_rows}
            </tbody>
        </table>
    )
}
