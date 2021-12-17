import React, { useContext, useState } from 'react';
import { ColorContext } from './context';

function App() {
  const [color] = useContext(ColorContext);
  const [mycol, setMycol] = useState("black");

  return (
    <div className="App">
      <button onClick={() => setMycol(color)} style={{ color: mycol, fontWeight: "bold" }}>Change Color</button>
    </div >
  );
}

export default App;
