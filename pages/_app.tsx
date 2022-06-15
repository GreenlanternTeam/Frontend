import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider } from 'styled-components'
import { theme } from 'utils/theme'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { useState, useEffect } from 'react'
import GlobalStyle from 'styles/globalStyle'
import 'assets/index.css'
import UserValid from 'components/Auth/UserValid'
import Head from 'next/head'
import Favicon from 'components/Common/Favicon'

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient())
	const [showChild, setShowChild] = useState<boolean>(false)

	useEffect(() => {
		setShowChild(true)
	}, [])

	if (!showChild) {
		return null
	}

	if (typeof window === 'undefined') {
		return <></>
	} else {
		return (
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<QueryClientProvider client={queryClient}>
						<Hydrate state={pageProps.dehydratedState}>
							<GlobalStyle />
							<UserValid />
							<div className="w-full max-w-lg mx-auto relative">
								<Head>
									<title>GreenLantern</title>
								</Head>
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
}

export default MyApp
