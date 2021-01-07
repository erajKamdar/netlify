import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [val, setVal] = useState({})

  useEffect(() => {

    fetch("/.netlify/functions/hello?name=From React App")
    .then(res=>res.json())
    .then(obj=>setVal(obj))
  })
  return (
    <div className="App">
     <h1>Hello World from React App
       <br/> <br/> (UPDATED NOW)
       <br/> <br /> Then...</h1>
       <h3>{val.message}</h3>
    </div>
  );
}

export default App;
