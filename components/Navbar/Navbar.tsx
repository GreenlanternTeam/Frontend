import type { NextPage } from 'next'
import styled from 'styled-components'
import React, { useState, Dispatch, SetStateAction } from 'react'

interface props {
	setOnSlide: Dispatch<SetStateAction<boolean>>
}

const Navbar: NextPage<props> = ({ setOnSlide }: props) => {
	return (
		<Wrapper>
			<MenuList>
				<li onClick={() => setOnSlide(true)}></li>
				<li></li>
				<li></li>
			</MenuList>
		</Wrapper>
	)
}
export default Navbar

const Wrapper = styled.div`
	width: 20%;
	height: 100%;
	background-color: white;
	position: fixed;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
`
const MenuList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;

	li {
		width: 3em;
		height: 3em;
		background-color: black;
		border-radius: 50%;
		margin-top: 40px;
	}
`
