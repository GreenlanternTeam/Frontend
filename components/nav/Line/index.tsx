import React from 'react'
import styled from 'styled-components'
const Line = () => {
	return <LineDiv />
}

export default Line

const LineDiv = styled.div`
	width: 120px;
	border-bottom: solid rgba(153, 153, 153, 0.6);
	z-index: -1;
	/* line-height: 0.1em; */
	margin-left: 15px;
	/* text-align: center; */
`
