import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <ul>
          <li>
            <Link className='App-link' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='App-link' to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link className='App-link' to='/movies'>
              Movies
            </Link>
          </li>
        </ul>
      </header>
      <main className='App-main'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
