import {RatingType} from '../../../App';
import s from './Star.module.css';

type PropsType = {
  select: boolean
  value: RatingType
  changeRating: (value: RatingType) => void
}

const Star = (props: PropsType) => {
  const onClickHandler = () => {
    props.changeRating(props.value);
  }

  return props.select
      ? <span onClick={onClickHandler} className={`${s.star} ${s.active}`}>&#9733;</span>
      : <span onClick={onClickHandler} className={s.star}>&#9734;</span>
}

export default Star;
