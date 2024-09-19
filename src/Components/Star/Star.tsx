import s from './Star.module.css';

type PropsType = {
	select: boolean
}

const Star = (props: PropsType) => props.select
	? <span className={`${s.star} ${s.active}`}>&#9733;</span>
	: <span className={s.star}>&#9734;</span>;

export default Star;
