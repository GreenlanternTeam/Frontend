import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { SignUpResponse } from 'api/auth'
import { AxiosError } from 'axios'
import { LoginType } from 'types/LoginType'
import { kakaoLogin } from 'api/auth'
import { customAxios } from 'api'

const Oauth = () => {
	const router = useRouter()
	const code = router.query.code

	useEffect(() => {
		if (code) {
			customAxios.get(`/oauth/kakao/login/`).then((res) => console.log(res))
		}
	}, [router])

	return <div></div>
}

export default Oauth
