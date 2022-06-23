import logo from './logo.svg';
import React, {useEffect} from "react"
import './App.css';
import WebSocketComponent from './component/WebSocketComponent';

function App() {
  
  return (
    <div className="App">
      <WebSocketComponent />
    </div>
  );
}

export default App;
