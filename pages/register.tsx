import React, { useEffect, useState } from 'react'
import RegisterForm from 'components/Auth/RegisterForm'
import Layout from 'layout/layout'
import { FieldError, useForm } from 'react-hook-form'
import { signUp, SignUpError } from 'api/auth'
import { useMutation } from 'react-query'
import { SignUpType, SignUpResponse } from 'api/auth'
import { AxiosError } from 'axios'
import { FormValue, FormIsValid, TestStateType } from 'types/SignUpType'
import { useRouter } from 'next/router'
import { usePopup } from 'hooks/usePopup'

const Register = () => {
	const [testState, setTest] = useState<TestStateType>({
		allcheck: false,
		agree_14plus: false,
		agree_terms: false,
		agree_info: false,
		agree_recinfo: false
	})
	const name = 'sss'
	const formState = useForm<FormValue>({
		mode: 'onBlur',
		reValidateMode: 'onChange'
	})
	const [isValid, setIsValid] = useState<FormIsValid>({
		password: false,
		email: false,
		password_confirm: false,
		nickname: false
	})
	const { mutate } = useMutation<SignUpResponse, AxiosError<SignUpError>, SignUpType>(signUp, {
		onSuccess: () => {
			router.push('/login')
		},
		onError: (err) => {
			if (err.response?.data) {
				const error = err.response?.data
				if (error.email) {
					formState.setError('email', { message: error.email })
				}
				if (error.nickname) {
					formState.setError('nickname', { message: error.nickname })
				}
			}
		}
	})
	//
	const router = useRouter()
	const { isSuccess: isEmailCheck, setSuccess } = usePopup()

	const onSubmit = (formData: SignUpType) => {
		if (isEmailCheck) {
			mutate(formData)
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
		const { agree_14plus, agree_terms, agree_info, agree_recinfo, allcheck } = formState.getValues()
		formState.setValue('allcheck', !allcheck)
		formState.setValue('agree_14plus', !agree_14plus)
		formState.setValue('agree_terms', !agree_terms)
		formState.setValue('agree_info', !agree_info)
		formState.setValue('agree_recinfo', !agree_recinfo)
		setTest({
			...testState,
			agree_14plus: !testState.agree_14plus,
			agree_terms: !testState.agree_terms,
			agree_info: !testState.agree_info,
			agree_recinfo: !testState.agree_recinfo
		})
	}

	return (
		<Layout>
			<RegisterForm
				onSubmit={onSubmit}
				isValid={isValid}
				setIsValid={setIsValid}
				onFormValid={onFormValid}
				onAllCheck={onAllCheck}
				testState={testState}
				{...formState}
			/>
		</Layout>
	)
}

export default Register
