import React from 'react'
import {Button, Typography} from '@mui/material'
import { NavLink } from 'react-router-dom'
import Navbar from '../navbar'
import Form from '../form'
export default function Welcome() {
  return (
   <>
   <Navbar/>
   <div>
    <Typography variant="h1" color={'red'} >Welcome All</Typography>
          <NavLink to={"/home"}>
            <Button variant="outlined" color="info">
              Get Strated
            </Button>
          </NavLink>

   </div>
   <Form/>
   </>
  )
}
