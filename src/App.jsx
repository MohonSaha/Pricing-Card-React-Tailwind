import React from 'react';
import Navbar from './components/Navbar/Navbar';
import PriceList from './components/PriceList/PriceList';
import Dasboard from './components/Dasboard/Dasboard';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Dasboard></Dasboard>
    </div>
  );
};

export default App;