import s from './AccordionTitle.module.css';

type PropsType = {
	title: string
	changeSelected: () => void
}

const AccordionTitle = (props: PropsType) => {
	return (
		<h2 className={s.title} onClick={props.changeSelected}>{props.title}</h2>
	)
}

export default AccordionTitle;
