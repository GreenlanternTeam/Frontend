import Layout from 'layout/layout'
import MainCategory from 'components/MainCategory'
import HSlider from 'components/HSlider'
import SampleImg from 'public/pngegg.png'
import Image from 'next/image'
import BottomSection from 'layout/MainPage/BottomSection'
import MainBrand from 'components/MainBrand'

export interface IUserResponse {
	name: string
	age: number
}

const Home = () => {
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
						<div className="w-full h-[200px] bg-gray-400  mx-auto"></div>
						<HSlider />
					</BottomSection>
				</div>
			</section>
		</Layout>
	)
}

export default Home
