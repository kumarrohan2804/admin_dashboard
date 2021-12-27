import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import TopBar from './Components/TopBar/TopBar';
import "./app.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Sidebar />
        <div className="others">other pages</div>
      </div>
    </div>
  );
}

export default App;
