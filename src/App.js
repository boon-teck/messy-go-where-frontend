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
import Profile from "./components/auth/Profile";
import Cloudinary from './components/tests/Cloudinary';
import SubmitCase from './components/cases/SubmitCase';
import CaseProgressUser from './components/cases/CaseProgressUser';


function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  // const [staff, setStaff] = useState(false);
  // const [admin, setAdmin] = useState(false);
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
        console.log("App.js: ",data.user)
        setAuth(true)
        setUser(data.user)
      } catch (e) {
        setAuth(false)
        setUser(null)
        localStorage.removeItem("token")
      }
    }

    // // This function is to check if user is a staff.
    // async function setStaffStats(){
    //   try{
    //
    //   }catch(e){
    //     setAuth(false);
    //     setStaff(false)
    //   }
    // }
    //
    // // This function is to check if user is an Admin.
    // async function setAdminStats(){
    //   try{
    //
    //   }catch(e){
    //     setAuth(false);
    //     setAdmin(false)
    //   }
    // }
    //
    setUserStats()
    // // setStaffStats()
    // // setAdminStats()

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

        <Navigation auth={auth} user={user} logout={logout} />


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
          <Login setAuth={setAuth}/>
        </Route>

        <Route path="/api/auth/register"  >
          <Registration setAuth={setAuth}/>
        </Route>

        <PrivateRouter auth={auth} path="/user/home" Component={Home} exact/>
        <PrivateRouter auth={auth} path="/api/auth/profile" Component={Profile} setAuth={setAuth} user={user} setUser={setUser} exact />
        <PrivateRouter auth={auth} path="/cases" Component={AllCases} exact/>      {/** This route might not be needed as Home is already showing this component */}
        <PrivateRouter auth={auth} path="/api/cases/pending" Component={PendingCases} exact/>
        <PrivateRouter auth={auth} path="/api/cases/pending/:id" Component={SingleCaseView} exact/>
        <PrivateRouter auth={auth} path="/api/cases/closed" Component={ClosedCases} exact/>
        <PrivateRouter auth={auth} path="/api/cases/closed/:id" Component={SingleCaseView} exact/>
        <PrivateRouter auth={auth} path="/user/case/progress" Component={CaseProgressUser} caseStatus={caseStatus} exact/> {/** This is view individual updates */}
        {/*<PrivateRouter path="/api/case/update" Component={} exact/> /!**This will show admin/staff the case they are updating.**!/*/}
        <PrivateRouter auth={auth} path="/case/submit" Component={SubmitCase} setAuth={setAuth} user={user} exact/>
        {/*<PrivateRouter path="/kiv/redeem" Component={} exact/>   /!**Redemption is current KIV.**!/*/}
        {/*<PrivateRouter path="/kiv/vouchers" Component={} exact/> /!**Voucher is current KIV.**!/*/}

        <Route path="*" >
          404
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

function PrivateRouter({auth, Component, path, location, ...rest}) {
  //if auth is true then show Route else redirect to login
  return (
      <>
        {(auth) ?
            <Route path={path} >
              <Component {...rest}/>
            </Route> : <Redirect to={{
              pathname: "/api/auth/login",
              state: {from: location}
            }}/>
        }
      </>
  )
}


export default App

