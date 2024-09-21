import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './components/Main';
import TopHeder from './components/TopHeder';

import Overview from './sidemenus/Overview';   
import Performance from './sidemenus/Performance'; 
import OnlyCards from './sidemenus/OnlyCards'; 
import Products from './sidemenus/Products';    
import Transaction from './sidemenus/Transactions'; 
import Charts from './sidemenus/Charts';       
import Settings from './sidemenus/Settings';

function Sidebars() {
  const location = useLocation();
  const showMain = ![
    '/transaction',
    '/overview',
    '/onlycards',
    '/products',
    '/performance',
    '/charts',
    '/settings'
  ].includes(location.pathname);

  return (
    <>
      <TopHeder />
      <Header />
      <SideBar />
      {showMain && <Main />}
    </>
  );
}

function App() {
  return (
    <Router>
      < Sidebars />
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/onlycards" element={<OnlyCards />} />
        <Route path="/products" element={<Products />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
