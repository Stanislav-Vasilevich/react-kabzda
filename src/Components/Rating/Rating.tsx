import React, {FC} from 'react';
import Star from "../Star/Star";

type PropsType = {
	value: 0 | 1 | 2 | 3 | 4 | 5;
}

const Rating: FC<PropsType> = (props) => {
	return (
		<>
			<Star select={props.value > 0}/>
			<Star select={props.value > 1}/>
			<Star select={props.value > 2}/>
			<Star select={props.value > 3}/>
			<Star select={props.value > 4}/>
		</>
	);
};

export default Rating;
