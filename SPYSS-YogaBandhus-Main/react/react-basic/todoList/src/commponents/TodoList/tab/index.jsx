import { Button } from '@mui/material'
import React from 'react'

export default function Tab({changeTab,active}) {
  return (
    <>
    <div onClick={()=>changeTab(1)}><Button variant={active===1?"contained":"outlined"}>TodoList</Button></div>
    <div onClick={()=>changeTab(2)}><Button variant={active===2?"contained":"outlined"}>CompleteList</Button></div>
    <div onClick={()=>changeTab(3)}><Button variant={active===3?"contained":"outlined"}>ALL list</Button></div>

    </>
  )
}
