import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider } from 'styled-components'
import { theme } from 'utils/theme'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'
import GlobalStyle from 'styles/globalStyle'
import 'assets/index.css'
import UserValid from 'components/UserValid'

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<Hydrate state={pageProps.dehydratedState}>
						<GlobalStyle />
						<UserValid />
						<div className="w-full min-w-[250px] max-w-lg mx-auto relative">
							<Component {...pageProps} />
							<div id="pop-up" />
						</div>
					</Hydrate>
					<ReactQueryDevtools />
				</QueryClientProvider>
			</ThemeProvider>
		</Provider>
	)
}

export default MyApp
