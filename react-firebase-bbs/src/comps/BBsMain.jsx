import React from 'react'
import '../css/BBsMain.css'

function BBsMain() {
	return (
		<table className="bbs_list">
			<thead>
				<tr>
					<th>작성일자</th>
					<th>작성시각</th>
					<th>작성자</th>
					<th>제목</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>2021-09-08</td>
					<td>09:31:28</td>
					<td>홍길동</td>
					<td>BBs</td>
				</tr>
				<tr>
					<td>2021-09-08</td>
					<td>09:31:28</td>
					<td>홍길동</td>
					<td>BBs</td>
				</tr>
				<tr>
					<td>2021-09-08</td>
					<td>09:31:28</td>
					<td>홍길동</td>
					<td>BBs</td>
				</tr>
			</tbody>
		</table>
	)
}

export default BBsMain
