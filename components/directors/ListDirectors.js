import LinkDirectors from './LinkDirectors'
import Image from '../Image'
import ScrollAnimation from 'react-animate-on-scroll';
//import "animate.css/animate.min.css";

const ListDirectors = (props) => (
    <div>
        <ul>
            {props.content.data.map((director, i) => (
                <li className="fade-up" data-aos-anchor-placement="top-center" key={director.id}>
                    <LinkDirectors content={director}>
						{director.title}

                    </LinkDirectors>
                </li>
            ))}
        </ul>

        <style global jsx>{`
            .directors__image {
               width: 100%;
            }
        `}</style>
    </div>
);

export default ListDirectors;
