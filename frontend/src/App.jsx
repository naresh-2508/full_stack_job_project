import React,{useEffect,useContext} from "react";
import './App.css';
import {Context} from './main';
import { BrowserRouter as Router,Routes,Route, Navigate } from "react-router-dom";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import Navbar from "./component/Layout/Navbar";
import Footer from "./component/Layout/Footer";
import Jobs from "./component/Job/Jobs";
import JobDetails from "./component/Job/JobDetails";
import MyJobs from "./component/Job/MyJobs";
import PostJob from "./component/Job/PostJob";
import Application from "./component/Application/Application";
import MyApplications from "./component/Application/MyApplications";
import NotFound from './component/NotFound/NotFound'
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Home from "./component/Home/Home"


const App = ()=> {
   const {isAuthorized,setIsAuthorized,setUser}=useContext(Context);
 
   useEffect(()=>{
     const fetchUser=async()=>{
       
       try{
        const  response=await axios.get("http://localhost:4000/api/v1/user/getuser",{withCredentials:true});
        setUser(response.data.user);
        setIsAuthorized(true);
       }catch(error){
         setIsAuthorized(false);
       }
     }
     fetchUser();
   },[isAuthorized]);

 

  return (
    <>
     <Router>
         <Navbar/>
         <Routes>
           <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path="/" element={<Home/>}/>
           <Route path="/job/getall" element={<Jobs/>}/>
           <Route path="/job/:id" element={<JobDetails/>}/>
           <Route path="/job/post" element={<PostJob/>}/>
           <Route path="/job/me" element={<MyJobs/>}/>
           <Route path="/applications/:id" element={<Application/>}/>
           <Route path="/applications/me" element={<MyApplications/>}/>
           <Route path="*" element={<NotFound/>}/>
         </Routes>
         <Footer/>
         <Toaster/>
     </Router>
    </>
  )
}

export default App
