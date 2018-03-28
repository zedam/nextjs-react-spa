import Header from './Header'
import Head from 'next/head'
import Footer from './Footer'


const Layout = (props) => (
	<div>
		<Head>
			<title>The Brut Films</title>

			<link type="text/css" rel="stylesheet" href="/static/style.css"></link>
			<link type="text/css" rel='stylesheet' href='/_next/static/style.css'
			/>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<Header title={props.title} pathname={props.pathname}/>
		{props.children}

		<Footer></Footer>
    </div>

);

Layout.getInitialProps = () => (
    AOS.init()
);

export default Layout
