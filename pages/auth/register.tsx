import React, { useEffect, useState } from 'react'
import RegisterForm from 'components/Auth/RegisterForm'
import Layout from 'layout/layout'
import { FieldError, useForm } from 'react-hook-form'
import { signUp, SignUpError } from 'api/auth'
import { useMutation } from 'react-query'
import { SignUpType, SignUpResponse } from 'api/auth'
import { AxiosError } from 'axios'
import { FormValue, FormIsValid, CheckBoxType } from 'types/SignUpType'
import { useRouter } from 'next/router'
import { usePopup } from 'hooks/usePopup'

const Register = () => {
	const [checkBox, setChekBox] = useState<CheckBoxType>({
		allcheck: false,
		agree_14plus: false,
		agree_terms: false,
		agree_info: false,
		agree_recinfo: false
	})
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
			router.push('/auth/login')
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

	const onSubmit = (formData: FormValue) => {
		const { agree_14plus, agree_terms, agree_info } = checkBox
		const body = {
			...formData,
			...checkBox
		}
		if (isEmailCheck && agree_14plus && agree_terms && agree_info) {
			mutate(body)
		} else if (!isEmailCheck) {
			formState.setError('email', { message: '이메일 미인증' })
		} else {
			return
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
		onAllCheck()
		return () => {
			setSuccess(false)
		}
	}, [checkBox.allcheck])

	const onAllCheck = () => {
		if (checkBox.allcheck) {
			setChekBox({
				...checkBox,
				agree_14plus: true,
				agree_terms: true,
				agree_info: true,
				agree_recinfo: true
			})
		} else {
			setChekBox({
				...checkBox,
				agree_14plus: false,
				agree_terms: false,
				agree_info: false,
				agree_recinfo: false
			})
		}
	}

	return (
		<Layout>
			<RegisterForm
				onSubmit={onSubmit}
				isValid={isValid}
				setIsValid={setIsValid}
				onFormValid={onFormValid}
				onAllCheck={onAllCheck}
				checkBox={checkBox}
				setCheckBox={setChekBox}
				{...formState}
			/>
		</Layout>
	)
}

export default Register
