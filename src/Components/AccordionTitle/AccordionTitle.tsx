import s from './AccordionTitle.module.css';
import {Dispatch, SetStateAction} from "react";

type PropsType = {
	title: string
	setCollapsed: Dispatch<SetStateAction<boolean>>
	collapsed: boolean
}

const AccordionTitle = (props: PropsType) => {
	const changeCollapsed = () => {
		props.setCollapsed(!props.collapsed);
	}

 	return (
		<h2 className={s.title} onClick={changeCollapsed}>{props.title}</h2>
	)
}

export default AccordionTitle;
