import React, { useEffect, useState } from 'react'
import RegisterForm from 'components/RegisterForm'
import Layout from 'layout/layout'
import { useForm } from 'react-hook-form'
import { signUp } from 'api/auth'
import { useMutation } from 'react-query'
import { SignUpType, SignUpResponse } from 'api/auth'
import { AxiosError } from 'axios'
import { CheckList, FormValue } from 'types/SignUpType'

const Register = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<FormValue>({
		mode: 'onBlur'
	})
	const [isAllChecked, setIsAllChecked] = useState<boolean>(false)
	const [dataList, setData] = useState<CheckList[]>([
		{ id: 1, data: '[필수] 만 14세 이상', checked: false },
		{ id: 2, data: '[필수] 이용약관', checked: false },
		{ id: 3, data: '[필수] 개인정보 수집 및 이용동의', checked: false },
		{ id: 4, data: '[선택] 정보 수신 동의', checked: false }
	])
	const { mutate, data, isLoading, isError, error, isSuccess } = useMutation<SignUpResponse, AxiosError, SignUpType>(signUp)
	console.log(data, error)
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
		mutate(formData)
		console.log(data)
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
			/>
		</Layout>
	)
}

export default Register
