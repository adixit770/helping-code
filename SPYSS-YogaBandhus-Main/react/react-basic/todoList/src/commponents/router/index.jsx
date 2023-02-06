import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MediaCard from '../Card'
import Home from '../Home'
import TodoList from '../TodoList'




export default function Routeing() {
  return (
    <>

    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/todo" element={<TodoList/>} />
    <Route path="/card" element={<MediaCard/>} />
    </Routes>
    </>
  )
}
