
import LinkDirectors from "../directors/LinkDirectors"
import Fade from 'react-reveal/Fade'
import Constant from '../Constant'

class MyLink extends React.Component {
	render () {
		const { onCustomClick, ...props } = this.props
		return <a {...props} onClick={this.handleClick} />
	}

	handleClick = event => {
		if (this.props.onClick) {
			this.props.onClick(event)
		}

		if (this.props.onCustomClick) {
			this.props.onCustomClick(event)
		}
	}
}

const customFunctionCall = function (id) {
	fetch(Constant.api_url + 'api/' + 'directors/' + id + '.json')
}


const BlockListDirectors = (props) => (

	<div className="link-directors__container">
			<div>
        		{props.content.typeElement.map((comp, i) => (
				<Fade bottom delay={i*100} key={i}>
					<LinkDirectors key={i} content={comp} position={i}>
						<div  onMouseOver={() => customFunctionCall(comp.id)}>
							{comp.title}
						</div>
					</LinkDirectors>
				</Fade>
        		))}
			</div>
    </div>
);


export default BlockListDirectors;
