import "./App.css";
import React from "react";
import Business from "./components/business";
import People from "./components/people";
import News from "./components/news";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Jobs from "./components/jobs";
import About from "./components/about";
import ContactUs from "./components/contact_us";
import TermsCondition from "./components/terms_condition";
import PrivacyPolicy from "./components/privacy_policy";
import Career from "./components/career";
import CreateOption from "./components/create_option";
import CreateUser from "./components/create_user";
import RegisterCompany from "./components/register_company";
import Dashboard from "./components/dashboard";
import NewsDetails from "./components/news/indexdetails";
import Profile from "./components/profile";
import Connection from "./components/connection";
import Group from "./components/group";
import CompanyProfile from "./components/companyprofile";
import UserProfile from "./components/userprofile";
import Notification from "./components/notification";
import ManageSettings from "./components/managesettings";
import Bookmarks from "./components/bookmarks";
// import PostDetails from "./components/postdetails";
// import ResetPassword from "./components/resetpassword";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route index element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/people" element={<People />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsDetails" element={<NewsDetails/>} />
          <Route path="/jobs" element={<Jobs/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/contactUs" element={<ContactUs/>} />
          <Route path="/termscondition" element={<TermsCondition/>} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy/>} />
          <Route path="/career" element={<Career/>} />
          <Route exact path="/createOption" element={<CreateOption/>} />
          <Route path="/CreateUser" element={<CreateUser/>} />
          <Route path="/RegisterCompany" element={<RegisterCompany/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/connection" element={<Connection/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/group" element={<Group/>} />
          <Route path="/companyprofile" element={<CompanyProfile/>} />
          <Route path="/userprofile" element={<UserProfile/>} />
          <Route path="/notification" element={<Notification/>} />
          <Route path="/managesettings" element={<ManageSettings/>} />
          <Route path="/bookmarks" element={<Bookmarks/>} />
          {/* <Route path="/postdetails" element={ <PostDetails/>} />  */}
          {/* <Route path="/resetpassword" element={<ResetPassword/>} /> */}
        </Routes>
      
      </BrowserRouter>
 

    </div>
  );
}

export default App;
