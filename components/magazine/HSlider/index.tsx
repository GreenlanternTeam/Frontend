import MagazineApi from 'api/MagazineApi'
import ContentTitle from 'components/modules/ContentTitle'
import Image from 'next/image'
import React, { useState } from 'react'
import { useQuery } from 'react-query'

const HSlider = () => {
	const [page, setPage] = useState(1)
	const { data } = useQuery(['magazine', 'main', page], () => MagazineApi.getMagazines(page, 20))
	return (
		<aside className="w-full space-y-4">
			<ContentTitle title="MAGAZINE" link="/magazine" subTitle="다양한 환경 이슈를 만나보세요!" />
			<div className="scrollbar-hide overflow-x-scroll px-5">
				<div className="space-x-[30px] flex w-max">
					{data &&
						data.data.map((item) => (
							<div key={item.title} className="w-[250px]  h-[350px] rounded-[10px] overflow-hidden relative flex flex-col">
								{/* <div className="h-[200px] bg-teal-300 flex" /> */}
								<div className="h-[200px] relative bg-[#E5E5E5] w-full">
									<Image src={item.image_url} unoptimized layout="fill" objectFit="cover" alt={item.title} />
								</div>

								<div className="leading-[14.4px] min-h-[150px] bg-[#E5E5E5] text-[12px] w-full p-[15px] flex flex-col space-y-1">
									<div className="font-[500] whitespace-pre-wrap break-words">{item.title}</div>
									<div className="font-[400] opacity-[80%]"></div>
									{/* <h4 className="absolute bottom-2 font-[400] opacity-[40%]">스포츠서울</h4> */}
								</div>
							</div>
						))}
					{/* <div className="w-[250px] h-[350px] bg-[#E5E5E5] rounded-[10px] overflow-hidden relative flex flex-col">
						<div className="h-[200px] bg-teal-300 flex" />
						<div className="leading-[14.4px] text-[12px] w-full p-[15px] flex flex-col space-y-1">
							<div className="font-[500]">
								<h2>패스트 패션은 NO!</h2>
								<h2>이제는 친환경 슬로우 패션이 대세</h2>
							</div>
							<div className="font-[400] opacity-[80%]">
								<p>
									패스트 패션 가고 슬로 패션 시대가 왔다. 최근 기업의 화두는 친환경 ESG 경영이다. 패션업체들도 친환경을 적극 실천해
									탄소지수를 낮추는데 발 맞추고 있다...{' '}
								</p>
							</div>
							<h4 className="absolute bottom-2 font-[400] opacity-[40%]">스포츠서울</h4>
						</div>
					</div> */}
				</div>
			</div>
		</aside>
	)
}

export default HSlider
