import { useMutation } from 'react-query'
import { login, SignUpResponse, SignUpType } from 'api/auth'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { getUsers } from 'redux/slices/login'
import { LoginResponse } from 'types/SignUpType'
import { LoginType } from 'types/LoginType'

const useLogin = () => {
	const { mutate, data, isLoading, isError, error, isSuccess } = useMutation<LoginResponse, AxiosError, LoginType>(login, {
		onSuccess: () => {
			console.log('안녕')
		},

		onError: (data) => {
			console.log(data)
		}
	})
	const router = useRouter()
	const dispatch = useDispatch()

	return { mutate }
}

export default useLogin
