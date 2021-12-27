import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import TopBar from './Components/TopBar/TopBar';
import "./app.css";
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
