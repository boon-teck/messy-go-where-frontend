import React, { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AllCases from './components/cases/AllCases';
import ClosedCases from './components/cases/ClosedCases';
import Navigation from './components/nav/Navigation';


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
      <Navigation />

      <Switch>
        <Route path="/" exact>
          This will show login page.
        </Route>

        <Route path="/home" >
          This will show home page.
        </Route>

        <Route path="/registration" >
          This will show registration page.
        </Route>

        <Route path="/landing" >
          This will show landing page.
        </Route>

        <Route path="/profile" >
          This will show profile page.
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
          This will show the submission page for users.
        </Route>

        <Route path="/kiv/redeem" >
          Redemption is current KIV.
        </Route>

        <Route path="/voucher" >
          Voucher is current KIV.
        </Route>
        
      </Switch>
    </BrowserRouter>
  )
}

export default App

