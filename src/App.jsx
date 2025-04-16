import React, { useRef } from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import clickSound from './assets/bip.mp3';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const newData = new Date();
  const audioRef = useRef(null);

  const clickButton = () => {
    setCount(count + 1);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return React.createElement(
    'div',
    null,
    
    React.createElement(
      'div',
      null,
      React.createElement(
        'a',
        { href: 'https://vite.dev', target: '_blank' },
        React.createElement('img', {
          src: viteLogo,
          className: 'logo',
          alt: 'Vite logo',
        })
      ),
      React.createElement(
        'a',
        { href: 'https://react.dev', target: '_blank' },
        React.createElement('img', {
          src: reactLogo,
          className: 'logo react',
          alt: 'React logo',
        })
      )
    ), 
    React.createElement('h1', null, 'Vite + React'),
    
    React.createElement(
      'button',
      {
        onClick: clickButton,
      },
      `count is ${count}`
    ),
    
    React.createElement(
      'p',
      null,
      'Edit ',
      React.createElement('code', null, 'src/App.jsx'),
      ' and save to test HMR'
    ),
   
    React.createElement(
      'div',
      { className: 'card' },
      React.createElement(
        'button',
        { onClick: clickButton },
        `count is ${count}`
      )
    ),
    
    React.createElement(
      'p',
      null,
      'Click on the Vite and React logos to learn more'
    ),
    
    React.createElement(
      'p',
      null,
      `${newData.getFullYear()}`
    ),
   
    React.createElement(
      'div',
      { className: 'nowData' },
      React.createElement(
        'p',
        null,
        `${newData.getFullYear()}`
      )
    ),
    
    React.createElement('audio', {
      ref: audioRef,
      src: clickSound,
      preload: 'auto',
      hidden: true,
    })
  ); 
} 

export default App;