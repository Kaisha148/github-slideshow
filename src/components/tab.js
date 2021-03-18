import React from "react";
import "./css/tab.css";
import { Link } from "react-router-dom";
const Data = [
    {
        id: 'tab1',
        value: '最新位置情報',
        linkurl: '/driverlist'
    },
    {
        id: 'tab2',
        value: 'ドライバー一覧',
        linkurl: '/driverlist'
    },
    {
        id: 'tab3',
        value: '危険運転・<br />うっかり運転一覧(全体)',
        linkurl: '/driverlist'
    },
    {
        id: 'tab4',
        value: 'ランキング',
        linkurl: '/driverlist'
    }
];
function Tab() {
  return (
    <div class="area">
      {/* <input type="radio" name="tab_name" id="tab1"></input>
      <label class="tab_class" for="tab1">
        最新位置情報
        <Link to="/driverlist" />
      </label>
      <input type="radio" name="tab_name" id="tab2" checked></input>
      <label class="tab_class" for="tab2">
        ドライバー一覧
        <Link to="/driverlist" />
      </label>
      <input type="radio" name="tab_name" id="tab3"></input>
      <label class="tab_class" for="tab3">
        危険運転・
        <br />
        うっかり運転一覧(全体)
        <Link to="/driverlist" />
      </label>
      <input type="radio" name="tab_name" id="tab4"></input>
      <label class="tab_class" for="tab4">
        ランキング
        <Link to="/driverlist" />
      </label> */}
      {/* {renderTab(Data)} */}
    </div>
  );
}

function renderTab(tabData){
    const tabElements = tabData.map((index) =>
        <div key={index}>
            <input type="radio" name="tab_name" id={index.id}></input>
            <label class="tab_class" for={index.id}>
                {index.value}
                <Link to={index.linkurl} />
            </label>
        </div>
    )
    return tabElements;
}
export default Tab;