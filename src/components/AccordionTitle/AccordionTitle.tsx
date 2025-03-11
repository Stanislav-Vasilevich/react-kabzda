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
		<h2 className={s.title} onClick={(e) => changeCollapsed()}>
			{props.title}
			{props.collapsed ? <span className={s.arrow}>&#9650;</span> : <span className={s.arrow}>&#9660;</span>}
		</h2>
	)
}

export default AccordionTitle;
