import React, { useState } from 'react';

import Header from './components/header';
import Button from './components/button';
import Input from './components/input';
import Table from './components/table';
import List from './components/list';
import Tab from './components/tab';
import { Link } from 'react-router-dom';

import './css/driverlist.css';

function DriverList() {
    const [show,setShow] = useState(false);
	return (
		<div className="body">
            <p><Link to={'/top'}>ホーム</Link> ＞ ドライバー一覧</p>

            <h2>ドライバー一覧</h2>
            <div className="explain">
                <p>スマイリングロードを利用しているドライバーを検索、表示することができます。</p>
                <p>また各ドライバー運転診断結果や最新位置情報も確認できます。</p>
                <p>ドライバー情報とは</p>
                <p>※データの保持については、データ単位で期限がございます。詳しくは<Button class="link-style-btn" background="white" value="こちら" />へ。</p>
            </div>

            <div class="search_title_area">    
                <h3>絞り込み検索<Button width="5em" event={()=>setShow(show ? false : true)} value={show ? "▼ 開く" : "X 閉じる"} float="right" background="white" color="black" /></h3>
                
            </div>  
            <div id="search" style={{ display: show ? 'none' : '' }}>
                <table>
                    <tbody>            
                        <tr>
                            <td>テキスト検索</td>
                            <td><Input type="text" name="name" /></td>
                            <td colspan="2" rowspan="5">
                                ・テキスト検索では、ドライバー名や所属部門ID、ナンバープレート等の情報を<br />　複数入力して検索が可能です。<br />
                                ・検索単語の間にはスペースを入れてください。<br />
                                ・所属部門の名称から検索する場合は、プルダウンで選択してください。<br />
                                ・氏名の一部や、所属部門IDから「あいまい検索」することも可能です。<br />
                                ・英単語で検索する場合、大文字・小文字、半角・全角は識別しません。
                            </td>
                        </tr>
                        <tr><td>　</td></tr>
                        <tr><td>　</td></tr>
                        <tr><td>　</td></tr>
                        <tr><td>　</td></tr>
                        <tr><td>　</td></tr>
                        <tr>
                            <td>状態</td>
                            <td><label><Input type="radio" name="radio1" value="すべて表示" checked /> すべて表示</label></td>
                            <td><label><Input type="radio" name="radio1" value="稼働中（ドラレコ登録あり）"　/>稼働中（ドラレコ登録あり）</label></td>
                            <td><label><Input type="radio" name="radio1" value="稼働中（ドラレコ登録なし）" />稼働中（ドラレコ登録なし）</label></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><label><Input type="radio" name="radio1" value="稼働なし（ドラレコ登録あり）" />稼働なし（ドラレコ登録あり）</label></td>
                            <td><label><Input type="radio" name="radio1" value="稼働なし（ドラレコ登録なし）" />稼働なし（ドラレコ登録なし）</label></td>
                            <td><label><Input type="radio" name="radio1" value="ログインロック中のドライバー" />ログインロック中のドライバー </label></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><label><Input type="radio" name="radio1" value="ドライバー未登録ドラレコ" />ドライバー未登録ドラレコ</label></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td></td>
                            <td><label><Input type="checkbox" value="解約済みドラレコ含む" />ドライバー未登録ドラレコ</label></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>所属部門</td>
                            <td>
                                <select name="searchPull" id="searchPull">
                                    <option value="houjinShozoku">法人所属</option>
                                </select>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>最終走行日時</td>
                            <td>
                                <Input type="date" />~<Input type="date" />
                            </td>
                        </tr> 
                        <tr>
                            <td colspan="4" align="center">
                                <Button class="link-style-btn" background="white" value="検索条件をクリアする" />
                                <span>　</span>
                                <Button value=">検索" background="#B85454 0%, #B72424 100%" />  
                            </td>
                        </tr>                      
                    </tbody>
                </table>
            </div>                  

            <div className="option">
                <Button backgroundColor="orange" value=">ドライバー情報の修正" />
                <span>　</span>
                <Button backgroundColor="orange" value=">日報・月報の作成" />
                <span>　</span>
                <Button backgroundColor="orange" value=">診断レポート・ドライバー分析一覧" />
                <span>　</span>
                <Button backgroundColor="orange" value=">分析一覧ダウンロード（仮称）" />
                <span>　</span>
                <Button backgroundColor="green" value=">CSV一括ダウンロード" />
            </div>

            <div>
                <Table table_num='1' />
            </div>
		</div>
	);
}

export default DriverList;

