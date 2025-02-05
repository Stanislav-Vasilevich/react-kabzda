import React, {useState} from 'react';
import s from '../AccordionTitle/AccordionTitle.module.css';

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
          ? <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
          : ''
      }
    </div>
  );
};

export default UncontrolledAccordion;
