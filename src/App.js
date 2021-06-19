import React, { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AllCases from './components/cases/AllCases';
import PendingCases from './components/cases/PendingCases';
import ClosedCases from './components/cases/ClosedCases';
import SingleCaseView from './components/cases/SingleCaseView';
import Navigation from './components/nav/Navigation';
import Registration from './components/auth/Registration';
import Login from './components/auth/Login';
import LandingPage from './components/main_pages/LandingPage';
import Home from './components/main_pages/Home';
import Cloudinary from './components/tests/Cloudinary';
import SubmitCase from './components/cases/SubmitCase';

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [staff, setStaff] = useState(false);
  const [admin, setAdmin] = useState(false);

  useEffect(()=>{

    //This function is to check if a user has logged in..
    async function setUserStats(){
      try{
        
      }catch(e){
        setAuth(false);
        setUser(null)
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


    async function setAdminStats(){
      try{

      }catch(e){
        setAuth(false);
        setAdmin(false)
      }
    }

    setUserStats()
    setStaffStats()
    setAdminStats()

  },[auth])
  
  function logout(){
    setAuth(false)
    setUser(null)

  }



  return (
    <BrowserRouter>
      <Navigation user={user} logout={logout} />

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

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/home" >
          <Home />
        </Route>

        <Route path="/registration" >
          <Registration />
        </Route>

        <Route path="/profile" >
          This will show profile page.
        </Route>
        
        <Route path="/edit/profile" >
          This will show edit profile page.
        </Route>

        <Route path="/cases" exact>
          <AllCases />
        </Route>

        <Route path="/cases/pending" >
          <PendingCases />
        </Route>

        <Route path="/cases/pending/:id" >
          <SingleCaseView />
        </Route>
        
        <Route path="/cases/closed" >
          <ClosedCases />
        </Route>

        <Route path="/cases/closed/:id" >
          <SingleCaseView />
        </Route>

        <Route path="/case/progress" >
          This will show the progress of a case to users.
        </Route>

        <Route path="/case/update" >
          This will show admin/staff the case they are updating.
        </Route>

        <Route path="/case/submit" >
          <SubmitCase />
        </Route>

        <Route path="/kiv/redeem" >
          Redemption is current KIV.
        </Route>

        <Route path="/voucher" >
          Voucher is current KIV.
        </Route>

        <Route path="*" >
          404
        </Route>
        
      </Switch>
    </BrowserRouter>
  )
}

export default App

