import React, {useState, useEffect} from 'react';

import './css/table.css';
import fetch from 'node-fetch';
import { DataGrid } from '@material-ui/data-grid';

function Table(props) {
    const [arr,setArr] = useState([{
        id:0,
        firstname:'データなし',
        lastname:'',
        username:''
    }]);
    const URL = 'http://localhost:8080/api/sample/getDemo';
    const Header = [
        "状態",
        "氏名／従業員番号",
        "所属部門(部門ID)",
        "最終走行日時／ナンバープレート(車台番号)／社内管理番号",
        "ドライバーID",
        "操作",
        "最新位置"
    ];
    
    const columns = [
        {field: 'id', headerName:Header[0],width:150,headerClassName:'tableHeader',headerAlign:'center'},
        {
            field: 'firstname',
            renderHeader: () => (
                <div>
                    氏名<br/>
                    従業員番号
                </div>
            ),
            width:270,
            headerClassName:'tableHeader',
            headerAlign:'center'
        },
        {
            field: 'lastname',
            headerName:Header[2],
            width:250,
            headerClassName:'tableHeader'
            ,headerAlign:'center'
        },
        {
            field: 'username',
            renderHeader: () => (
                <div>
                    最終走行日時<br/>
                    ナンバープレート(車台番号)<br/>
                    社内管理番号
                </div>
            ),
            width:400,
            headerClassName:'tableHeader',
            headerAlign:'center'
        },
        {field: 'a', headerName:Header[4],width:300,headerClassName:'tableHeader',headerAlign:'center'},
        {field: 'action', headerName:Header[5],width:220,headerClassName:'tableHeader',headerAlign:'center'},
        {field: 'c', headerName:Header[6],width:300,headerClassName:'tableHeader',headerAlign:'center'}
    ];
    useEffect(async()=>{
        var resArr = [];
        var i = 0;
        await fetch(URL, {mode: 'cors'})
        .then(res => res.json())
        .then(json => {
            resArr= json;
        });
        setArr(resArr);
    }, []);
    return (
        <div align='center' >
            <DataGrid rows={arr} columns={columns} pageSize={25} autoHeight disableColumnSelector headerHeight={125}/>
        </div>
    );
}
export default Table;