import React from 'react';
import './App.css';
import Rating from "./Components/Rating/Rating";
import Accordion from "./Components/Accordion/Accordion";

function App() {
  return (
    <div>
      <Rating value={3}/>
			<Accordion selected={false}/>
    </div>
  );
}

export default App;
