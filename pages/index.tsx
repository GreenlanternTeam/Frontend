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
			<section className="flex flex-col relative" style={{ top: '-100px' }}>
				<div className="sticky top-[75px] pb-[80px] w-full bg-gray-400 flex justify-center items-center aspect-video">
					<Image src={SampleImg} alt="text" />
				</div>
				<div className="flex flex-col rounded-t-[2rem]  relative overflow-hidden z-30">
					<BottomSection>
						<MainCategory />
						<MainBrand />
						<div className="w-[calc(100%-2rem)] h-[200px] bg-gray-400 rounded-md mx-auto">sdfsdfsdfsdfsdf</div>
						<HSlider />
					</BottomSection>
				</div>
			</section>
		</Layout>
	)
}

export default Home
