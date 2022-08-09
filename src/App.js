import { useState } from 'react';
import './app.css';

function App() {
  const [data, setData] = useState(null)

  return (
    <div className="app">
      <header className="content">
        <p data-qa="title">Quotez</p>
        <button data-qa="trigger" onClick={() => {
          setData(null)
          fetch('/random-quote').then(r => r.json()).then(setData)
        }}>
          Hit me
        </button>
        {data ? <p data-qa="content" className="quote">{`${data.quote} by ${data.author}`}</p> : <p data-qa="content-empty">...</p>}
      </header>
    </div>
  )
}

export default App;
