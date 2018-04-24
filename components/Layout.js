import Header from './Header'
import Head from 'next/head'
import React, { Component} from 'react';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'UA-118040139-1'
}


class Layout extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        TagManager.initialize(tagManagerArgs)
    }

    render () {
        return (
            <React.Fragment>
                <Head>
                    {this.props.content.metaTitle &&
                    <title>{this.props.content.metaTitle}</title>
                    }
                    {this.props.content.metaDescription &&
                    <meta name="description" content={this.props.content.metaDescription} />
                    }

                    <link rel="alternate" href="http://thebrut.us" hrefLang="en"/>
                    <meta name="google-site-verification" content="qTRD3KySjg_5L5XrKLpt0mBOom_mD_K5ewpDpZ-MSOU" />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en" />


                    {this.props.content.metaTitle &&
                    <meta property="og:title" content={this.props.content.metaTitle} />
                    }
                    {this.props.content.metaDescription &&
                    <meta property="og:description" content={this.props.content.metaDescription} />
                    }

                    {this.props.content.image ? (
                        <meta property="og:image" content={this.props.content.image[0].desktop} />
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
                <Header title={this.props.title} pathname={this.props.pathname} />
                {this.props.children}


            </React.Fragment>
        )
    }
}
/*const Layout = (props) => (


);*/


export default Layout
