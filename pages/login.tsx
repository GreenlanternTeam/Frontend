import Layout from 'layout/layout'
import LoginForm from 'components/LoginForm'
import { useForm } from 'react-hook-form'
import { LoginType } from 'types/LoginType'

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginType>()

	const onSubmit = (data: LoginType) => {
		console.log(data)
	}

	return (
		<Layout>
			<LoginForm register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} />
		</Layout>
	)
}
export default Login
