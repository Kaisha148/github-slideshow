import React from 'react';
import './css/tab.css'
import { Link } from 'react-router-dom';
function Tab() {
    return (
        <div class="area">
            <input type="radio" name="tab_name" id="tab1" ></input>
            <label class="tab_class" for="tab1">最新位置情報<Link to='/login'></Link></label>
            <input type="radio" name="tab_name" id="tab2" checked></input>
            <label class="tab_class" for="tab2">ドライバー一覧<Link to='/driverlist'></Link></label>
            <input type="radio" name="tab_name" id="tab3" ></input>
            <label class="tab_class" for="tab3">危険運転・<br />うっかり運転一覧(全体)<Link to='/driverlist'></Link></label>
            <input type="radio" name="tab_name" id="tab4" ></input>
            <label class="tab_class" for="tab4">ランキング<Link to='/driverlist'></Link></label>
        </div>
    )
}

export default Tab;