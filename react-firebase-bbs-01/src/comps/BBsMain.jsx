import React, { useEffect, useState } from 'react'
import '../css/BBs.css'
import { firestore } from '../config/BBSConfig'

function BBsMain() {
	const [bbsBody, setBBsBody] = useState([])
	const firebaseFetch = ()=>{
		firestore.collection('bbs')
		.get()
		.then((bbsList) =>{
			bbsList.forEach((bbs) =>{
				const item = bbs.data()
				setBBsBody([
					...bbsBody,
					<tr>
						<td>{item.b_date}</td>
						<td>{item.b_time}</td>
						<td>{item.b_write}</td>
						<td>{item.b_subject}</td>
					</tr>
				])
			})
		})
		
	}
	// 최초로 한번 열릴때 firestore를 가져와서 데이터를 가져오는 명령 
	useEffect(firebaseFetch, [])

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
			<tbody>{bbsBody}</tbody>
		</table>
	)
}

export default BBsMain
