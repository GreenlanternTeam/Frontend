import MainCategory from 'components/Category/MainCategory'
import Layout from 'layout/layout'
import HSlider from 'components/magazine/HSlider'
import SampleImg from 'public/pngegg.png'
import Image from 'next/image'
import BottomSection from 'layout/MainPage/BottomSection'
import MainBrand from 'components/Vendor/MainBrand'
import { usePopup } from 'hooks/usePopup'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { classNames } from 'utils/fn'
import { useForm, useFormState } from 'react-hook-form'
import SearchInput from 'components/Common/SearchInput'

export interface IUserResponse {
	name: string
	age: number
}

interface SearchForm {
	search: string
}

const Home = () => {
	const { setPopupShow, closePopup } = usePopup()
	const [toggle, setToggle] = useState(false)
	const { register, watch, setValue } = useForm<SearchForm>()
	const v = useRef<string>()
	v.current = watch().search
	return (
		<Layout>
			<section className="flex flex-col relative" style={{ top: '-100px' }}>
				<div className="sticky top-[75px] pb-[80px] w-full bg-gray-400 flex justify-center items-center aspect-video">
					<Image src={SampleImg} alt="text" className="aspect-video" />
				</div>
				<div className="flex flex-col rounded-t-[2rem]  relative overflow-hidden z-30">
					<BottomSection>
						<div className="w-full px-[30px] relative space-y-[15px]">
							<SearchInput
								dirtyValue={v.current}
								onXClick={() => setValue('search', '')}
								onFocus={() => setToggle(true)}
								onBlur={() => setToggle(false)}
							/>

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
						<div className="w-full h-[200px] bg-gray-400 mx-auto flex justify-center items-center">이게진짜 배너인가요?</div>
						<HSlider />
					</BottomSection>
				</div>
			</section>
		</Layout>
	)
}

export default Home
