import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/4CEvM8H8u')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          {!data ? (
            'Loading...'
          ) : (
            <a href={data} target='_blank' rel='noreferrer'>
              {data}
            </a>
          )}
        </p>
      </header>
    </div>
  );
}

export default App;
