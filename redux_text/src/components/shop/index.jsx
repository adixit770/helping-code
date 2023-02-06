import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector,} from 'react-redux';
import { credit, debit } from '../../actions'

export default function Shop() {
  const dispatch = useDispatch();
  const state=useSelector((state)=>state.amount)

  return (<>
    <Button onClick={()=>{dispatch(debit(100))}}> debit </Button>
    <h1>remaining balance :- {state.value}</h1>
    <Button onClick={()=>{dispatch(credit(100))}}> credit</Button>
    </>)
}
