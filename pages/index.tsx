import MainCategory from 'components/MainCategory'
import Layout from 'layout/layout'
import HSlider from 'components/HSlider'
import SampleImg from 'public/pngegg.png'
import Image from 'next/image'
import BottomSection from 'layout/MainPage/BottomSection'
import MainBrand from 'components/MainBrand'
import { usePopup } from 'hooks/usePopup'
import { ChangeEvent, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { classNames } from 'utils/fn'

export interface IUserResponse {
	name: string
	age: number
}

const Home = () => {
	const { setPopupShow, closePopup } = usePopup()
	const [toggle, setToggle] = useState(false)
	const [value, setValue] = useState<string>('')

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}
	return (
		<Layout>
			<section className="flex flex-col relative" style={{ top: '-100px' }}>
				<div className="sticky top-[75px] pb-[80px] w-full bg-gray-400 flex justify-center items-center aspect-video">
					<Image src={SampleImg} alt="text" className="aspect-video" />
				</div>
				<div className="flex flex-col rounded-t-[2rem]  relative overflow-hidden z-30">
					<BottomSection>
						<div className="w-full px-[30px] relative space-y-[15px]">
							<div className="relative flex items-center">
								<div className="absolute h-[34px] flex justify-center items-center w-[50px]">
									<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.6177 18.0319C15.078 19.2635 13.125 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.125 19.2635 15.078 18.0319 16.6177L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L16.6177 18.0319Z"
											fill="#999999"
										/>
									</svg>
								</div>

								<input
									type="text"
									className="w-full h-[34px] rounded-[10px] bg-[#ffffff] group border pl-[50px] pr-[36px] font-normal focus:outline-none placeholder-shown:bg-[#F6F6F6] transition-all"
									placeholder="브랜드, 환경 키워드 등"
									value={value}
									onChange={handleChange}
									onFocus={() => setToggle(true)}
									onBlur={() => setToggle(false)}
								/>
								<div
									className={classNames(value !== '' ? 'visible' : 'hidden', 'w-fit flex absolute right-[12px] cursor-pointer')}
									onClick={() => setValue('')}
								>
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M16.05 17.25L12 13.2L7.95 17.25L6.75 16.05L10.8 12L6.75 7.95L7.95 6.75L12 10.8L16.05 6.75L17.25 7.95L13.2 12L17.25 16.05L16.05 17.25Z"
											fill="#999999"
										/>
									</svg>
								</div>
							</div>

							{toggle && (
								<div className="w-full  rounded-[10px] bg-[#F6F6F6] py-[25px] px-[20px] space-y-[25px]">
									<div>
										<span className="text-[18px] font-medium">추천 키워드</span>
										<div className="font-light text-[14px] opacity-80 p-[10px] pt-[5px] space-x-[5px]">
											<span>#제로웨이스트</span>
											<span>#슬로우패션</span>
											<span>#비건</span>
											<span>#친환경</span>
										</div>
									</div>
									<div>
										<span className="text-[18px] font-medium">인기 브랜드</span>
										<div className="font-light text-[14px] opacity-80 p-[10px] pt-[5px] space-x-[5px]">
											<span>#프라이탁</span>
											<span>#낫아워스</span>
											<span>#플리츠마마</span>
											<span>#누아믹</span>
										</div>
									</div>
								</div>
							)}
						</div>
						<MainCategory />
						<MainBrand />
						{/* <div className="w-[calc(100%-2rem)] h-[200px] bg-gray-400 mx-auto">sdfsdfsdfsdfsdf</div> */}
						<div className="w-full h-[200px] bg-gray-400 mx-auto flex justify-center items-center">이게진짜 배너인가요?</div>
						<HSlider />
					</BottomSection>
				</div>
			</section>
		</Layout>
	)
}

export default Home
