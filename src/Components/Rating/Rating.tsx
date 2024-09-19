import React, {FC} from 'react';
import Star from "../Star/Star";

type PropsType = {
	value: 1 | 2 | 3 | 4 | 5;
}

const Rating: FC<PropsType> = (props) => {
	if(props.value > 0) {
		return (
			<div>
				<Star select={true}/>
				<Star select={true}/>
				<Star select={true}/>
				<Star select={false}/>
				<Star select={false}/>
			</div>
		);
	}
};

export default Rating;
