import React from 'react';
import s from '../../Rating/Star/Star.module.css';
import {RatingType} from '../../../App';

type PropsType = {
	select: boolean
	rating: RatingType
	changeRating: (value: RatingType) => void
}

const Star = (props: PropsType) => {
	const changeRatingHandler = () => {
		props.changeRating(props.rating);
	}

	return (
		props.select
			? <span onClick={changeRatingHandler} className={`${s.star} ${s.active}`}>&#9733;</span>
			: <span onClick={changeRatingHandler} className={s.star}>&#9734;</span>
	)
}

export default Star;
