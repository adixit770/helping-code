import React from 'react'
import displayPay from '../paymentGateway'

export default function CourseCard() {
 
  return (
    <div>
        <h1>Payment Gatway</h1>
        <button type="button" onClick={displayPay} className='paymentButton'>buy</button>
    </div>
  )
}
