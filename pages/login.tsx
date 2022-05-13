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

	return (
		<Layout>
			<LoginForm register={register} handleSubmit={handleSubmit} />
		</Layout>
	)
}
export default Login
