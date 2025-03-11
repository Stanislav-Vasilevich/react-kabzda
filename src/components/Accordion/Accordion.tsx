import {Dispatch, FC, SetStateAction} from 'react';
import AccordionTitle from "../AccordionTitle/AccordionTitle";
import AccordionBody from "../AccordionBody/AccordionBody";

export type PropsType = {
	collapsed: boolean
	setCollapsed: Dispatch<SetStateAction<boolean>>
}

const Accordion: FC<PropsType> = (props) => {
	return (
		<div>
			<AccordionTitle title="Menu" setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
			{props.collapsed && <AccordionBody/>}
		</div>
	)
};

export default Accordion;
