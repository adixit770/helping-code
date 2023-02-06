import { Route, Routes } from "react-router-dom"
import AllBlogs from "../components/AllBlogs"
import CardDetails from "../components/CardDetails"
import Home from "../components/Home"
import Welcome from "../components/Welcome"

const AllRoutes =()=>{
    return (
        <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/blog" element={<AllBlogs/>}/>
            <Route path="/user/:id" element={<CardDetails/>}/>
            <Route path="*" element={<h1>No match found</h1>}/>
        </Routes>
    )
}
export default AllRoutes