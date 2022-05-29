import { customAxios } from 'api'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Google = () => {
	const router = useRouter()
	const code = router.query
	useEffect(() => {
		if (code?.code) {
			const params = {
				client_id: process.env.NEXT_PUBLIC_GOOGLE_ID,
				client_secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
				redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
				code: code.code,
				grant_type: 'authorization_code',
				state: 'random_string'
			}
			const url = 'https://oauth2.googleapis.com/token'
			customAxios.post(url, {}, { params }).then((res) => {
				console.log(res)
				customAxios.post('/oauth/google/login/finish/', res.data).then((res) => console.log(res))
			})
		}
	}, [code])
	return <div></div>
}

export default Google
