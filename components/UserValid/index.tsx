import { checkLogin } from 'api/auth'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUsers } from 'redux/slices/login'

const UserValid = () => {
	const dispatch = useDispatch()
	const router = useRouter()

	const checkUser = async () => {
		const res = await checkLogin()
		if (res) {
			const user = {
				email: res.email,
				nickname: res.nickname
			}

			dispatch(setUsers(user))
		}
	}
	useEffect(() => {
		checkUser()
	}, [router])
	return null
}

export default UserValid
