import Header from './Header'
import Head from 'next/head'
import Footer from './Footer'


const Layout = (props) => (
	<React.Fragment>
		<Head>
			<title>{props.content.metaTitle}</title>
			<meta name="description" content={props.content.metaDescription} />

			<meta property="og:type" content="website" />
			<meta property="og:locale" content="en" />
			<meta property="og:title" content={props.content.metaTitle} />
			<meta property="og:description" content={props.content.metaDescription} />
			<meta property="og:image" content={props.content.metaDescription} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:url" content={props.content.image[0].desktop} />

			<link type="text/css" rel="stylesheet" href="/static/style.css"></link>
			<link type="text/css" rel='stylesheet' href='/_next/static/style.css'
			/>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<Header title={props.title} pathname={props.pathname}/>
		{props.children}

		{/*<Footer></Footer>*/}
    </React.Fragment>

);

Layout.getInitialProps = () => (
    AOS.init()
);

export default Layout
