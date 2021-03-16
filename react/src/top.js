import React from 'react';
// import './css/top.css';
import Header from './components/header'
import Button from './components/button'
import Input from './components/input'
import Table from './components/table'
import List from './components/list'
function Top() {
	return (
		<div>
            <Header />		
			<table border="0">
				<tr>
					<td align="right"><b> テキスト検索：</b></td>
					<td><Input type="text" name="name" size="30" maxlength="20" /></td>
				</tr>
				<tr>
					<td align="right"><b>状態：</b></td>
					<td>
						<Input type="radio" name="gakunen" value="すべて表示" />すべて表示
						<Input type="radio" name="gakunen" value="稼働中" />稼働中
						<Input type="radio" name="gakunen" value="稼働なし" />稼働なし<br />
						<Input type="radio" name="gakunen" value="ログインロック状態のドライバー" />ログインロック状態のドライバー<br />
						<Input type="radio" name="gakunen" value="SDカードロック状態" />SDカードロック状態
					</td>
				</tr>
				<tr>
					<td align="right"><b>日時：</b></td>
					<td>
						<Input type="date" />~
						<Input type='date' />
					</td>
				</tr>
				<tr>
					<td></td>
					<td>
						<Button type="submit" value="検索" />
						<Button type="reset" value="リセット" />
					</td>
				</tr>
			</table>
            <div>
				<List />
            </div>
            <div>
				<Table />
            </div>
		</div>
	);
}

export default Top;