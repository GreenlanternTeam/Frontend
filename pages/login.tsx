import Layout from 'layout/layout'
import LoginForm from 'components/LoginForm'
import { useForm } from 'react-hook-form'
import { LoginType } from 'types/LoginType'
import { useMutation } from 'react-query'
import { login, SignUpResponse, SignUpType } from 'api/auth'
import { AxiosError } from 'axios'

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginType>()
	const { mutate, data, isLoading, isError, error, isSuccess } = useMutation<SignUpResponse, AxiosError, LoginType>(login)

	const onSubmit = (data: LoginType) => {
		mutate(data)
	}

	return (
		<Layout>
			<LoginForm register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} />
		</Layout>
	)
}
export default Login
