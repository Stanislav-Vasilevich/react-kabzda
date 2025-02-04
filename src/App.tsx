import React, {useState} from 'react';
import './App.css';
import Rating from "./Components/Rating/Rating";
import Accordion from "./Components/Accordion/Accordion";
import OnOff from './Components/OnOff/OnOff';

function App() {
	const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Rating value={4}/>
			<Accordion collapsed={collapsed} setCollapsed={setCollapsed}/>
      <OnOff/>
    </div>
  );
}

export default App;
