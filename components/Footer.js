import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import SocialLinks from './SocialLinks'


class Footer extends React.Component {
    constructor (props) {
        super(props);
    }

    render (props) {
        return (
            <div className="footer__wrapper" style={{backgroundColor: this.props.content.data[0].colorBackground.color}}>
                <div className="footer__container">
                    <div className="footer__row">
                        <div className="footer__cell">
                            <div className="footer__logo"></div>
                            <SocialLinks content={this.props.content.data[0].social} color={'#FFF'}></SocialLinks>
                            {/*<div className="footer__copyright">
                            {this.props.content.data[0].footerCopyright}
                            </div>*/}
                        </div>

						{this.props.content.data[0].footerText1 &&
						<div className="footer__cell footer__content">
							<div className="footer__text fade-up"
								 dangerouslySetInnerHTML={{ __html: this.props.content.data[0].footerText1 }}>
							</div>
						</div>
						}

                        <div className="footer__cell footer__content">
                            {this.props.content.data[0].footerText &&
								<div className="footer__text fade-up"
									dangerouslySetInnerHTML={{ __html: this.props.content.data[0].footerText }}>
								</div>
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Footer;
