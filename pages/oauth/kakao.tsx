import { customAxios } from 'api'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { IAuthResponse } from 'types/authType'
import { useDispatch } from 'react-redux'
import { setUsers } from 'redux/slices/login'

const Kakao = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const code = router.query
	useEffect(() => {
		if (code?.code) {
			axios.get(`${process.env.NEXT_PUBLIC_KAKAO_TOKEN_URL}${code.code}`).then((res) => {
				customAxios.post('/oauth/kakao/login/finish/', res.data).then((res: IAuthResponse) => {
					localStorage.setItem('access_token', res.data.access_token)
					localStorage.setItem('refresh_token', res.data.refresh_token)
					dispatch(setUsers(res.data.user))
					router.push('/')
				})
			})
		}
	}, [code])
}

export default Kakao
