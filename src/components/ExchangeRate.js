import React, { useState, useEffect } from 'react';

const ExchangeRate = () => {
  const [usd, setUsd] = useState("");
  const [eur, setEur] = useState("");
  const [rub, setRub] = useState("");

  useEffect(() => {
    // Fetch user data for 10 users
    const fetchCurrency = async () => {
      try {
        const response = await fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_GkThSV6BbXtkpby3e7XmOGYf28nzrRX98ana4VVZ');
        const data = await response.json();
        setUsd(data.data.USD.toFixed(2))
        setEur(data.data.EUR.toFixed(2))
        setRub(data.data.RUB.toFixed(2))
        console.log(data)
        
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchCurrency();
  }, []);

  return (
    <div>
      <h1>global currencys</h1>
      <h1>USD: {usd}</h1>
      <h1>EUR: {eur}</h1>
      <h1>RUB: {rub}</h1>
    
    </div>
  );
};

export default ExchangeRate;
