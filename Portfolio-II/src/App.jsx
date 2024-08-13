
import './App.css'
import AddTransaction from './components/Add'
import { useState } from 'react';

function App() {
  const [transactions, setTransactions] = useState([]);
  
  return (
    <>
    <div className="container"> 
      <AddTransaction/>
    </div>
     
    </>
  );
}

export default App
