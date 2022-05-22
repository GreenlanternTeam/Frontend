import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { SignUpResponse } from 'api/auth'
import { AxiosError } from 'axios'
import { LoginType } from 'types/LoginType'
import { kakaoLogin } from 'api/auth'
import { customAxios } from 'api'
import axios from 'axios'
import { CLIENT_ID, REDIRECT_URI } from '../utils/kakao'

const Oauth = () => {
	const router = useRouter()
	const code = router.query.code

	useEffect(() => {
		if (code) {
			axios
				.post(`https://kauth.kakao.com/oauth/token`, {
					grant_type: 'authorization_code',
					client_id: CLIENT_ID,
					redirect_uri: REDIRECT_URI,
					code
				})
				.then((res) => console.log(res))
		}
	}, [router])

	return <div></div>
}

export default Oauth
