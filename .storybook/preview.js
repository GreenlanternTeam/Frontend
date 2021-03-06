import '../assets/index.css'
import { RouterContext } from 'next/dist/shared/lib/router-context'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	nextRouter: {
		Provider: RouterContext.Provider
	}
}

export const decorators = [
	(Story) => (
		<div className="w-full max-w-lg mx-auto relative">
			<Story />
		</div>
	)
]
