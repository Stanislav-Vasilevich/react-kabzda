import React, {FC} from 'react';

type PropsType = {
	selected: boolean
}

const Accordion: FC<PropsType> = (props) => {
	return (
		<div>
			<h1>Меню:</h1>
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

export default Accordion;
