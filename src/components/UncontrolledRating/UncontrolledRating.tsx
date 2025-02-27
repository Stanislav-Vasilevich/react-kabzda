import React, {useState} from 'react';
import {RatingType} from '../../App';
import Star from './Star/Star';

const UncontrolledRating = () => {
  const [value, setValue] = useState<RatingType>(4);

  const changeRating = (value: RatingType) => {
    setValue(value);
  }

  return (
    <span>
      <Star select={value > 0} value={1} changeRating={changeRating}/>
      <Star select={value > 1} value={2} changeRating={changeRating}/>
      <Star select={value > 2} value={3} changeRating={changeRating}/>
      <Star select={value > 3} value={4} changeRating={changeRating}/>
      <Star select={value > 4} value={5} changeRating={changeRating}/>
    </span>
  )
};

export default UncontrolledRating;
