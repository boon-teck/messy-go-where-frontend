import React, { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import AllCases from './components/cases/AllCases';
import PendingCases from './components/cases/PendingCases';
import ClosedCases from './components/cases/ClosedCases';
import SingleCaseView from './components/cases/SingleCaseView';
import Navigation from './components/nav/Navigation';
import Registration from './components/auth/Registration';
import Login from './components/auth/Login';
import LandingPage from './components/main_pages/LandingPage';
import Home from './components/main_pages/Home';

import axios from "axios";
import EditProfile from "./components/auth/EditProfile"
import Cloudinary from './components/tests/Cloudinary';
import SubmitCase from './components/cases/SubmitCase';
import CaseProgressUser from './components/cases/CaseProgressUser';


function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [staff, setStaff] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [caseStatus, setCaseStatus] = useState("Pending")


  useEffect(()=>{

    //This function is to check if a user has logged in..
    async function setUserStats() {
      try {
        let {data} = await axios.get("/api/auth/user", {
          headers: {
            authorization: `Bearer ${localStorage.token}`
          }
        })
        setAuth(true)
        setUser(data.user)
      } catch (e) {
        setAuth(false)
        setUser(null)
        localStorage.removeItem("token")
      }
    }

    // This function is to check if user is a staff.
    async function setStaffStats(){
      try{

      }catch(e){
        setAuth(false);
        setStaff(false)
      }
    }

    // This function is to check if user is an Admin.
    async function setAdminStats(){
      try{

      }catch(e){
        setAuth(false);
        setAdmin(false)
      }
    }

    setUserStats()
    // setStaffStats()
    // setAdminStats()

  },[auth])

  function logout(){
    setAuth(false)
    setUser(null)
    localStorage.removeItem("token")
  }

  return (
    <BrowserRouter>
      {/** 
        Comment next line out and add proxy back 
        http://localhost:4004
      */}
      {/** 
        <Navigation user={user} logout={logout} /> 
       */}

      <Switch>
        {/** ------------------ */}
        {/** We can test codes using this route */}
        {/** Test starts here */}

        <Route path="/test" exact>
          <Cloudinary />
        </Route>

        {/** Testing ends here. */}
        {/** ------------------ */}

        <Route path="/" exact>
          <LandingPage />
        </Route>

        <Route path="/api/auth/login">
          <Login auth={auth} setAuth={setAuth} setUser={setUser}/>
        </Route>

        <Route path="/api/user/home" >
          <Home />
        </Route>

        <Route path="/api/auth/register"  >
          <Registration setAuth={setAuth}/>
        </Route>

        <Route path="/api/auth/profile" >
          <EditProfile auth={auth} setAuth={setAuth} user={user} setUser={setUser}/>

        </Route>

        <Route path="/edit/profile" >
          This will show edit profile page.
        </Route>

        {/** This route might not be needed as Home is already showing this component */}
        <Route path="/cases" exact>
          <AllCases />
        </Route>

        <Route path="/api/cases/pending" >
          <PendingCases />
        </Route>

        <Route path="/api/cases/pending/:id" >
          <SingleCaseView />
        </Route>

        <Route path="/api/cases/closed" >
          <ClosedCases />
        </Route>

        <Route path="/api/cases/closed/:id" >
          <SingleCaseView />
        </Route>

        <Route path="/user/case/progress" > {/** This is view individual updates */}
          <CaseProgressUser caseStatus={caseStatus} />
        </Route>

        <Route path="/api/case/update" >
          This will show admin/staff the case they are updating.
        </Route>


        <Route path="/case/submit" >
          <SubmitCase />
        </Route>

        <Route path="/kiv/redeem" >
          Redemption is current KIV.
        </Route>

        <Route path="/kiv/vouchers" >
          Voucher is current KIV.
        </Route>

        <Route path="*" >
          404
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

// function PrivateRouter({auth, Component, path, location, ...rest}) {
//   //if auth is true then show Route else redirect to login
//   return (
//       <>
//         {(auth) ?
//             <Route path={path} {...rest}>
//               <Component/>
//             </Route> : <Redirect to={{
//               pathname: "api/auth/login",
//               state: {from: location}
//             }}/>
//         }
//       </>
//   )
// }


export default App

