import { customAxios } from 'api'
import { checkLogin } from 'api/auth'
import AuthError from 'api/common/customAuthError'
import moment from 'moment'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUsers } from 'redux/slices/login'
import { getRefreshToken, setAcessToekn } from 'utils/getToken'

const UserValid = () => {
	const dispatch = useDispatch()
	const router = useRouter()

	useEffect(() => {
		const refreshToken = getRefreshToken()
		const body = {
			refreshToken
		}

		customAxios
			.post('/token/refresh/', body)
			.then((res) => {
				setAcessToekn(res.data.access_token)
				localStorage.setItem('expiresAt', moment().add(5, 'minutes').format('yyyy-MM-DD HH:mm:ss'))
			})
			.catch((err) => {
				localStorage.clear()
				throw new AuthError('세션이 만료되었습니다.', 401, err)
			})
	})

	const checkUser = async () => {
		try {
			const res = await checkLogin()
			if (res) {
				const user = {
					email: res.email,
					nickname: res.nickname
				}

				dispatch(setUsers(user))
			}
		} catch (err) {
			if (err instanceof AuthError && err.status === 401) {
				router.push('login')
			}
		}
	}
	useEffect(() => {
		checkUser()
	}, [router])
	return null
}

export default UserValid
