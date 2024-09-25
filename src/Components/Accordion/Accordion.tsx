import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import AccordionTitle from "../AccordionTitle/AccordionTitle";
import AccordionBody from "../AccordionBody/AccordionBody";

type PropsType = {
	collapsed: boolean
	setCollapsed: Dispatch<SetStateAction<boolean>>
}

const Accordion: FC<PropsType> = (props) => {
	return props.collapsed
		? (
			<div>
				<AccordionTitle title="Menu" setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
			</div>
		)
		: (
			<div>
				<AccordionTitle title="Menu" setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
				<AccordionBody/>
			</div>
		)
};

export default Accordion;
