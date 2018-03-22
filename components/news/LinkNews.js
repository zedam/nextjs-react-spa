import Link from 'next/link'

const LinkNews = (props) => (
    <Link as={`/news/${props.content.slug}/${props.content.id}`} href={`/news?id=${props.content.id}`}>
        {props.children}
    </Link>
)

export default LinkNews;