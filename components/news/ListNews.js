import LinkNews from './LinkNews'
import Image from '../Image'

const ListNews = (props) => (
    <div>
        <ul className="news__list">
            {props.content.data.map ((news, i) => (
                <li key={news.id}>

                    <LinkNews content={news}>
                        <a>
                            {news.image != undefined &&
                            <Image className="news__image" width="100%" content={news.image}/>
                            }
                            {news.title}
                        </a>
                    </LinkNews>
                </li>
            ))}
        </ul>

        <style global jsx>{`
        .news__image {
           width: 100%;
        }

        .news__list {
            list-style: none;
            padding: 0;
        }
    `}</style>
    </div>
);

export default ListNews;