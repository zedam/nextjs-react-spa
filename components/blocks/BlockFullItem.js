import Image from '../Image.js'
import LinkItem from './LinkItem'
import Reveal from 'react-reveal/Reveal'
import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Constant from "../Constant";
import axios from "axios/index";


class BlockFullItem extends React.Component {

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
            console.log('a');
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

    render() {
        return (

            <div className="block-full-item__container">
                {this.state.prefetchImage &&
                <div className="hidden">
                    <Image content={this.props.content.prefetchImage} width="100%"/>
                </div>
                }

                <Reveal effect="fadeInUp">
                    <LinkItem content={this.props.content}>
                        <a onMouseOver={() => (this.fetchItem(this.props.content))}>
                            <div className="block-full-item__content-container">
                                <div className="block-full-item__content-container-table">
                                    <div className="block-full-item__content-container-cell">
                                        <h3 className="block-full-item__content-container-title">
                                            <span dangerouslySetInnerHTML={{__html: this.props.content.headline}}>
                                            </span>
                                        </h3>
                                        {this.props.content.director &&
                                        <div className="block-full-item__content-container-director">
                                            {this.props.content.director}
                                        </div>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="block-full-item__image-container">
                                <Image content={this.props.content.image[0]} width="100%"/>
                            </div>
                        </a>
                    </LinkItem>
                </Reveal>
            </div>

        )
    }
};

export default BlockFullItem;
