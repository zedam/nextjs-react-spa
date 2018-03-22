import Link from 'next/link'

const LinkProject = (props) => (
    <Link as={`/projects/${props.content.slug}/${props.content.id}`} href={`/projects?id=${props.content.id}`}>
        {props.children}
    </Link>
);

export default LinkProject;