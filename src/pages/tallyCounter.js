import React, { Fragment } from 'react'
import "./tallyCounter.css"
import Title from '../components/title/title'
import InputBox from '../components/input/input'
import ActionButton from '../components/buttons/actionButton'
const TallyCounter = () => {
  return (
    <Fragment>
         <div className='Box'>
       <Title/>
       
      <InputBox/>
      <div className='buttons'>
      <ActionButton/>
     <button className='resetButton'>Reset</button>
     <button className='customButton'>Enter custom value</button>
     <button className='titlereplaceButton'>Change calculator Name</button>
     <button className='addCalButton'>Add another calculator</button>
      </div>
      
       </div>
    </Fragment>
  )
}

export default TallyCounter