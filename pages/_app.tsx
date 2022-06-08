import type { AppContext, AppProps } from 'next/app'
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
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<Hydrate state={pageProps.dehydratedState}>
						<GlobalStyle />
						<UserValid />
						<Head>
							<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
						</Head>
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
