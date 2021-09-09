import React from 'react'
import '../css/MainNav.css'
import {NavLink} from 'react-router-dom'
function MainNav() {
		
	return (
		<ul className="main_menu">
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/write">글쓰기</NavLink>
			</li>
			<li>
				<NavLink to="/login" >로그인</NavLink>
			</li>
			<li>
				<NavLink to="/join" >회원가입</NavLink>
			</li>
		</ul>
	)
}

export default MainNav
