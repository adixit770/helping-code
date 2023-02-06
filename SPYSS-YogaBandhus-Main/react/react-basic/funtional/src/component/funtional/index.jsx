import React from 'react'
import { useState } from "react"
import {Button,Typography} from "@mui/material"
const FunctionalComponent=()=>{
const [counter,setcounter]=useState(0)
return(
    <div>
        <Button variant="contained"onClick={()=>setcounter(counter-1)}>-</Button>
        <Typography variant="h3" align='center'>{counter}</Typography>
        <Button variant="contained" onClick={()=>setcounter(counter+1)}>+</Button>
       
    </div>
)
}
export default FunctionalComponent;