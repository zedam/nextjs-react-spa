import Image from '../Image.js'
import BackgroundImage from '../BackgroundImage.js'
import LinkItem from './LinkItem.js'
import Reveal from 'react-reveal/Reveal'
import React from "react";
import Constant from "../Constant";
import axios from "axios/index";

class blockDoubleItems extends React.Component {

    constructor (props) {
        super (props);

        this.state = {
            isReady: false,
            showLink: false,
            showPrefetchImage1: false,
            showPrefetchImage2: false,
            prefetchImage1: [],
            prefetchImage2: []
        }
    }

    fetchItem = (item, count) => {

        if (this.state.nextLink == undefined) {
            const getPrefetchImage = async () => {
                try {
                    return await axios.get(Constant.api_url + `api/${item.handle}/${item.id}.json`)
                } catch (error) {
                    console.error(error)
                }
            }

            const countImage = async () => {
                const prefetchesImage = getPrefetchImage()
                    .then(response => {
                        if (count == 1) {
                            this.props.content.prefetchImage1 = response.data.image[0]
                            this.setState({showPrefetchImage1: true})
                        } else {
                            this.props.content.prefetchImage2 = response.data.image[0]
                            this.setState({showPrefetchImage2: true})
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
                
            }
            
            countImage();
        }
    }

    render() {
        return (
           <div className="block-double-items">
               
               <div className="block-big-item__container">
                {this.state.showPrefetchImage1 &&
                <div className="hidden">
                    <Image content={this.props.content.prefetchImage1} width="100%"/>
                </div>
                }
{/* 
                <Reveal effect="fadeInUp"> */}
                    <div className="block-big-item__image-container">
                            <LinkItem content={this.props.content.typeElement[0]}>
                                <a onMouseOver={() => (this.fetchItem(this.props.content.typeElement[0], 1))}>
                                    <BackgroundImage content={this.props.content.typeElement[0].image[0]} width="100%"/>
                                </a>
                            </LinkItem>
                    </div>
         {/*        </Reveal> */}
                <div className="block-big-item__content-container">
                    <Reveal effect="fadeInUp">
                        <h3 className="general__link-title">
                            <LinkItem content={this.props.content.typeElement[0]}>
                                <a onMouseOver={() => (this.fetchItem(this.props.content.typeElement[0]))}>
                                    <div dangerouslySetInnerHTML={{__html: this.props.content.typeElement[0].headline}}></div>
                                </a>
                            </LinkItem>
                        </h3>
                    </Reveal>

                </div>

            </div>
            
            <div className="block-big-item__container">
                {this.state.showPrefetchImage2 &&
                <div className="hidden">
                    <Image content={this.props.content.prefetchImage2} width="100%"/>
                </div>
                }

                <div className="block-big-item__image-container">
                    <LinkItem content={this.props.content.typeElement[1]}>
                        <a onMouseOver={() => (this.fetchItem(this.props.content.typeElement[1]), 2)}
						>
                            <Reveal effect="fadeInUp">
                                <Image content={this.props.content.typeElement[1].image[0]} width="100%"/>
                            </Reveal>
                        </a>
                    </LinkItem>
                </div>
                <div className="block-big-item__content-container">
                    <Reveal effect="fadeInUp">
                        <h3 className="general__link-title">
                            <LinkItem content={this.props.content.typeElement[1]}>
                                <a onMouseOver={() => (this.fetchItem(this.props.content.typeElement[1]))}>
                                    <div dangerouslySetInnerHTML={{__html: this.props.content.typeElement[1].headline}}></div>
                                </a>
                            </LinkItem>
                        </h3>
                    </Reveal>

                    <Reveal effect="fadeInUpText" duration={1000}>
                        <div className="general__text">
                            {this.props.content.typeElement[1].subtitle}
                        </div>
                    </Reveal>
                </div>

            </div>

           </div>
		)
    }

}

export default blockDoubleItems;
