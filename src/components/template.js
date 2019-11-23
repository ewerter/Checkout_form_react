import './template.css'
import React from 'react'

export default function template({ label }) {
  return (
    <div className='ErrorMessage'>
      <div className='ErrorMessage-Text'>{label}</div>
    </div>
  )
}
