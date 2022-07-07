import MagazineApi from 'api/MagazineApi'
import ContentTitle from 'components/modules/ContentTitle'
import { AnimatePresence } from 'framer-motion'
import Layout from 'layout/layout'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Masonry from 'react-masonry-css'
import { useQuery } from 'react-query'

const COLORS = [
	'rgba(251, 197, 49,0.4)',
	'rgba(156, 136, 255,0.4)',
	'rgba(39, 60, 117,0.4)',
	'rgba(186, 220, 88,0.4)',
	'rgba(199, 236, 238,0.4)'
]

const Magazine = () => {
	const [page, setPage] = useState(1)
	const { data } = useQuery(['magazine', 'main', page], () => MagazineApi.getMagazines(page))
	console.log(data)
	return (
		<Layout>
			<section className="bg-[#F6F6F6] min-h-[calc(100vh-75px)] min-w-full py-10 space-y-6">
				<ContentTitle title="Magazine" subTitle="다양한 환경 이슈를 찾아보세요!" detail />

				{/* <AnimatePresence></AnimatePresence> */}

				<Masonry breakpointCols={2} className="w-full flex gap-2 px-2" columnClassName="flex flex-col gap-2">
					{/* array of JSX items */}
					{data &&
						data.data.map((m, idx) => (
							<Link href={m.url} key={idx}>
								<a target="_blank" className="relative rounded-lg overflow-hidden">
									{/* <Image src={m.image_url} alt={m.title} unoptimized layout="fill" objectFit="contain" /> */}
									<img src={m.image_url} alt="images" />
									<div
										className="absolute text-white text-[0.5rem] scrollbar-hide bottom-0 whitespace-nowrap w-full overflow-x-scroll px-4 py-3 backdrop-blur-md"
										style={{ backgroundColor: COLORS[idx % COLORS.length] }}
									>
										{m.title}
									</div>
								</a>
							</Link>
						))}
				</Masonry>
			</section>
		</Layout>
	)
}

export default Magazine
