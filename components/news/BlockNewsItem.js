import Image from '../Image.js'
import LinkNews from './LinkNews'

const BlockNewsItem = (props) => (

    <div className="block-news-item__container">


        <div className="block-news-item__content-container">
            <h3 className="block-news-item__title">
                <LinkNews content={props.content}>
                    <a>
                        {props.content.headline}
                    </a>
                </LinkNews>
            </h3>
            <div className="block-news-item__subtitle">
                {props.content.subtitle}
            </div>
        </div>
        <div className="block-news-item__image-container">
            <Image content={props.content.image[0]} width="100%"/>
        </div>

    </div>
);

export default BlockNewsItem;
