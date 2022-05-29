import React, { useEffect, useState } from 'react'
import RegisterForm from 'components/Auth/RegisterForm'
import Layout from 'layout/layout'
import { FieldError, useForm } from 'react-hook-form'
import { signUp } from 'api/auth'
import { useMutation } from 'react-query'
import { SignUpType, SignUpResponse } from 'api/auth'
import { AxiosError } from 'axios'
import { FormValue, FormIsValid } from 'types/SignUpType'
import { useRouter } from 'next/router'
import { usePopup } from 'hooks/usePopup'

const Register = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		setValue,
		getValues,
		setError
	} = useForm<FormValue>({
		mode: 'onBlur',
		reValidateMode: 'onChange'
	})
	const [isValid, setIsValid] = useState<FormIsValid>({
		password: false,
		email: false,
		password_confirm: false,
		nickname: false
	})
	const { mutate } = useMutation<SignUpResponse, AxiosError, SignUpType>(signUp, {
		onSuccess: () => {
			router.push('/login')
		}
	})

	const router = useRouter()
	const { isSuccess: isEmailCheck, setSuccess } = usePopup()

	const onSubmit = (formData: SignUpType) => {
		if (isEmailCheck) {
			// mutate(formData)
			router.push('/login')
		} else {
			setError('email', { message: '이메일 미인증' })
		}
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

	useEffect(() => {
		return () => {
			setSuccess(false)
		}
	}, [])
	const onAllCheck = () => {
		const { agree_14plus, agree_terms, agree_info, agree_recinfo } = getValues()
		setValue('agree_14plus', !agree_14plus)
		setValue('agree_terms', !agree_terms)
		setValue('agree_info', !agree_info)
		setValue('agree_recinfo', !agree_recinfo)
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
				setValue={setValue}
				setError={setError}
				onFormValid={onFormValid}
				onAllCheck={onAllCheck}
				getValues={getValues}
			/>
		</Layout>
	)
}

export default Register
