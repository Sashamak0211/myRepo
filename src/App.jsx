import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const newData = new Date();

  const viteElement = React.createElement(
    'a', 
    {
      href: "https://vite.dev",
      target: "_blank"
    },
    React.createElement('img', {
      src: viteLogo,
      className: "logo",
      alt: "Vite logo"
    })
  );

  const reactElement = React.createElement(
    'a', 
    {
      href: "https://react.dev",
      target: "_blank"
    },
    React.createElement('img', {
      src: reactLogo,
      className: "logo react",
      alt: "React logo"
    })
  );

  const containerLogo = React.createElement("div", null, viteElement, reactElement);
  const heading = React.createElement('h1', null, "Vite + React");
  
  const button = React.createElement(
    "button", 
    {
      onClick: () => setCount(count + 1)
    },
    `count is ${count}`
  );

  const codeParagraph = React.createElement(
    "p",
    null,
    "Edit ",
    React.createElement("code", null, "src/App.jsx"),
    " and save to test HMR"
  );

  const containerButton = React.createElement(
    "div",
    {className: "card"},
    button,
    codeParagraph
  );

  const infoParagraph = React.createElement(
    "p",
    null,
    "Click on the Vite and React logos to learn more"
  );

  const yearParagraph = React.createElement(
    "p",
    null,
    `${newData.getFullYear()}`
  );

  const containerYear = React.createElement(
    "div",
    {className: "nowData"},
    yearParagraph
  );

  return (
   <>
    
    {containerLogo}
    {heading}
    {containerButton}
    {infoParagraph}
    {containerYear}
    </>
  );
}

export default App;