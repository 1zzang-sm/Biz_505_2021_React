import React from 'react'
import '../css/BBsWrite.css'
function BBsWrite() {
	return (
		<div className="main_writer">
			<input type="text" placeholder="작성자" />
			<input type="text" placeholder="제목" />
			<input type="text" placeholder="내용" />
			<button>저장</button>
		</div>
	)
}

export default BBsWrite
