import React from 'react'
import styled from 'styled-components'
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share'

interface Props {
	shareContents: {
		title: string
		text: string
		img: string | any
	}
}

const BrandShare = ({ shareContents }: Props) => {
	const currentUrl = window.location.href
	const onKakaoClick = () => {
		window.Kakao.Share.sendDefault({
			objectType: 'feed',
			content: {
				title: shareContents.title,
				description: shareContents.text,
				imageUrl: shareContents.img,
				link: {
					webUrl: `${window.location.href}`,
					mobileWebUrl: `${window.location.href}`
				}
			},
			buttons: [
				{
					title: '자세히 보기',
					link: {
						webUrl: `${window.location.href}`,
						mobileWebUrl: `${window.location.href}`
					}
				}
			]
		})
	}
	return (
		<Wrapper>
			<span onClick={() => onKakaoClick()}>카카오톡</span>
			<TwitterShareButton url={currentUrl}>
				<TwitterIcon size={48} round={true} borderRadius={24} />
			</TwitterShareButton>
			<FacebookShareButton url={currentUrl}>
				<FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
			</FacebookShareButton>
		</Wrapper>
	)
}

export default BrandShare

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
