import React, { useEffect, useState } from 'react'
import RegisterForm from 'components/RegisterForm'
import Layout from 'layout/layout'
import { FieldError, useForm } from 'react-hook-form'
import { signUp } from 'api/auth'
import { useMutation } from 'react-query'
import { SignUpType, SignUpResponse } from 'api/auth'
import { AxiosError } from 'axios'
import { FormValue, FormIsValid } from 'types/SignUpType'

const Register = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<FormValue>({
		mode: 'onChange'
	})
	const [isValid, setIsValid] = useState<FormIsValid>({
		userId: false,
		password: false,
		email: false,
		password_confirm: false,
		nickname: false
	})
	const { mutate, data, isLoading, isError, error, isSuccess } = useMutation<SignUpResponse, AxiosError, SignUpType>(signUp)

	const onSubmit = (formData: SignUpType) => {
		mutate(formData)
	}

	const onFormValid = (inputName: string, error: FieldError | undefined) => {
		if (!error) {
			setIsValid({
				...isValid,
				[inputName]: true
			})
		} else
			setIsValid({
				...isValid,
				[inputName]: false
			})
	}

	return (
		<Layout>
			<RegisterForm
				register={register}
				errors={errors}
				watch={watch}
				onSubmit={onSubmit}
				handleSubmit={handleSubmit}
				isValid={isValid}
				setIsValid={setIsValid}
				onFormValid={onFormValid}
			/>
		</Layout>
	)
}

export default Register
