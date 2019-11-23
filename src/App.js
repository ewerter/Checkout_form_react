import React from 'react'
import './App.css'
import BasicInfo from './components/basicInfo'
import AddressInfo from './components/AddressInfo'
import Payment from './components/Payment'

function App() {
  
  return (
    <div className='App'>
      <div className='App-Title'>Checkout Form
      </div>
      <div>
      <BasicInfo  />
      <AddressInfo />
      <Payment />
      </div>
    </div>
  )
}

export default App
