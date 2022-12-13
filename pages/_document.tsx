import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
	return (
		<Html lang='pt-br'>
			<Head>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
