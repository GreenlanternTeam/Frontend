import '../assets/index.css'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import * as nextImage from 'next/image'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	nextRouter: {
		Provider: RouterContext.Provider
	}
}
Object.defineProperty(nextImage, 'default', {
	configurable: true,
	value: (props) => <img {...props} />
})

export const decorators = [
	(Story) => (
		<div className="w-full max-w-lg mx-auto relative">
			<Story />
		</div>
	)
]
