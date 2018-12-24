import Link from 'next/link'

const LinkDirectors = (props) => (
    <Link key={props.content.id} as={`/directors/${props.content.slug}/${props.content.id}`}
		  href={`/directors?id=${props.content.id}`}>

		<a className="link-directors__item-container">
			{props.position != 0 &&
				<span className="link-directors__separator">/</span>
			}
			<span className="link-directors">
				{props.children}
			</span>
		</a>
    </Link>
);

export default LinkDirectors;
