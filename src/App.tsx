import React, {useState} from 'react';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccrodion/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5;

function App() {
	const [collapsed, setCollapsed] = useState(false);
	const [rating, setRating] = useState<RatingType>(4);

	const changeRating = (value: RatingType) => {
    setRating(value);
  }

  return (
    <div>
      <Rating rating={rating} changeRating={changeRating}/>
      <UncontrolledRating/>
			<Accordion collapsed={collapsed} setCollapsed={setCollapsed}/>
      <UncontrolledAccordion/>
      <OnOff/>
    </div>
  );
}

export default App;
