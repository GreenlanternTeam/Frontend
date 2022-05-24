import Layout from 'layout/layout'
import LoginForm from 'components/LoginForm'
import { useForm } from 'react-hook-form'
import { LoginType } from 'types/LoginType'
import { useMutation } from 'react-query'
import { login } from 'api/auth'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { getUsers } from 'redux/slices/login'
import { LoginResponse } from 'types/SignUpType'
import useLogin from 'hooks/useLogin'

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginType>()
	const { mutateAsync, data, isLoading, isError, error, isSuccess } = useMutation<LoginResponse, AxiosError, LoginType>(login)
	const router = useRouter()
	const dispatch = useDispatch()
	const { mutate } = useLogin()

	const onSubmit = (loginFormData: LoginType) => {
		/*const res = await mutateAsync(loginFormData)
		localStorage.setItem('access_token', res?.data?.access_token)
		localStorage.setItem('refresh_token', res?.data?.refresh_token)
		const user = {
			id: 3,
			userId: 'test1212',
			email: 'test@example.com',
			nickName: null
		}
		dispatch(getUsers(user))
		router.push('/')
		*/
		mutate(loginFormData)
	}

	return (
		<Layout>
			<LoginForm register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} />
		</Layout>
	)
}
export default Login
