import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { SignUpResponse } from 'api/auth'
import { AxiosError } from 'axios'
import { LoginType } from 'types/LoginType'
// import { kakaoLogin } from 'api/auth'
import { customAxios } from 'api'
import axios from 'axios'

const Oauth = () => {
	const router = useRouter()
	const code = router.query
	useEffect(() => {
		if (code?.code) {
			customAxios
				.get(
					`https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_KAKAO_CLIENT_ID}&redirect_uri=${
						process.env.NODE_ENV === 'production' ? process.env.NEXT_KAKAO_REDIRECT_URI : process.env.NEXT_KAKAO_REDIRECT_URI_DEV
					}&code=${code.code}`
				)
				.then((res) => {
					console.log(res)
					customAxios.post('/oauth/kakao/login/finish/', res.data).then((res) => console.log(res))
				})
		}
	}, [code])

	return <div></div>
}

export default Oauth
