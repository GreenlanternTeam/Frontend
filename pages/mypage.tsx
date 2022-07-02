import React from 'react'
import MyPage from 'components/MyPage'
import Layout from 'layout/layout'
import { useAppSelector } from 'hooks/reduxHooks'
import { useMutation } from 'react-query'
import { LogOutResponse, LogOutType } from 'types/authType'
import { AxiosError } from 'axios'
import { logOut } from 'api/auth'
import { getRefreshToken } from 'utils/getToken'

const mypage = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const user = useAppSelector((state) => state.user.user)
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { mutate } = useMutation<LogOutType, AxiosError, LogOutType>(logOut, {
		onSuccess: () => {
			console.log('성공')
		},

		onError: (error: any) => {
			console.log(error)
		}
	})

	const onLogOut = (token: string) => {
		mutate(token as LogOutType)
	}

	return (
		<Layout>
			<MyPage user={user} onLogOut={onLogOut} />
		</Layout>
	)
}

export default mypage
