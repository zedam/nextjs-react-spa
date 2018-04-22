import Header from './Header'
import Head from 'next/head'
import Footer from './Footer'

const Layout = (props) => (
	<React.Fragment>
		<Head>
{/*
			<meta name={document} />*/}
			{props.content.metaTitle &&
			<title>{props.content.metaTitle}</title>
			}
			{props.content.metaDescription &&
			<meta name="description" content={props.content.metaDescription} />
			}

            <link rel="alternate" href="http://thebrut.us" hrefLang="en"/>
			<meta name="google-site-verification" content="qTRD3KySjg_5L5XrKLpt0mBOom_mD_K5ewpDpZ-MSOU" />
			<meta property="og:type" content="website" />
			<meta property="og:locale" content="en" />


			{props.content.metaTitle &&
			<meta property="og:title" content={props.content.metaTitle} />
			}
			{props.content.metaDescription &&
			<meta property="og:description" content={props.content.metaDescription} />
			}

			{props.content.image ? (
				<meta property="og:image" content={props.content.image[0].desktop} />
			) : (
				<meta property="og:image" content="image_facebook.jpg" />
			)}

			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:url" content="" />

			<link type="text/css" rel="stylesheet" href="/static/style.css"></link>
			<link type="text/css" rel='stylesheet' href='/_next/static/style.css' />
			<link rel="icon" href='/static/images/mobile/favicon_flag.png' />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<Header title={props.title} pathname={props.pathname} />
		{props.children}

		{/*<Footer></Footer>*/}
    </React.Fragment>

);


export default Layout
