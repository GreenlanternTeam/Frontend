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
import { checkLogin } from 'api/auth'
import UserValid from 'components/UserValid'
import GreenPopUp from 'components/GreenPopUp'

const MyApp = ({ Component, pageProps }: AppProps) => {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<Hydrate state={pageProps.dehydratedState}>
						<GlobalStyle />
						<UserValid />
						<div className="w-full max-w-lg mx-auto relative">
							<Component {...pageProps} />
							<GreenPopUp />
							{/* <div className="fixed top-0 h-screen w-[32rem]   bg-[rgba(0,0,0,0.68)] z-40 flex justify-center items-center px-[50px]">
								<div className="w-full h-1/2 bg-[#F6F6F6]" />
							</div> */}
						</div>
					</Hydrate>
					<ReactQueryDevtools />
				</QueryClientProvider>
			</ThemeProvider>
		</Provider>
	)
}

export default MyApp
