import LinkDirectors from './LinkDirectors'
import Image from '../Image'
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade'

const ListDirectors = (props) => (
    <React.Fragment>
			<ul>
				{props.content.data.map((director, i) => (
					<li className="fade-up" data-aos-anchor-placement="top-center">
				<Fade left  key={i} delay={3000*i} >
						<LinkDirectors content={director}>
							{director.title}
						</LinkDirectors>
				</Fade>
					</li>
				))}
			</ul>

        <style global jsx>{`
            .directors__image {
               width: 100%;
            }
        `}</style>
    </React.Fragment>
);

export default ListDirectors;
