import React from 'react'
import '../css/BucketMain.css'

function MainBBs() {
	return (
		<div className="main_container">
			<div className="input_text">
				<input type="text" placeholder="이번주에는 무엇을" />
			</div>
			<div>
				<table className="bucket_list">
					<thead>
						<tr>
							<th>FLAG</th>
							<th>날짜</th>
							<th>BUCKET</th>
							<th>완료</th>
							<th>취소</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>일반</td>
							<td>2021-09-01 00:00:00</td>
							<td>리액트정복</td>
							<td>ㅇ</td>
							<td><input type="checkbox" /></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default MainBBs
