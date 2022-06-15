import type { NextPage } from 'next'
import Head from 'components/Head'
import { IUserResponse } from './index'
import { useQuery } from 'react-query'
// import WithAuth from 'components/HOC/WithAuth'

const Enter: NextPage = () => {
	const loadData = () => fetch('/api/user').then((res) => res.json())
	// const { data, isLoading, error } = useQuery<IUserResponse>('이것은 홈 쿼리입니다.', loadData)
	return <div></div>
}

export default Enter
