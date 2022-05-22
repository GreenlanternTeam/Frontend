import Layout from 'layout/layout'
import LoginForm from 'components/LoginForm'
import { useForm } from 'react-hook-form'
import { LoginType } from 'types/LoginType'
import { useMutation } from 'react-query'
import { login, SignUpResponse, SignUpType } from 'api/auth'
import { AxiosError } from 'axios'
import { customAxios } from 'api'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { getUsers } from 'redux/slices/login'

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginType>()
	const { mutate, mutateAsync, data, isLoading, isError, error, isSuccess } = useMutation<SignUpResponse, AxiosError, LoginType>(login)
	const router = useRouter()
	const dispatch = useDispatch()
	const onSubmit = async (loginFormData: LoginType) => {
		const res = await mutateAsync(loginFormData)
		localStorage.setItem('access_token', res?.data?.access_token)
		customAxios.defaults.headers.common['Authorizaion'] = `Bearer ${res?.data?.access_token}`
		const user = {
			id: 3,
			userId: 'test1212',
			email: 'test@example.com',
			nickName: null
		}
		dispatch(getUsers(user))
		router.push('/')
	}

	return (
		<Layout>
			<LoginForm register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} />
		</Layout>
	)
}
export default Login
