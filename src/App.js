import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 
import ReactDOM from 'react-dom';
import { FaHome } from "react-icons/fa";

import { RiAdminFill } from "react-icons/ri";
import { MdOutlineWorkHistory } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage.js'; // Assuming this is the correct path and component name
import WalletPage from './WalletPage.js';
import AccountStatsPage from './AccountStatsPage.js';
import HistoryPage from './HistoryPage.js';
// Define the ForexRates component outside of the App component
const ForexRates = () => {
  const API_KEY = '50e791dfde810e466c5c7b4ac915ce6b';
  const [forexData, setForexData] = useState({});
  const [symbols, setSymbols] = useState({});
  const [historicalRates, setHistoricalRates] = useState({});
  const [conversion, setConversion] = useState({});
  const [timeframeData, setTimeframeData] = useState({});
  const [changeData, setChangeData] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch latest forex rates
        const ratesResponse = await axios.get(`https://api.forexrateapi.com/v1/latest?api_key=${API_KEY}`);
        setForexData(ratesResponse.data);

        // Fetch symbols
        const symbolsResponse = await axios.get(`https://api.forexrateapi.com/v1/symbols?api_key=${API_KEY}`);
        setSymbols(symbolsResponse.data);

        // Fetch historical rates
        const historicalRatesResponse = await axios.get(`https://api.forexrateapi.com/v1/2021-03-24?api_key=${API_KEY}&base=USD&currencies=EUR,JPY,INR`);
        setHistoricalRates(historicalRatesResponse.data);

        // Fetch conversion rate
        const conversionResponse = await axios.get(`https://api.forexrateapi.com/v1/convert?api_key=${API_KEY}&from=USD&to=EUR&amount=100&date=2021-04-23`);
        setConversion(conversionResponse.data);

        // Fetch timeframe data
        const timeframeResponse = await axios.get(`https://api.forexrateapi.com/v1/timeframe?api_key=${API_KEY}&start_date=2021-04-22&end_date=2021-04-23&base=USD&currencies=EUR,JPY,INR`);
        setTimeframeData(timeframeResponse.data);

        // Fetch change data
        const changeResponse = await axios.get(`https://api.forexrateapi.com/v1/change?api_key=${API_KEY}&start_date=2021-04-22&end_date=2021-04-23&base=USD&currencies=EUR`);
        setChangeData(changeResponse.data);

      } catch (error) {
        setError('Error fetching data: ' + error.message);
      }
    };

    fetchData();
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <div className="displaycontainer">
          <header className="app-header">
            {/* Your top header content */}
          </header>
          
          <div className="main-content">
           
          </div>

          {/* ... other components ... */}

          <nav className="bottom-nav">
            <Link to="/" className="stats-item">Home <FaHome /></Link>
            <Link to="/wallet" className="stats-item"> Wallet <FaWallet /> </Link>
            <Link to="/history" className="stats-item">
               History <MdOutlineWorkHistory/>
            </Link>
            <Link to="/account-stats" className="stats-item">
               Account Stats <RiAdminFill />
            </Link>
          </nav>
        </div>
      </div>
    </BrowserRouter>
   
  );
};


function App() {
  return (
    <div className="app">
      <ForexRates />
    </div>
  );
}

export default App;
