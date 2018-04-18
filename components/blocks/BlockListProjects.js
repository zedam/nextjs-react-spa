import React, { Component } from 'react'
import LinkItem from './LinkItem'
import Image from '../Image'
import Reveal from 'react-reveal/Reveal'
import Constant from '../Constant'
import axios from 'axios/index'


class BlockListProjects extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount = () => {

        for (let i = 0; i < this.props.content.typeElement.length; i++) {
            let image = this.props.content.typeElement[i].image[0]

            var imageItemObj = {}

            for (var imageItem in image) {
                imageItemObj[imageItem] = image[imageItem].replace('_blockListProjects_', '_projects_')
            }

            this.props.content.typeElement[i].imageProject = imageItemObj
        }
    }

    fetchNext = (id) => {
        axios.get(Constant.api_url + `api/projects/${id}.json`)
    }

    render () {
        return (

            <React.Fragment>
                <Reveal effect="fadeInUp">

                    {this.props.content.typeElement.map((comp, i) => (
                        <div key={i}  className="block-list-projects__item">

                            <div className="block-list-projects__anim"  onMouseOver={() => (this.fetchNext(comp.id))}>
                                <LinkItem content={comp} position={i}>
                                    <a>
                                        <div className="block-list-projects__info">
                                            <div className="block-list-projects__table">
                                                <div className="block-list-projects__cell">
                                                    <h3 className="block-list-projects__title">
                                                        <span
                                                            dangerouslySetInnerHTML={{__html: comp.headline}}>
                                                        </span>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        {comp.imageProject &&
                                        <Image content={comp.imageProject} class="hidden"></Image>
                                        }

                                        {comp.image[0] &&
                                        <Image content={comp.image[0]} class="block-list-projects__image"></Image>
                                        }
                                    </a>
                                </LinkItem>
                            </div>
                        </div>
                    ))}

                </Reveal>
            </React.Fragment>
        )
    }
}

export default BlockListProjects

/*

const BlockListProjects = (props) => (
    <div>
		<Reveal effect="fadeInUp">

        {props.content.typeElement.map((comp, i) => (
			<div key={i}  className="block-list-projects__item">

				<div className="block-list-projects__anim">
					<LinkItem content={comp} position={i}>
						<a>
							<div className="block-list-projects__info">
								<div className="block-list-projects__table">
									<div className="block-list-projects__cell">
										<h3 className="block-list-projects__title">
											<span
											dangerouslySetInnerHTML={{__html: comp.headline}}>
											</span>
										</h3>
										{/!*<h4 className="block-list-projects__subtitle">
											{comp.director}
										</h4>*!/}
									</div>
								</div>
							</div>
							{comp.image[0] &&
							<Image content={comp.image[0]} class="hidden"></Image>
							}

							{comp.image[0] &&

								<Image content={comp.image[0]} class="block-list-projects__image"></Image>
							}
						</a>
					</LinkItem>
				</div>
			</div>
        ))}

		</Reveal>

    </div>
);

export default BlockListProjects;*/
