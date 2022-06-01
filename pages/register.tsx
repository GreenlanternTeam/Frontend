import React, { useEffect, useState } from 'react'
import RegisterForm from 'components/RegisterForm'
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
	const formState = useForm<FormValue>({
		mode: 'onBlur',
		reValidateMode: 'onChange'
	})
	const [isValid, setIsValid] = useState<FormIsValid>({
		userId: false,
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
			mutate(formData)
			router.push('/login')
		} else {
			formState.setError('email', { message: '이메일 미인증' })
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
		const { agree_14plus, agree_terms, agree_info, agree_recinfo } = formState.getValues()
		formState.setValue('agree_14plus', !agree_14plus)
		formState.setValue('agree_terms', !agree_terms)
		formState.setValue('agree_info', !agree_info)
		formState.setValue('agree_recinfo', !agree_recinfo)
	}

	return (
		<Layout>
			<RegisterForm
				onSubmit={onSubmit}
				isValid={isValid}
				setIsValid={setIsValid}
				onFormValid={onFormValid}
				onAllCheck={onAllCheck}
				{...formState}
			/>
		</Layout>
	)
}

export default Register
