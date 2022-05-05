import type { NextPage } from 'next'
import Layout from 'layout/layout'
import FormO from 'components/organisms/FormO'

const LoginForm: NextPage = () => {
	return (
		<Layout>
			<div className="h-[calc(100vh-75px)] min-h-full w-full bg-[rgba(196,196,196,0.15)] px-[50px] flex flex-col items-center">
				<FormO />
			</div>
		</Layout>
	)
}
export default LoginForm
