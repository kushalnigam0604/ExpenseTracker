import './App.css';
import React , {useState} from 'react';
import Navbar from './components/Navbar';
import Transaction from './components/Transaction';
import Home from './components/Home';
import History from './components/History';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useSelector } from 'react-redux';



function App() {

  const storeAmount = useSelector(state => state.storeAmount)
  const [amount, setAmount] = useState(0);

  const [listOfTransaction, setlistOfTransaction] = useState([
    {
      typeOfTransaction: "Add/Withdraw",
      balance: amount,
      amount: 0,

    }
  ]);
  

   const addMoney = (value)=> {
    let total = Number(amount)+Number(value)
    setAmount(total);
    
    setlistOfTransaction([...listOfTransaction,{
      typeOfTransaction: "Add",
      balance: total,
      amount: value,

    }]);
  }
  const withdrawMoney = (value)=> {
    if(Number(amount)>=Number(value)){
      let total = Number(amount)-Number(value)

      setAmount(total);
    
      setlistOfTransaction([...listOfTransaction,{
        typeOfTransaction: "Withdraw",
        balance: total,
        amount: value,
      }])
    }
    else{
      console.log('value is greater');
    }
  }

  return (
    <>
    <Router>
      <Navbar title='Wallet Tracker'/>
        <Routes>
          <Route path='/' element={<Home amount={amount} storeAmount={storeAmount} />}/>
          <Route path="/transaction" element={<Transaction amount={amount} Add={addMoney} Withdraw={withdrawMoney} storeAmount={storeAmount} />}/>
          <Route path="/history" element={<History listOfTransaction={listOfTransaction}/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
