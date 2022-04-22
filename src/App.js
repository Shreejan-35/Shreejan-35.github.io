import './App.css';
import React, {useState, useEffect} from 'react';
import { HashLoader } from 'react-spinners';
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  return (
    <div className="App">
      {loading ? (
        <div className='loader'>
          <HashLoader size={130} color={"#8CD736"} loading={loading} />
        </div>
      ) : (
        <>
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
