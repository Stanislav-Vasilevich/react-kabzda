import React, {useState} from 'react';
import './App.css';
import Rating from "./Components/Rating/Rating";
import Accordion from "./Components/Accordion/Accordion";

function App() {
	const [collapsed, setCollapsed] = useState(true);

  return (
    <div>
      <Rating value={4}/>
			<Accordion collapsed={collapsed} setCollapsed={setCollapsed}/>
    </div>
  );
}

export default App;
