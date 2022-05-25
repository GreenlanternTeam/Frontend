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
			console.log(process.env.NEXT_PUBLIC_KAKAO_TOKEN_URL)
			axios.get(`${process.env.NEXT_PUBLIC_KAKAO_TOKEN_URL}${code.code}`).then((res) => {
				console.log(res)
				customAxios.post('/oauth/kakao/login/finish/', res.data).then((res) => console.log(res))
			})
		}
	}, [code])

	return <div></div>
}

export default Oauth
