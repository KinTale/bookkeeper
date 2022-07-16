import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './component/header';
import Card from './component/card';
import Form from './component/form';


function App() {
  const [invoices, setInvoices] = useState()
  const [reset, setReset] = useState(0)

  const api = 'https://bookkeeper.codat.io'

  useEffect(() => {
    axios.get(api + '/invoices')
      .then(res => setInvoices(res.data))
      .catch(err => console.log(err))
  }, [reset])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Card invoices={invoices} />} />
        <Route path='/createinvoice' element={<Form setReset={setReset}/>} />
      </Routes>
    </div>

  );
}

export default App;
