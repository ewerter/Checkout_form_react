import React from 'react'
import './Forms'
import ErrorMessage from './ErrorMessage'
import './AddressInfo.css'

export default function AddressInfo({nextStep}) {
  const [city, setCity] = React.useState('')
  const onChangeCity = event => {
    setCity(event.target.value)
  }

  const [province, setProvince] = React.useState('ontario')
  const onChangeProvince = event => {
      setProvince(event.target.value)
      console.log(event.target.value)
  }
  function FormField({ children }) {
    return <div className='FormField'>{children}</div>
  }

  function FormFieldLabel({ children, type }) {
    let className = 'FormField-Label'
    if (type === 'radio') {
      className += ' FormField-Label__Radio'
    }
    return <label className={className}>{children}</label>
  }

  function FormFieldLabelText({ children, type }) {
    let className = 'FormField-LabelText'
    if (type === 'radio') {
      className += ' FormField-LabelText__Radio'
    }
    return <span className={className}>{children}</span>
  }

  function TextInputField({ placeholder, value, onChange, errorMessageLabel }) {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasFocusedOnce, setHasFocusedOnce] = React.useState(false)

    const onFocus = () => {
      setIsFocused(true)
      setHasFocusedOnce(true)
    }

    const onBlur = () => setIsFocused(false)

    return (
      <div>
        <input
          className='FormField-Input FormField-Input__Text'
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {hasFocusedOnce && !isFocused && !value && (
          <ErrorMessage label={errorMessageLabel} />
        )}
      </div>
    )
  }
  
  return (
    <div>
      <h3>Address Info</h3>

      <FormField>
        <FormFieldLabel>
          <FormFieldLabelText><spam className='FormField-Heading'>City</spam></FormFieldLabelText>
          <TextInputField
            placeholder='Enter your city'
            value={city}
            onChange={onChangeCity}
            errorMessageLabel='City required'
          />
        </FormFieldLabel>
      </FormField>

      <FormField>
        <FormFieldLabel>
          <FormFieldLabelText><spam className='FormField-Heading'>Province</spam></FormFieldLabelText>
            <select onChange={onChangeProvince} value={province}>
                <option value="AB">Alberta</option>
                <option value="BC">British Columbia</option>
                <option value="MB">Manitoba</option>
                <option value="NB">New Brunswick</option>
                <option value="NL">Newfoundland and Labrador</option>
                <option value="NS">Nova Scotia</option>
                <option value="NT">Northwest Territories</option>
                <option value="NU">Nunavut</option>
                <option value="ON">Ontario</option>
                <option value="PE">Prince Edward Island</option>
                <option value="QC">Quebec</option>
                <option value="SK">Saskatchewan</option>
                <option value="YT">Yukon</option>
            </select> 
        </FormFieldLabel>
      </FormField>

      <div className='FormSubmit'>
      <button
        className='FormSubmit-Button'
        onClick={() => nextStep({ city: city, province: province })}
        disabled={!city || !province}
      >
        Continue
      </button>
    </div>
    </div>
  )
}
