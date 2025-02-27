import s from '../OnOff/OnOff.module.css';
import React, {useState} from 'react';

type PropsType = {
  onChangeOnOff: (include: boolean) => void
}

const UncontrolledOnOff = (props: PropsType) => {
  const [included, setIncluded] = useState(false);

  const onClickHandler = () => {
    setIncluded(!included);
    props.onChangeOnOff(!included);
  }

  return (
    <div className={s.transformer}>
      <div onClick={onClickHandler} className={s.transformer__body}>
        <div className={
          included
            ? `${s.transformer__switch} ${s.transformer__switch_active}`
            : `${s.transformer__switch}`}>
        </div>
      </div>
      <div className={
        included
          ? `${s.transformer__title} ${s.transformer__title_active}`
          : s.transformer__title}>
        {included ? 'Включен' : 'Выключен'}
      </div>
    </div>
  )
}

export default UncontrolledOnOff;
