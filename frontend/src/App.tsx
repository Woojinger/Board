import React from 'react';
import Navbar from "./component/Navbar"
import Body_title from "./component/Body-title"
import "./index.scss"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Body_title></Body_title>
      </header>
    </div>
  );
}

export default App;
