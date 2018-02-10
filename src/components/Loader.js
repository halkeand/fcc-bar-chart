import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`
const Loader = styled.div`
	border: 3px solid #f5f6fa;
	border-top: 3px solid #fbc531;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	animation: ${rotate360} 1s ease-in-out infinite;
`
export default ({ children }) => (
	<Fragment>
		<Loader />
		{children && <p>{children}</p>}
	</Fragment>
)
