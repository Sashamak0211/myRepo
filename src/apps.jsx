import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const newData = new Date()

const viteLogo = React.createElement(
    'a', {
        href:"https://vite.dev",
        target: "_blank",

    },
    React.createElement('img', {
        src: {viteLogo},
        className: "logo",
        alt: "Vite logo"
    })
    );

const reactLogo = reactLogo.createElement('a', {
        href: "https://react.dev",
        target: "_blank"
    },

    React.createElement('img', {
        src: {reactLogo},
        className: "logo react",
        alt: "React logo"
    }));
    
    const contanierLogo = React.createElement("div", null, viteLogo, reactLogo);
    
    const headingText = "Vite + React" ;
    
    
    const createh = React.createElement('h1' ,
        headingText
    );

    const buttonProps = {onClick: () => setCount((count) => count +1)};

    const buttonText = "count is {count}"

    const creaeteButton = React.createElement(
    "button", 
    buttonProps,
    buttonText);

    const createCode = React.createElement(
    "code",
    src/App.jsx
    );
    const createCodeP = React.createElement(
        "p",
        "Edit",
        createCode,
        "and save to test HMR"
    );


    const contanierButton = React.createElemen("div",   
        {className: "card"},
        creaeteButton,
        createCodeP
     );
    
     const createTextP = "Click on the Vite and React logos to learn more"
     
     const createClickP = React.createElement(
        "p",
        createTextP
     );

     const textYearP = "`${newData.getFullYear()}`";
     const createYearP = React.createElement(
        "p",
        textYearP
     );

     const contanierYear = React.createElement(
        "div",
        {className: "nowData"},
        createYearP,
        
     )





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     
     
  )
}

export default App
