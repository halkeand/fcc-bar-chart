import React from 'react'
import styled from 'styled-components'
const StyledDiv = styled.div`
	text-align: center;
	padding: 20px;
`
export default ({ chartTitle, chartDesc }) => (
	<StyledDiv>
		<h1>{chartTitle}</h1>
		<p>{chartDesc}</p>
	</StyledDiv>
)
