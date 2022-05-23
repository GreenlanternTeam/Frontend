import { customAxios } from 'api'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
const client_id = '95902930814-omvf1l7lpapl4m3i783a1527iloljfih.apps.googleusercontent.com'
const client_secret = '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'
const Google = () => {
	const router = useRouter()
	const code = router.query
	useEffect(() => {
		if (code?.code) {
			const url = `https://oauth2.googleapis.com/token?client_id=${client_id}&client_secret=${client_secret}&code=${code.code}&grant_type=authorization_code&redirect_uri=http://localhost:3000/oauth/google&state=random_string`
			customAxios.post(url).then((res) => {
				console.log(res)
				customAxios.post('/oauth/google/login/finish/', res.data).then((res) => console.log(res))
			})
		}
	}, [code])
	return <div></div>
}

export default Google
