import Image from '../Image.js'
import LinkNews from './LinkNews'
import Constant from "../Constant";
import React from "react";
import axios from "axios/index";

class BlockNewsItemSmall extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            isReady: false,
            showLink: false
        }
    }

    componentWillMount = () => {
        let prefetchImage = []
        let image = this.props.content.image[0]
        for (var item in image) {
            prefetchImage[item] = image[item].replace(image['handle'], this.props.content.handle);
        }

        this.props.content.prefetchImage = prefetchImage
    }

    fetchItem = (item) => {
        console.log ('a');

        if (this.state.nextLink == undefined) {
            this.setState ({prefetchImage: true})
            axios.get (Constant.api_url + `api/${item.handle}/${item.id}.json`)
            this.state.nextLink = true;
        }
    }

    render () {
        return (
            <div className="block-news-item-small__container"  onMouseOver={() => (this.fetchItem(this.props.content))}>
                {this.state.prefetchImage &&
                <div className="hidden">
                    <Image content={this.props.content.prefetchImage} width="100%" />
                </div>
                }
                <div className="block-news-item-small__image-container">
                    <Image content={this.props.content.image[0]} width="100%" />
                </div>

                <div className="block-news-item-small__content-container">
                    <h3 className="block-news-item-small__title">
                        <LinkNews content={this.props.content}>
                            <a onMouseOver={() => (this.fetchItem(this.props.content))}>
                                {this.props.content.title}
                            </a>
                        </LinkNews>
                    </h3>
                    <div className="block-news-item-small__subtitle">
                        {this.props.content.subtitle}
                    </div>

                </div>

            </div>
        )
    }
}

export default BlockNewsItemSmall;
