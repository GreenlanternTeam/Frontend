import Layout from 'layout/layout'
import LoginForm from 'components/LoginForm'
import { useForm } from 'react-hook-form'
import { LoginType } from 'types/LoginType'
import useLogin from 'hooks/useLogin'

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginType>()
	const { mutate } = useLogin()

	const onSubmit = (loginFormData: LoginType) => {
		mutate(loginFormData)
	}

	return (
		<Layout>
			<LoginForm register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} />
		</Layout>
	)
}
export default Login
