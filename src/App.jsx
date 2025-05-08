import { useState } from 'react';
import './Index.css';
import Form from './Form';
import BackgroundDesktop from './assets/images/BackgroundDesktop.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      color: "white",
backgroundImage: `url(${BackgroundDesktop})`
      }}>
   <Form /> 
    </div>
  )
}

export default App
