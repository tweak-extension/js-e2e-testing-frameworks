import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null)

  return (
    <div className="app">
      <header className="content">
        <p>Quotez</p>
        <button onClick={() => {
          setData(null)
          fetch('/random-quote').then(r => r.json()).then(setData)
        }}>
          Hit me
        </button>
        {data ? <p className="quote">{`${data.quote} by ${data.author}`}</p> : <p>...</p>}
      </header>
    </div>
  );
}

export default App;
