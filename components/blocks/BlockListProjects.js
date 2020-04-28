import React, { Component } from 'react'
import LinkItem from './LinkItem'
import Image from '../Image'
import Reveal from 'react-reveal/Reveal'
import Constant from '../Constant'
import axios from 'axios/index'

import Masonry from 'react-masonry-component'

const masonryOptions = {
    transitionDuration: 0,
    columnWidth: '.grid-sizer',
    itemSelector: '.block-list-projects__item'
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class BlockListProjects extends React.Component {

    constructor(props) {
        super(props)

        let tags = [];
        let tagSlug = [];

        for (let i = 0; i < this.props.content.itemsProjects.length; i++) {
            const tagsItem = this.props.content.itemsProjects[i].item.tags;
            for (let j = 0; j < tagsItem.length; j++) {
                if (tagSlug.indexOf(tagsItem[j].slug) == -1) {
                    tagSlug.push(tagsItem[j].slug);
                    tags.push(tagsItem[j]);
                }
            }
        }

        this.state = {
            showContent: true,
            items: props.content.itemsProjects,
            activeTag: 'All',
            tags: tags
        };
    }

    componentWillMount = () => {

        /* for (let i = 0; i < this.props.content.typeElement.length; i++) {
            let image = this.props.content.typeElement[i].image[0]

            var imageItemObj = {}

            for (var imageItem in image) {
                imageItemObj[imageItem] = image[imageItem].replace('_blockListProjects_', '_projects_')
            }

            this.props.content.typeElement[i].imageProject = imageItemObj
        } */
    }

    tagClick = (slug) => {
        let items = [];

        if (this.state.activeTag == slug) {
            this.setState({
                activeTag: 'All',
                showContent: false
            });

            setTimeout(() => {
            this.setState({
                items: this.props.content.itemsProjects != undefined ? this.props.content.itemsProjects : [],
            });
            }, 300);
            
        } else {
            for (let i = 0 ; i < this.props.content.itemsProjects.length; i ++) {
                const item = this.props.content.itemsProjects[i];
                const tags = item.item.tags;

                for (let j = 0 ; j < tags.length; j ++) {
                    if (tags[j].slug == slug) {
                        items.push(item);
                    }
                }
            }
            
            this.setState({
                activeTag: slug,
                showContent: false
            });

            setTimeout(() => {

            this.setState({
                items: items
            });
            }, 300);
        }

        setTimeout(() => {
            this.setState({
                showContent: true
            });
        }, 300);
    }

    fetchNext = (id) => {
        if (!window.isMobile) {
            axios.get(Constant.api_url + `api/projects/${id}.json`)
        }
    }

    render () {

        const $this = this;

        const childElements = this.state.items.map(function(comp, i){
            return (
                <div key={i}  className={'block-list-projects__item ' + comp.position.value + ' ' + (comp.item.tags.map((tag, j) => ( tag.slug ))) }>
                    {console.log(comp.item.id)}
                    <div className={'block-list-projects__anim'}  onMouseOver={() => ($this.fetchNext(comp.item.id))}>
                        <LinkItem content={comp.item} position={i}>
                            <a>
                                <div className="block-list-projects__info">
                                    <div className="block-list-projects__table">
                                        <div className="block-list-projects__cell">
                                            <h3 className="block-list-projects__title">
                                                <span
                                                    dangerouslySetInnerHTML={{__html: comp.item.headline}}>
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {comp.item.image[0] &&
                                <Image content={comp.item.image[0]} class="block-list-projects__image"></Image>
                                }
                            </a>
                        </LinkItem>
                    </div>
                </div>
             );
         });

        return (

            <React.Fragment>
                <div className="header-2__container studio tags-container">
                    <div className="header-2__container-content">
                        {this.state.tags.map((tag, i) => (
                            <div key={i} className="tag">
                                <div  className={'tag-item ' + (this.state.activeTag == tag.slug ? 'active' : '')} onClick={() => (this.tagClick(tag.slug)) } >
                                    <span className="normal">
                                    #{tag.title}
                                    </span>
                                    <span className="bold">
                                    #{tag.title}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={'masonry-content ' + (this.state.showContent ? 'show': 'hide')}>
                    <Masonry
                        className={''}
                        elementType={'div'} 
                        options={masonryOptions} 
                        disableImagesLoaded={false} 
                        updateOnEachImageLoad={false} 
                        imagesLoadedOptions={imagesLoadedOptions} 
                    >
                        {childElements}
                        <div className="grid-sizer"></div>
                    </Masonry>
                </div>
            </React.Fragment>
        )
    }
}

export default BlockListProjects
