import React from 'react'

// 부모로 부터 전달받은 변수중에서
// friend라는 이름의 변수를 분리해 내기
const view =(props)=> {
	const {friend} = props
	return (
		<div>
			<h1>{friend.f_name}</h1>
			<h1>{friend.f_addr}</h1>
		</div>
	)
}

export default view
