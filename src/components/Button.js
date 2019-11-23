export default function Button() {
  return (
    <div className='FormSubmit'>
      <button
        className='FormSubmit-Button'
        onClick={onClickSubmit}
        disabled={!firstNameState.value || !lastNameState.value || !diet}
      >
        Continue
      </button>
    </div>
  )
}
