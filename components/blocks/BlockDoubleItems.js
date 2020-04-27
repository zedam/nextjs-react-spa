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

        console.log(props);
        this.state = {
            isReady: false,
            showLink: false
        }
    }

    componentWillMount = () => {
        /* let prefetchImage = []
        let image = this.props.content.image[0]
        for (var item in image) {
            prefetchImage[item] = image[item].replace(image['handle'], this.props.content.handle);
        }

        this.props.content.prefetchImage = prefetchImage */
    }

    fetchItem = (item) => {

        if (this.state.nextLink == undefined) {
            this.setState({prefetchImage: true})
            axios.get (Constant.api_url + `api/${item.handle}/${item.id}.json`)
            this.state.nextLink = true;
        }
    }

    render() {
        return (
           <div className="block-double-items">
               
               <div className="block-big-item__container">
               {/*  {this.state.prefetchImage &&
                <div className="hidden">
                    <Image content={this.props.content.typeElement[0].prefetchImage} width="100%"/>
                </div>
                } */}

                <div className="block-big-item__image-container">
                    <Reveal effect="fadeInUp">
                        <LinkItem content={this.props.content.typeElement[0]}>
                            <a onMouseOver={() => (this.fetchItem(this.props.content.typeElement[0]))}>
                                    <BackgroundImage content={this.props.content.typeElement[0].image[0]} width="100%"/>
                            </a>
                        </LinkItem>
                    </Reveal>
                </div>
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

                    {/* <Reveal effect="fadeInUpText" duration={1000}>
                        <div className="general__text">
                            {this.props.content.typeElement[0].subtitle}
                        </div>
                    </Reveal> */}
                </div>

            </div>
            
            <div className="block-big-item__container">
                {/* {this.state.prefetchImage &&
                <div className="hidden">
                    <Image content={this.props.content.typeElement[1].prefetchImage} width="100%"/>
                </div>
                } */}

                <div className="block-big-item__image-container">
                    <LinkItem content={this.props.content.typeElement[1]}>
                        <a onMouseOver={() => (this.fetchItem(this.props.content.typeElement[1]))}>
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
