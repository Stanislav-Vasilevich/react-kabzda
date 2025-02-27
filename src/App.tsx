import React, {useState} from 'react';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccrodion/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';
import img from './img/1.jpeg';

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5;

function App() {
	const [collapsed, setCollapsed] = useState(false);
	const [rating, setRating] = useState<RatingType>(5);
  const [includedOnOff, setIncludedOnOff] = useState(false);

	const changeRating = (value: RatingType) => {
    setRating(value);
  }

  const changeOnOff = (include: boolean) => {
    setIncludedOnOff(include);
  }

  const onChangeOnOff = (include: boolean) => {
    setCollapsed(include);
  }

  return (
    <div className="App">
      <div className="block">
        Rating lesson:
        <Rating rating={rating} changeRating={changeRating}/>
      </div>

      <div className="block">
        Rating homework:
        <UncontrolledRating/>
      </div>

      <div className="block">
        <OnOff changeOnOff={changeOnOff} includedOnOff={includedOnOff}/>
      </div>

      <div className="block">
        <UncontrolledAccordion/>
      </div>

      <div className="block">
        <h2>Open menu: </h2>
        <UncontrolledOnOff onChangeOnOff={onChangeOnOff}/>
        <Accordion collapsed={collapsed} setCollapsed={setCollapsed}/>
      </div>
    </div>
  );
}

export default App;
