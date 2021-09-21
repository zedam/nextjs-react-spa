import Image from '../Image.js'
import LinkItem from './LinkItem.js'
import Reveal from 'react-reveal/Reveal'
import React from "react";
import Constant from "../Constant";
import axios from "axios/index";

class BlockBigItem extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            isReady: false,
            showLink: false
        }
    }

    componentWillUpdate = () => {
        let prefetchImage = []
        let image = this.props.content.image[0]

        for (var item in image) {
            prefetchImage[item] = image[item].replace(image['handle'], this.props.content.handle);
        }

        this.props.content.prefetchImage = prefetchImage
    }

    fetchItem = (item) => {

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
                        this.setState({prefetchImage: true})
                    })
                    .catch(error => {
                        console.log(error)
                    })
                
            }
            
            countImage();
        }
    }

	render () {
		return (
            <div className="block-big-item__container">
                {this.state.prefetchImage &&
                <div className="hidden">
                    <Image content={this.props.content.prefetchImage} width="100%"/>
                </div>
                }

                <div className="block-big-item__image-container">
                    <LinkItem content={this.props.content}>
                        <a onMouseOver={() => (this.fetchItem(this.props.content))}
						>
                            <Reveal effect="fadeInUp">
                                <Image content={this.props.content.image[0]} width="100%"/>
                            </Reveal>
                        </a>
                    </LinkItem>
                </div>
                <div className="block-big-item__content-container">
                    <Reveal effect="fadeInUp">
                        <h3 className="general__link-title">
                            <LinkItem content={this.props.content}>
                                <a onMouseOver={() => (this.fetchItem(this.props.content))}>
                                    <div dangerouslySetInnerHTML={{__html: this.props.content.headline}}></div>
                                </a>
                            </LinkItem>
                        </h3>
                    </Reveal>

                    <Reveal effect="fadeInUpText" duration={1000}>
                        <div className="general__text">
                            {this.props.content.subtitle}
                        </div>
                    </Reveal>
                </div>

            </div>
		)
    }

}

export default BlockBigItem;
