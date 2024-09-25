import React, {FC, useState} from 'react';
import AccordionTitle from "../AccordionTitle/AccordionTitle";
import AccordionBody from "../AccordionBody/AccordionBody";

type PropsType = {
	selected: boolean
}

const Accordion: FC<PropsType> = (props) => {
	const [selected, setSelected] = useState(true);

	const changeSelected = () => {
		setSelected(!selected);
	}

	return (
		<div>
			<AccordionTitle title="Menu" changeSelected={changeSelected}/>
			<AccordionBody selected={selected}/>
		</div>
	);
};

export default Accordion;
