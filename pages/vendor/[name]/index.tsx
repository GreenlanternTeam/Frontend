import { vendorApi } from 'api/ajaxApi'
import { IVendorDetailResponse } from 'api/VendorApi'
import Layout from 'layout/layout'
import { GetServerSideProps, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useQuery } from 'react-query'
import { Vendor } from 'types/VendorType'
import Union from 'public/icons/union.svg'
import Share from 'public/icons/share.svg'
import Instagram from 'public/icons/instagram.svg'
import Facebook from 'public/icons/facebook.svg'
import Link from 'next/link'
interface VendorDetailProps {
	response: {
		vendor: Vendor
		relative: Vendor[]
	}
}

const VendorDetail: React.FC<VendorDetailProps> = ({ response }) => {
	return (
		<Layout>
			<div className="py-[50px] px-[25px] w-full">
				<div
					className={`w-[250px] h-[250px] mx-auto flex justify-center items-center ${
						response.vendor.logo_url?.includes('png') ? 'drop-shadow-2xl' : 'shadow-2xl'
					}`}
				>
					<Image unoptimized={true} src={response.vendor.logo_url!} width={230} height={230} objectFit="contain" alt="logo" />
				</div>
				<h1 className="mx-auto w-fit font-semibold text-[36px] my-[37px]">{response.vendor.brand_en}</h1>
				<div className="w-full flex justify-end space-x-4">
					<Union />
					{response.vendor.instagram_url && (
						<Link href={response.vendor.instagram_url}>
							<a target="_blank">
								<Instagram />
							</a>
						</Link>
					)}
					{response.vendor.facebook_url && (
						<Link href={response.vendor.facebook_url}>
							<a target="_blank">
								<Facebook />
							</a>
						</Link>
					)}
					<Share />
				</div>
			</div>
		</Layout>
	)
}

export default VendorDetail

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
