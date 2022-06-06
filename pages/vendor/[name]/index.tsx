import { vendorApi } from 'api/ajaxApi'
import { isMobile } from 'react-device-detect'
import Layout from 'layout/layout'
import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import MainLogo from 'public/icons/mainLogo.svg'

import React from 'react'

import { Vendor } from 'types/VendorType'

import Share from 'public/icons/share.svg'
import Instagram from 'public/icons/instagram.svg'
import Facebook from 'public/icons/facebook.svg'
import Link from 'next/link'
import VendorLogo from 'components/atoms/VendorLogo'

import SampleImage from 'public/icons/sampleImg.jpeg'
import CategoryItem from 'components/MainCategory/CategoryItem'
import Heart from 'components/atoms/Heart'

interface VendorDetailProps {
	response: {
		vendor: Vendor
		relative: Vendor[]
	}
}

const caterories = {
	Plastic_Free: 'plastic',
	Vegan: 'vegan',
	Locally_Produced: 'produced',
	Saving_Water: 'water',
	Low_Waste: 'lowWaste',
	Recycled_Materials: 'recycled'
}

const VendorDetail: NextPage<VendorDetailProps> = ({ response }) => {
	// console.log(response.vendor)
	const isWindow = typeof window !== 'undefined'

	const shareMobile = () => {
		if (isMobile && isWindow && window.navigator) {
			window.navigator.share({
				title: `GreenLantern | ${response.vendor.brand_ko}`,
				text: response.vendor.description,
				url: ''
			})
		}
	}

	console.log(response.vendor)
	return (
		<Layout>
			<div className=" w-full space-y-[10px] bg-[#F6F6F6] -z-10">
				<div className="w-full h-[300px]  px-[25px] py-[20px] flex items-end relative">
					<Image src={SampleImage} layout="fill" className="absolute" alt="logo" />
					<div className="flex items-end space-x-2 z-10">
						<div
							className=" bg-white w-[75px] h-[75px] p-3 rounded-full overflow-hidden flex justify-center items-center"
							style={{ overflow: 'hidden' }}
						>
							{response.vendor.logo_url ? <VendorLogo url={response.vendor.logo_url} /> : <MainLogo />}
						</div>
						<div className="flex flex-col h-4/5 leading-tight">
							{response.vendor.range.includes('Womenwear') ? (
								<span className=" w-fit  text-[14px]">womenwear</span>
							) : (
								<span className=" w-fit  text-[14px]">memwear</span>
							)}
							<span className=" w-fit font-semibold text-[18px]">{response.vendor.brand_en}</span>
							<span className=" w-fit font-semibold text-[18px]">{response.vendor.brand_ko}</span>
						</div>
					</div>
				</div>

				<div className="w-full bg-white flex justify-center items-center px-[25px] py-[42px] text-[rgba(0,0,0,0.8)] text-lg">
					{response.vendor.description}
				</div>

				<div className="w-full bg-white flex px-[25px] py-[40px] flex-wrap">
					{response.vendor.category.map((category) => {
						return (
							<div key={category} className="w-1/3">
								<CategoryItem disabled api={category} />
							</div>
						)
					})}
				</div>

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
					{/* {isMobile && (
						<div className="cursor-pointer" onClick={() => shareMobile()}>
							<Share />
						</div>
					)} */}
					<div className="cursor-pointer" onClick={() => shareMobile()}>
						<Share />
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
	return { props: { response } }
}

export default VendorDetail
