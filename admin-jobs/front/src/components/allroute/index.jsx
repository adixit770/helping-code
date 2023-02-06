import React from "react";
import Authentication from "../authentication";
import Candidates from "../candidates";
import MyResume from "../my_resume";
import PostJobs from "../Post_Job";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard";
import Login from "../login";
import JobGrid from "../myJob/jobgrid";
import JobList from "../myJob/joblist";
import Profile from "../profile";
import Recruiters from "../recruiters";
import Register from "../register";
import Setting from "../setting";
import MyTaskList from "../my_task_list";
import Page404 from "../page404";
import Verification from "../login/verification";
import Reset from "../login/reset_password";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/authentication" element={<Authentication />} />
      <Route path="/candidates" element={<Candidates />} />
      {/* <Route path="/myResume" element={<MyResume />} /> */}
      <Route path="/myTaskList" element={<MyTaskList />} />
      <Route path="/postJobs" element={<PostJobs />} />
      <Route path="/jobgrid" element={<JobGrid />} />
      <Route path="/joblist" element={<JobList />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/recruiters" element={<Recruiters />} />
      <Route path="/register" element={<Register />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/resetPassword/:id/:token" element={<Reset />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
export default AllRoutes;
