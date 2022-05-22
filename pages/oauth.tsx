import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { SignUpResponse } from 'api/auth'
import { AxiosError } from 'axios'
import { LoginType } from 'types/LoginType'
import { kakaoLogin } from 'api/auth'
import { customAxios } from 'api'
import axios from 'axios'

export const CLIENT_ID = '1c9f7260e6aa88b6760dc86efb880690'
export const REDIRECT_URI = 'http://localhost:3000/oauth'
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`

const Oauth = () => {
	const router = useRouter()
	const code = router.query

	return <div></div>
}

export default Oauth
