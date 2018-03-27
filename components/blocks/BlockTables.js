
const BlockTables = (props) => (
    <div className="general__container">
		<h4 className="general__title">{props.content.mainTitle}</h4>

        <div className="tables__container">
            {props.content.tables.map((tables,i) => (

				<div key={i} className="tables__item">
					<div className="tables__heading">
						{tables.heading}
					</div>
					<div className="tables__custom">
						{tables.custom}
					</div>
				</div>
            ))}
        </div>
    </div>
);

export default BlockTables
