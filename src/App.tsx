import { useState } from 'react';
import './App.css'
import Card from './components/Card/Card';
import user from './mock/user.json';


function App() {

  const [siguiendo, setSiguiendo ] = useState(user.sigiendo);

  const name = user.name;
  const sigiendo = siguiendo;
  const texto = user.text;


  return (
    <Card name={name} sigiendo={sigiendo} texto={texto} setSiguiendo={setSiguiendo}/>    
  )
}

export default App
