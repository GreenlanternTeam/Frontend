import React, { useEffect, useState } from 'react'
import RegisterForm from 'components/RegisterForm'
import Layout from 'layout/layout'
import { FieldError, useForm } from 'react-hook-form'
import { signUp } from 'api/auth'
import { useMutation } from 'react-query'
import { SignUpType, SignUpResponse } from 'api/auth'
import { AxiosError } from 'axios'
import { CheckList, FormValue, FormIsValid } from 'types/SignUpType'

const Register = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValidating, isValid }
	} = useForm<FormValue>({
		mode: 'onChange'
	})
	const [isAllChecked, setIsAllChecked] = useState<boolean>(false)
	const [isVali, setIsValid] = useState<FormIsValid>({
		userId: false,
		password: false,
		email: false,
		password_confirm: false,
		nickname: false
	})
	const [dataList, setData] = useState<CheckList[]>([
		{ id: 1, key: 'agree_14plus', data: '[필수] 만 14세 이상', checked: false },
		{ id: 2, key: 'agree_terms', data: '[필수] 이용약관', checked: false },
		{ id: 3, key: 'agree_info', data: '[필수] 개인정보 수집 및 이용동의', checked: false },
		{ id: 4, key: 'agree_recinfo', data: '[선택] 정보 수신 동의', checked: false }
	])
	const { mutate, data, isLoading, isError, error, isSuccess } = useMutation<SignUpResponse, AxiosError, SignUpType>(signUp)
	const onAllCheckHandler = () => {
		if (isAllChecked) {
			setData(
				dataList.map((el) => {
					return { ...el, checked: true }
				})
			)
		} else {
			setData(
				dataList.map((el) => {
					return { ...el, checked: false }
				})
			)
		}
	}

	const onSubmit = (formData: SignUpType) => {
		console.log(formData)
		mutate(formData)
	}

	const onFormValid = (inputName: string, error: FieldError | undefined) => {
		if (!error) {
			setIsValid({
				...isVali,
				[inputName]: true
			})
		} else
			setIsValid({
				...isVali,
				[inputName]: false
			})
	}

	useEffect(() => {
		onAllCheckHandler()
	}, [isAllChecked])

	return (
		<Layout>
			<RegisterForm
				register={register}
				errors={errors}
				watch={watch}
				dataList={dataList}
				isAllChecked={isAllChecked}
				setIsAllChecked={setIsAllChecked}
				onSubmit={onSubmit}
				handleSubmit={handleSubmit}
				isVali={isVali}
				setIsValid={setIsValid}
				onFormValid={onFormValid}
			/>
		</Layout>
	)
}

export default Register
