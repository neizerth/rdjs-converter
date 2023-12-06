import logo from './logo.svg';
import './App.css';
import { Converter } from './Converter';
import { useEffect, useState } from 'react';

function App() {
  const [rate, setRate] = useState(0); 
  const url = 'https://www.cbr-xml-daily.ru/latest.js';
  
  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(({ rates }) => {
        const { USD } = rates;
        setRate(1/USD);
      });
  }, []);

  return (
    <div className="App">
      {rate ? <Converter rate={rate}/> : 'Загрузка...'}
    </div>
  );
}

export default App;
