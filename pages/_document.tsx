import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { uuid } from 'utils/fn'

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage
		const uid = uuid()
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
				})
			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: [
					<div key={uid}>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</div>
				]
			}
		} finally {
			sheet.seal()
		}
	}
}
