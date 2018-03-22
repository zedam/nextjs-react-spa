import Image from '../Image.js'
import LinkDirectors from "./LinkDirectors";

const BlockDirectorsItem = (props) => (

    <div>
        <h1>
            <LinkDirectors content={props.content}>
                <a>
                    {props.content.title}
                </a>
            </LinkDirectors>
        </h1>
        <div>
            {props.content.subtitle}
        </div>

        <div dangerouslySetInnerHTML={{__html: props.content.description}}></div>

        <Image content={props.content.image[0]} width="100%"/>

    </div>
);

export default BlockDirectorsItem;
