import React from "react";
import Header from './components/Header';
import Video from './components/Video';
import OpeningHours from './components/OpeningHours';
import OrderMenue from './components/OrderMenue';
import Footer from './components/Footer';
import './App.css';

function App() {
  console.log('init');
  return (
    <div className="App">
      <Header alt="bla" headline="blubb" color="yellow"/>
      <Video />
      <OpeningHours />
      <OrderMenue />
      <Footer/>
    </div>
  );
}

export default App;
