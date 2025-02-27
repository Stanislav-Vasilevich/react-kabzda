import React, {useState} from 'react';
import s from '../AccordionTitle/AccordionTitle.module.css';
import img from '../../img/1.jpeg';

const UncontrolledAccordion = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={s.title} onClick={() => setCollapsed(!collapsed)}>
      <h2>
        Menu
        {
          collapsed
            ? <span className={s.arrow}>&#9650;</span>
            : <span className={s.arrow}>&#9660;</span>
        }
      </h2>

      {
        collapsed
          ? <div className="img"><img className="photo" src={img} alt=""/></div>
          : ''
      }
    </div>
  );
};

export default UncontrolledAccordion;
