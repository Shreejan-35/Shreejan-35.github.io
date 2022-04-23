import './App.css';
import React, {useState, useEffect} from 'react';
import { HashLoader } from 'react-spinners';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';
import Home from "./components/Home/Home"

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
        <div className="loader">
          <HashLoader size={130} color={"#8CD736"} loading={loading} />
        </div>
      ) : (
        <>
          <Sidebar />
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
