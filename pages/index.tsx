import MainCategory from 'components/MainCategory'
import Layout from 'layout/layout'
import HSlider from 'components/HSlider'
import SampleImg from 'public/pngegg.png'
import Image from 'next/image'
import BottomSection from 'layout/MainPage/BottomSection'
import MainBrand from 'components/MainBrand'
import { usePopup } from 'hooks/usePopup'

export interface IUserResponse {
	name: string
	age: number
}

const Home = () => {
	const { setPopupShow, closePopup } = usePopup()

	return (
		<Layout>
			<section className="flex flex-col">
				<div className="pb-[80px] w-full bg-gray-400 flex justify-center items-center aspect-video">
					<Image src={SampleImg} alt="text" />
				</div>
				<div className="flex flex-col rounded-t-[2rem]  relative -top-[100px] overflow-hidden">
					<BottomSection>
						<MainCategory />
						<MainBrand />
						<div className="w-[calc(100%-2rem)] h-[200px] bg-gray-400 rounded-md mx-auto">sdfsdfsdfsdfsdf</div>
						<HSlider />
					</BottomSection>
					<button
						onClick={() => {
							navigator.share({
								title: 'test',
								text: 'test',
								url: 'https://naver.com'
							})
						}}
					>
						sdfdsf
					</button>
				</div>
			</section>
		</Layout>
	)
}

export default Home
