import {FC} from 'react';
import Star from "./Star/Star";
import {RatingType} from '../../App';

type PropsType = {
	rating: RatingType
	changeRating: (value: RatingType) => void
}

const Rating: FC<PropsType> = (props) => {
	const changeRating = (value: RatingType) => {
		props.changeRating(value);
	}

	return (
		<>
			<Star select={props.rating > 0} rating={1} changeRating={changeRating}/>
			<Star select={props.rating > 1} rating={2} changeRating={changeRating}/>
			<Star select={props.rating > 2} rating={3} changeRating={changeRating}/>
			<Star select={props.rating > 3} rating={4} changeRating={changeRating}/>
			<Star select={props.rating > 4} rating={5} changeRating={changeRating}/>
		</>
	);
};

export default Rating;
