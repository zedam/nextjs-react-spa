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

class BlockListProjectsTags extends React.Component {

    constructor(props) {
        super(props)

        let tags = [];
        let tagSlug = [];

        if (this.props.content.itemsProjects != undefined) {

            for (let i = 0; i < this.props.content.itemsProjects.length; i++) {
                const tagsItem = this.props.content.itemsProjects[i].item.tags;
                for (let j = 0; j < tagsItem.length; j++) {
                    if (tagSlug.indexOf(tagsItem[j].slug) == -1) {
                        tagSlug.push(tagsItem[j].slug);
                        tags.push(tagsItem[j]);
                    }
                }
            }
        }

        this.state = {
            showContent: true,
            items: props.content.itemsProjects != undefined ? props.content.itemsProjects : [],
            activeTag: 'All',
            tags: tags
        };
    }

    componentWillUpdate = () => {

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
            if ( this.props.content.itemsProjects.length > 0) {
                
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

            </React.Fragment>
        )
    }
}

export default BlockListProjectsTags
