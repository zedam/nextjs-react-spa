import Link from 'next/link';
import React, { Component } from 'react'
import Reveal from 'react-reveal/Reveal'


export default class SocialLinks extends Component {
	constructor (props) {
		super (props);    
	}

	render () {
		return (

			<React.Fragment>
				<div className="social-links__container--wrapper">
					{/*{this.props.entry &&
					<div className="social-links__title">
						{this.props.entry}
					</div>
					}*/}
					{/*{!this.props.entry &&
					}*/}

					<div className="social-links__title">
						Follow us
					</div>

					<div className="social-links__container--layout">
						{/*{this.props.content.tumblrLink &&
						<Link href={this.props.content.tumblrLink}>
							<a className="social-links__item" target="_blank">Tumblr</a>
						</Link>
						}*/}
						{this.props.content.facebookLink &&
						<Link href={this.props.content.facebookLink}>
							<a className="social-links__item facebook" target="_blank">
								<svg width="12px" height="22px" viewBox="0 0 12 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
									<path d="M9.011,3.65345831 C9.681,3.62945831 10.351,3.64745831 11.024,3.64745831 L11.301,3.64745831 L11.301,0.157458313 C10.942,0.122458313 10.568,0.0704583131 10.193,0.0524583131 C9.505,0.0224583131 8.817,-0.0125416869 8.128,0.0044583131 C7.076,0.0264583131 6.082,0.281458313 5.213,0.904458313 C4.217,1.62145831 3.67,2.62845831 3.462,3.81645831 C3.375,4.30545831 3.353,4.81545831 3.34,5.31245831 C3.321,6.09545831 3.337,6.87745831 3.338,7.66045831 L3.338,7.95445831 L0,7.95445831 L0,11.8514583 L3.318,11.8514583 L3.318,21.6454583 L7.372,21.6454583 L7.372,11.8674583 L10.68,11.8674583 C10.849,10.5704583 11.016,9.28845831 11.189,7.95245831 C10.923,7.95245831 10.684,7.95045831 10.446,7.95245831 C9.505,7.95745831 7.346,7.95245831 7.346,7.95245831 C7.346,7.95245831 7.355,6.02145831 7.379,5.18345831 C7.411,4.03545831 8.092,3.68545831 9.011,3.65345831" className="path" fill={this.props.color ? this.props.color : '#FFF'}></path>
								</svg>
							</a>
						</Link>
						}
						{this.props.content.instagramLink &&
						<Link href={this.props.content.instagramLink}>
							<a className="social-links__item instagram" target="_blank">
								<svg width="21px" height="20px" viewBox="0 0 21 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
									<g transform="translate(0.903500, 0.368334)" className="path" fill={this.props.color ? this.props.color : '#FFF'}>
										<path d="M17.8345,9.83252388 C17.8345,8.52352388 17.8405,7.21452388 17.8305,5.90652388 C17.8285,5.58352388 17.8095,5.25352388 17.7395,4.93952388 C17.3215,3.06452388 15.7675,1.79852388 13.8465,1.78952388 C11.1545,1.77552388 8.4625,1.78352388 5.7715,1.79052388 C5.4955,1.79052388 5.2135,1.81852388 4.9445,1.87852388 C3.0685,2.30052388 1.8035,3.85252388 1.7935,5.77352388 C1.7795,8.46552388 1.7875,11.1575239 1.7935,13.8485239 C1.7945,14.1245239 1.8225,14.4075239 1.8835,14.6765239 C2.3075,16.5625239 3.8655,17.8205239 5.8055,17.8275239 C8.4795,17.8375239 11.1525,17.8325239 13.8255,17.8265239 C14.1105,17.8255239 14.4025,17.7985239 14.6805,17.7365239 C16.5555,17.3155239 17.8135,15.7635239 17.8325,13.8425239 C17.8445,12.5055239 17.8345,11.1685239 17.8345,9.83252388 M9.7965,19.6135239 C8.4965,19.6135239 7.1975,19.6155239 5.8975,19.6125239 C3.3035,19.6075239 1.1575,18.1145239 0.3235,15.6635239 C0.1215,15.0685239 0.0285,14.4115239 0.0215,13.7805239 C-0.0115,11.1355239 0.0015,8.49052388 0.0085,5.84452388 C0.0175,3.05652388 1.8465,0.758523883 4.5625,0.141523883 C4.9925,0.0435238833 5.4455,0.0105238833 5.8885,0.00852388329 C8.5055,-0.00347611671 11.1235,-0.000476116706 13.7405,0.00352388329 C16.5535,0.00852388329 18.8465,1.81952388 19.4765,4.55152388 C19.5755,4.98152388 19.6095,5.43452388 19.6115,5.87652388 C19.6235,8.49452388 19.6205,11.1115239 19.6165,13.7295239 C19.6125,16.5455239 17.8135,18.8295239 15.0745,19.4695239 C14.6365,19.5725239 14.1745,19.6015239 13.7225,19.6065239 C12.4145,19.6245239 11.1055,19.6135239 9.7965,19.6135239" id="Fill-7"></path>
										<path d="M13.3770232,9.81982388 C13.384,7.85182388 11.806,6.25782388 9.838,6.24282388 C7.859,6.22882388 6.254,7.81682388 6.24797679,9.79682388 C6.241,11.7638239 7.818,13.3578239 9.787,13.3728239 C11.765,13.3868239 13.37,11.7988239 13.3770232,9.81982388 M15.1600251,9.79682388 C15.169,12.7318239 12.756,15.1518239 9.817,15.1548288 C6.88,15.1588239 4.463,12.7428239 4.46499876,9.80582388 C4.467,6.87782388 6.861,4.47582388 9.794,4.46074467 C12.727,4.44482388 15.15,6.85482388 15.1600251,9.79682388" id="Fill-9"></path>
										<path d="M15.8829,4.57022388 C15.8679,5.00822388 15.5009,5.35722388 15.0639,5.34922388 C14.6149,5.34122388 14.2559,4.96322388 14.2719,4.51522388 C14.2859,4.07822388 14.6539,3.73022388 15.0909,3.73722388 C15.5389,3.74422388 15.8979,4.12322388 15.8829,4.57022388 Z" id="Fill-11"></path>
									</g>
								</svg>
							</a>
						</Link>
						}
						{this.props.content.vimeoLink &&
						<Link href={this.props.content.vimeoLink}>
							<a className="social-links__item vimeo" target="_blank">
								<svg width="22px" height="19px" viewBox="0 0 22 19" version="1.1" xmlns="http://www.w3.org/2000/svg">
									<path d="M10.009,18.0790583 C8.792,18.0790583 7.764,16.9560583 6.922,14.7100583 C5.311,8.80305831 4.597,5.16705831 3.225,5.16705831 C3.07,5.16705831 2.525,5.49205831 1.589,6.14805831 L0.607,4.88505831 C3.22,2.58805831 5.334,0.427058313 6.734,0.300058313 C8.357,0.143058313 9.354,1.25205831 9.728,3.62205831 C10.211,6.66305831 10.904,11.5750583 12.116,11.5750583 C13.051,11.5750583 15.363,7.76705831 15.484,6.38305831 C15.691,4.41305831 14.072,4.29905831 12.534,4.93105831 C13.565,1.59305831 15.529,-0.0269416869 18.43,0.0660583131 C20.582,0.128058313 21.596,1.51805831 21.471,4.23105831 C21.291,8.14305831 14.148,18.0790583 10.009,18.0790583 Z" className="path"  fill={this.props.color ? this.props.color : '#FFF'}></path>
								</svg>
							</a>
						</Link>
						}
						{this.props.content.linkedinLink &&
						<Link href={this.props.content.linkedinLink}>
							<a className="social-links__item linkedin" target="_blank">
								<svg width="21px" height="21px" viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg">
									<g transform="translate(0.905500, 0.931758)" className="path"  fill={this.props.color ? this.props.color : '#FFF'}>
										<path d="M2.357,0 C3.657,0 4.713,1.058 4.713,2.354 C4.713,3.655 3.657,4.713 2.357,4.713 C1.053,4.713 0,3.655 0,2.354 C0,1.058 1.053,0 2.357,0 L2.357,0 Z M0.322,19.567 L4.391,19.567 L4.391,6.497 L0.322,6.497 L0.322,19.567 Z" id="Fill-3"></path>
										<path d="M6.9404,6.4971 L10.8374,6.4971 L10.8374,8.2831 L10.8904,8.2831 C11.4334,7.2561 12.7594,6.1731 14.7374,6.1731 C18.8504,6.1731 19.6094,8.8771 19.6094,12.3971 L19.6094,19.5671 L15.5494,19.5671 L15.5494,13.2131 C15.5494,11.6971 15.5194,9.7471 13.4384,9.7471 C11.3224,9.7471 11.0004,11.3961 11.0004,13.1011 L11.0004,19.5671 L6.9404,19.5671 L6.9404,6.4971 Z" id="Fill-5"></path>
									</g>
								</svg>
							</a>
						</Link>
						}
						{/*{this.props.content.behance &&
						<Link href={this.props.content.behance}>
							<a className="social-links__item behance" target="_blank">
								<svg width="142px" height="142px" viewBox="0 0 142 142" version="1.1">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<g fill="#000000" fill-rule="nonzero">
											<circle id="background" cx="71" cy="71" r="71"></circle>
										</g>
									</g>
								</svg>
							</a>
						</Link>
						}*/}

					</div>

					<div className="social-links__copyright">
						@ 2021 BRUT
					</div>
					{/*{this.props.content.behanceLink &&
					<Link href={this.props.content.behanceLink}>
						<a className="social-links__item behance" target="_blank">Behance</a>
					</Link>
					}*/}
				</div>	
				{/* {this.props.content.tumblrLink || this.props.content.facebookLink ||
				this.props.content.instagramLink || this.props.content.vimeoLink
				|| this.props.content.linkedinLink || this.props.content.behanceLink &&
				} */}
			</React.Fragment>	
		)
	}
}
