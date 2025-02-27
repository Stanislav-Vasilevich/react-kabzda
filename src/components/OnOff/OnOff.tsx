import React from 'react';
import s from './OnOff.module.css';

type PropsType = {
  changeOnOff: (include: boolean) => void
  includedOnOff: boolean
}

const OnOff = (props: PropsType) => {

  return (
    <div className={s.transformer}>
      <div onClick={() => props.changeOnOff(!props.includedOnOff)} className={s.transformer__body}>
        <div className={
          props.includedOnOff
          ? `${s.transformer__switch} ${s.transformer__switch_active}`
          : `${s.transformer__switch}`}>
        </div>
      </div>
      <div className={
        props.includedOnOff
          ? `${s.transformer__title} ${s.transformer__title_active}`
          : s.transformer__title}>
        {props.includedOnOff ? 'Включен' : 'Выключен'}
      </div>
    </div>
  )
};

export default OnOff;
