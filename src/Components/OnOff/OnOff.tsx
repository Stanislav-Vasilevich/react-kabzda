import React, {useState} from 'react';
import s from './OnOff.module.css';

const OnOff = () => {
  const [included, setIncluded] = useState(false);

  const onClickHandler = () => {
    setIncluded(!included);
  }

  return (
    <div className={s.transformer}>
      <div onClick={onClickHandler} className={s.transformer__body}>
        <div className={included ? `${s.transformer__switch} ${s.transformer__switch_active}` : `${s.transformer__switch}`}></div>
      </div>
      <div className={included ? `${s.transformer__title} ${s.transformer__title_active}` : s.transformer__title}>{included ? 'Включен' : 'Выключен'}</div>
    </div>
  )
};

export default OnOff;
