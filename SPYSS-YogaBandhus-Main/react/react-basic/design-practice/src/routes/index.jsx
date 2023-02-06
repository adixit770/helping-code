import { Route, Routes } from "react-router-dom";
import React from "react";
import TodoList from "../commponents/TodoList";
import About from "../commponents/About";
import MediaCard from "../commponents/Card";
import Notfound from "../commponents/Notfound";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/pricing/:id" element={<About />} />
      <Route path="/blog" element={<TodoList />} />
      <Route path="/" element={<MediaCard />} />
      <Route path='*' element={<Notfound />} />
    </Routes>
  );
};

export default AllRoutes;
