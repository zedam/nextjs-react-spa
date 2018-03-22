import Header from './Header'
import Head from 'next/head'


const Layout = (props) => (
	<div>
		<Head>
			<title>The Brut</title>

			<link type="text/css" rel="stylesheet" href="/static/style.css"></link>

			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<Header title={props.title} pathname={props.pathname}/>
		{props.children}
    </div>

);

Layout.getInitialProps = () => (
    AOS.init()
);

export default Layout
