import React from 'react'
import styled from 'styled-components'
import { GreenPopUpProps } from './GreenPopUp'

const PopupChild = ({ children }: GreenPopUpProps) => {
	return <Wrapper className="flex flex-col items-center justify-center w-full h-full space-y-[20px]">{children}</Wrapper>
}

export default PopupChild

const Wrapper = styled.div`
	& h1 {
		text-align: center;
		word-break: break-all;
	}
`
