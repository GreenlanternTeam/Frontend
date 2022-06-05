import Layout from 'layout/layout'
import LoginForm from 'components/Auth/LoginForm'
import { FieldError, useForm } from 'react-hook-form'
import { LoginFormIsValid, LoginType } from 'types/LoginType'
import useLogin from 'hooks/useLogin'
import usePrivateRoute from 'hooks/usePrivateRoute'
import { useState } from 'react'

const Login = () => {
	// const {
	// 	register,
	// 	handleSubmit,
	// 	formState: { errors }
	// } = useForm<LoginType>()
	const { mutate, loginError, setLoginError } = useLogin()

	const onSubmit = (loginFormData: LoginType) => {
		mutate(loginFormData)
	}

	// const [isValid, setIsValid] = useState<LoginFormIsValid>({
	// 	password: false,
	// 	email: false
	// })

	// const onFormValid = (inputName: string, error: FieldError | undefined) => {
	// 	if (!error) {
	// 		setIsValid({
	// 			...isValid,
	// 			[inputName]: true
	// 		})
	// 	} else
	// 		setIsValid({
	// 			...isValid,
	// 			[inputName]: false
	// 		})
	// }

	return (
		<Layout>
			<LoginForm onSubmit={onSubmit} />
		</Layout>
	)
}
export default Login
