import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'

class GreenDocs extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		return await Document.getInitialProps(ctx)
	}
	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default GreenDocs
