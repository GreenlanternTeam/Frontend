import React from 'react'
import MyPage from 'components/MyPage'
import Layout from 'layout/layout'
import { useAppSelector } from 'hooks/reduxHooks'

const mypage = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const user = useAppSelector((state) => state.user.user)
	return (
		<Layout>
			<MyPage user={user} />
		</Layout>
	)
}

export default mypage
