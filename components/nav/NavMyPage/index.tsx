import NavIcon from 'components/Common/NavIcon'
import NavTitle from 'components/nav/NavTitle'
import React from 'react'
import Link from 'next/link'
import TitleVector from '../../../utils/svg/Nav/TitleVector'
import MyPageIcon from '../../../utils/svg/Nav/MyPageIcon'
import Line from '../Line'

interface Props {
	title: string
}

const NavMyPage: React.FC<Props> = ({ title }) => {
	return (
		<div className="h-[150px]">
			<Link href="/mypage">
				<a className="w-[150px] h-[100px] flex flex-col justify-center items-center transition-all  hover:bg-[#F7F2DC]  mb-4">
					<MyPageIcon />
					<div className="flex justify-center items-center mt-[20px]">
						<span className="text-[14px] font-[500] text-[#000000] mr-[5px]">
							<span className="text-[16px] font-[600] text-[#346053]">랜턴이</span>님
						</span>
						<TitleVector />
					</div>
				</a>
			</Link>
			<Line />
		</div>
	)
}

export default NavMyPage
