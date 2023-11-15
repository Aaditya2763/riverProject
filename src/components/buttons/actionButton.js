import React from 'react'
import './actionButton.css'

const ActionButton = ({increamentHandler,decreamentHandler}) => {
  return (
    <div className='actionBtn'>
<button className='Btn' onClick={increamentHandler}>+</button>
<button className='Btn' onClick={decreamentHandler}>-</button>
    </div>
  )
}

export default ActionButton