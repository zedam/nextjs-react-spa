import LinkProject from './LinkProject'
import Image from '../Image'

const ListProjects = (props) => (
    <div>
        <ul className="projects__list">
            {props.content.data.map ((project, i) => (
                <li key={project.id}>

                    <LinkProject content={project}>
                        <a>
                            {project.image != undefined &&
                                <Image className="projects__image" width="100%" content={project.image}/>
                            }

                            {project.title}
                        </a>
                    </LinkProject>
                </li>
            ))}
        </ul>

        <style global jsx>{`
        .projects__image {
           width: 100%;
        }

        .projects__list {
            list-style: none;
            padding: 0;
        }
    `}</style>
    </div>
);

export default ListProjects;