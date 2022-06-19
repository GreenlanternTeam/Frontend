import { vendorApi } from 'api/ajaxApi'
import { isMobile } from 'react-device-detect'
import Layout from 'layout/layout'
import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import MainLogo from 'public/icons/mainLogo.svg'
import React, { useState } from 'react'
import { Vendor } from 'types/VendorType'
import Instagram from 'public/icons/instagram.svg'
import Facebook from 'public/icons/facebook.svg'
import Link from 'next/link'
import VendorLogo from 'components/Vendor/VendorLogo'
import SampleImage from 'public/icons/sampleImg.jpeg'
import CategoryItem from 'components/Category/CategoryItem'
import Heart from 'components/Common/Heart'
import Button from 'components/Auth/Button/Button'
import { classNames } from 'utils/fn'
import * as Categories from 'components/Category/utils'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { getUser } from 'redux/slices/login'
import RedirectLogo from 'components/Vendor/RedirectLogo'

interface VendorDetailProps {
	response: {
		vendor: Vendor
		relative: Vendor[]
	}
	imageUrl: string | null
}

const VendorDetail: NextPage<VendorDetailProps> = ({ response, imageUrl }) => {
	const isWindow = typeof window !== 'undefined'
	const [clicked, setClicked] = useState(true)
	const shareMobile = () => {
		if (isMobile && isWindow && window.navigator) {
			window.navigator.share({
				title: `GreenLantern | ${response.vendor.brand_ko}`,
				text: response.vendor.description,
				url: ''
			})
		}
	}
	console.log(response.relative)
	const router = useRouter()
	const user = useSelector(getUser)
	return (
		<Layout>
			<div className=" w-full space-y-[10px] bg-[#F6F6F6] -z-10">
				<div className="w-full h-[300px]  px-[25px] py-[20px] flex items-end relative">
					{imageUrl ? (
						<>
							<Image src={imageUrl} unoptimized={true} layout="fill" className="absolute" alt="logo" />
							<div className="absolute bg-black top-0 bottom-0 left-0 right-0 opacity-20" />
						</>
					) : (
						<Image src={SampleImage} layout="fill" className="absolute" alt="logo" />
					)}

					<div className="flex items-end space-x-2 z-10">
						<RedirectLogo siteUrl={response.vendor.site_url} logoUrl={response.vendor.logo_url} />
						{/* <Link
							href={
								response.vendor.site_url.includes('https')
									? response.vendor.site_url
									: response.vendor.site_url.includes('http')
									? response.vendor.site_url
									: `https://${response.vendor.site_url}`
							}
						>
							<a target="_blank">
								<div
									className=" bg-white w-[75px] h-[75px] p-3 rounded-full overflow-hidden flex justify-center items-center"
									style={{ overflow: 'hidden' }}
								>
									{response.vendor.logo_url ? <VendorLogo url={response.vendor.logo_url} /> : <MainLogo />}
								</div>
							</a>
						</Link> */}
						<div className="flex flex-col h-4/5 leading-tight">
							{response.vendor.range.includes('Womenwear') ? (
								<span className=" w-fit  text-[14px]">womenwear</span>
							) : (
								<span className=" w-fit  text-[14px]">menswear</span>
							)}
							<span className=" w-fit font-semibold text-[18px]">{response.vendor.brand_en}</span>
							<span className=" w-fit font-semibold text-[18px]">{response.vendor.brand_ko}</span>
						</div>
					</div>
				</div>

				<div className="w-full bg-white flex flex-col justify-center items-center divide-y-[1px] px-[25px] py-[42px] text-[rgba(0,0,0,0.8)] text-lg space-y-[25px]">
					<span>{response.vendor.description}</span>
					<div className="w-full">
						<Button
							text="+ 팔로우"
							onClick={() => {
								!user && router.push('/login')
							}}
							style={{ width: '100%' }}
						></Button>
					</div>
				</div>

				<div className="w-full bg-white flex py-[30px] flex-wrap flex-col space-y-6">
					<ul className="flex w-fit space-x-[30px] pl-[8%] justify-center text-lg">
						<li
							className={classNames(
								clicked ? 'text-[rgb(0,0,0)]' : 'text-[rgb(156,163,175)]',
								'text-center flex flex-col items-center transition-all'
							)}
							onClick={() => setClicked(true)}
						>
							<span>Category</span>
							{clicked && <div className="bg-[#346053] w-[calc(100%+10%)] h-[3px] rounded-full"></div>}
						</li>
						<li
							className={classNames(
								clicked ? 'text-[rgb(156,163,175)]' : 'text-[rgb(0,0,0)]',
								'text-center flex flex-col items-center transition-all'
							)}
							onClick={() => setClicked(false)}
						>
							<span>Recommend Brands</span>
							{!clicked && <div className="bg-[#346053] w-[calc(100%+5%)] h-[3px] rounded-full"></div>}
						</li>
					</ul>

					{clicked ? (
						<div className="grid grid-cols-3 w-full h-max">
							{Categories.CategoryData.map((category) => {
								return (
									<div key={category.id} className="h-[110px]">
										<CategoryItem type={category.key} api={response.vendor.category.includes(category.title)} disabled />
									</div>
								)
							})}
						</div>
					) : (
						<div className="scrollbar-hide overflow-x-scroll px-5 w-full">
							<div className="space-x-[30px] flex w-max">
								{response.relative.map((vendor) => (
									<div key={vendor.brand_en} className="w-[200px] h-[170px] flex justify-center items-center">
										<Link href={`/vendor/${vendor.brand_ko}`}>
											<a
												key={vendor.brand_en}
												className="w-[180px] overflow-hidden rounded-[10px] border flex flex-col justify-center items-center space-y-2 hover:border-gray-700 transition-all"
											>
												<div className="w-full h-[150px] overflow-hidden flex justify-center items-center relative p-3">
													{vendor.logo_url ? (
														<div className="w-full h-full relative">
															<Image
																src={vendor.logo_url}
																unoptimized={true}
																alt="logo"
																layout="fill"
																objectFit="contain"
																width="100%"
																height="100%"
															/>
														</div>
													) : (
														<span className="font-bold">{vendor.brand_en}</span>
													)}
												</div>
											</a>
										</Link>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
				{/* {response.relative.length && (
					<div className="w-full bg-white flex px-[25px] py-[40px] flex-wrap gap-4 justify-center">
						{response.relative.map(
							(vendor) =>
								vendor.logo_url && (
									<Link key={vendor.brand_en} href={`/vendor/${vendor.brand_ko}`}>
										<a className="w-[75px] text-center text-sm flex flex-col space-y-2">
											<div
												className="border border-black bg-white w-[75px] h-[75px] p-3 rounded-full overflow-hidden flex justify-center items-center"
												style={{ overflow: 'hidden' }}
											>
												<VendorLogo url={vendor.logo_url!} />
											</div>
											<span className="break-all">{vendor.brand_en}</span>
										</a>
									</Link>
								)
						)}
					</div>
				)} */}
				<div className="sticky w-full flex justify-around items-center bottom-0 h-[71px] bg-white">
					{/* <Union /> */}
					<Heart />

					{response.vendor.instagram_url ? (
						<Link href={response.vendor.instagram_url}>
							<a target="_blank">
								<Instagram />
							</a>
						</Link>
					) : (
						<div className="opacity-60">
							<Instagram />
						</div>
					)}
					{response.vendor.facebook_url ? (
						<Link href={response.vendor.facebook_url}>
							<a target="_blank">
								<Facebook />
							</a>
						</Link>
					) : (
						<div className="opacity-60">
							<Facebook />
						</div>
					)}
					<div className="cursor-pointer" onClick={() => shareMobile()}>
						{/* <Share /> */}

						<svg
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
						>
							<rect width="30" height="30" fill="url(#pattern99)" fillOpacity="0.8" />
							<defs>
								<pattern id="pattern99" patternContentUnits="objectBoundingBox" width="1" height="1">
									<use xlinkHref="#image7_1013_2100" transform="scale(0.00260417)" />
								</pattern>
								<image
									id="image7_1013_2100"
									width="384"
									height="384"
									xlinkHref="data:image/png;base64,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"
								/>
							</defs>
						</svg>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { name } = ctx.query
	if (!name || typeof name !== 'string') {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	}
	const response = (await vendorApi.getVendorDetail(encodeURI(name))).data
	const brandList = response.relative.map((m) => m.brand_en)
	const listSet = new Set(brandList)
	const newRelated = Array.from(listSet).map((br) => response.relative.find((vendor) => vendor.brand_en === br))
	if (newRelated.length) {
		const result = newRelated
		response.relative = result as Vendor[]
	}
	const imageUrl = null
	// const imageUrl = await axios
	// 	.get(response.vendor.site_url)
	// 	.then((res) => {
	// 		const $ = cheerio.load(res.data)
	// 		return $('meta[property="og:image"]').attr('content') ?? null
	// 	})
	// 	.catch((err) => console.log(err))
	return { props: { response, imageUrl } }
}

export default VendorDetail
