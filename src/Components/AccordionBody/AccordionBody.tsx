type PropsType = {
	selected: boolean
}

const AccordionBody = (props: PropsType) => {
	return (
		<div>
			{
				props.selected
					? (
						<ul>
							<li>one</li>
							<li>two</li>
							<li>three</li>
						</ul>
					)
					: ''
			}
		</div>
	);
};

export default AccordionBody;
