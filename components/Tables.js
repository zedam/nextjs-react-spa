const Tables = (props) => (
    <div className="tables__container">
        {props.content.map((table, i) => (
            <div key={i} className="tables__item">
				<div className="tables__heading">
					{table.heading}
				</div>
				<div className="tables__custom">
					{table.custom}
				</div>
            </div>
        ))}
    </div>
);

export default Tables;
