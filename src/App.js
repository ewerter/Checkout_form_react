import React from 'react'
import './App.css'
import BasicInfo from './components/basicInfo'
import AddressInfo from './components/AddressInfo'
import Payment from './components/Payment'

function App() {
  const [step, setStep] = React.useState(1);
  const basicInfoNextStep = ({firstName, lastName, diet}) => {
    setStep(2)
    setFirebaseData({...firebaseData, firstName,lastName,diet})
  }

  const addressInfoNextStep = ({city, province}) => {
    setStep(3)
    setFirebaseData({...firebaseData, city, province})

  }
  
  const paymentInfoNextStep = ({termsAgreed, payment}) => {
    setStep(4)
    setFirebaseData({...firebaseData, payment ,termsAgreed})

  }

  const [firebaseData, setFirebaseData] = React.useState({});

  let Content = <BasicInfo nextStep={basicInfoNextStep} />

  switch(step){
      case 1: Content = (<BasicInfo nextStep={basicInfoNextStep} />)
        break;
      case 2: Content = (<AddressInfo nextStep={addressInfoNextStep} />)
        break;
      case 3: Content = (<Payment nextStep={paymentInfoNextStep} />)
        break;
      default: Content = (null)
        break;
    }

  return (
    <div className='App'>
      <div className='App-Title'>Checkout Form
      </div>
      <div>
      {Content}
      </div>
    </div>
  )
}

export default App
