import React from 'react'
import './BasicInfo.css'
import ErrorMessage from './ErrorMessage'

export function FormField({ children }) {
    return <div className='FormField'>{children}</div>
  }

  export function FormFieldLabel({ children, type }) {
    let className = 'FormField-Label'
    if (type === 'radio') {
      className += ' FormField-Label__Radio'
    }
    return <label className={className}>{children}</label>
  }

  export  function FormFieldLabelText({ children, type }) {
    let className = 'FormField-LabelText'
    if (type === 'radio') {
      className += ' FormField-LabelText__Radio'
    }
    return <span className={className}>{children}</span>
  }

  export  function TextInputField({ placeholder, value, onChange, errorMessageLabel }) {
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
