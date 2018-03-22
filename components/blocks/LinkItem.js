import Link from 'next/link'

const LinkNews = (props) => (
    <Link as={`/${props.content.handle}/${props.content.slug}/${props.content.id}`} href={`/${props.content.handle}?id=${props.content.id}`}>
        {props.children}
    </Link>
)

export default LinkNews;
