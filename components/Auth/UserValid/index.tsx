import { checkLogin } from 'api/auth'
import AuthError from 'api/common/customAuthError'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUsers } from 'redux/slices/login'

const UserValid = () => {
	const dispatch = useDispatch()
	const router = useRouter()

	const checkUser = useCallback(async () => {
		try {
			const res = await checkLogin()
			if (res) {
				const user = {
					email: res.user.email,
					nickname: res.user.nickname
				}
				dispatch(setUsers(user))
			}
		} catch (err) {
			if (err instanceof AuthError && err.status === 401) {
				router.push('login')
			}
		}
	}, [dispatch, router])
	useEffect(() => {
		checkUser()
	}, [router, checkUser])
	return null
}

export default UserValid
