
import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import RegisterForm from "./RegisterForm";
import Login from './Login';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HandleLogout from './HandleLogout';
import PageTabs from './PageTabs';
import Profile from './Profile';
import './styles.css'
import Edit from './Edit';
import MessageViewer from './MessageViewer'



const App = () => {
  const [userUsing] = useState(localStorage.getItem("userUsing"))
  const [isLoggedIn,setIsLoggedIn] = useState(false);


  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"))
}, []);
  
  
  return (


<div className="main">
    <Router>
    <PageTabs isLoggedIn = {isLoggedIn}/>
      <div className="welcomeAndLog">
        <h1 className="welcome">Welcome, {isLoggedIn ? userUsing : "please sign in."}</h1>
        <HandleLogout isLoggedIn= {isLoggedIn} setIsLoggedIn= {setIsLoggedIn}/>
      </div>
      <Switch>
      <Route path= "/Profile">
          <Profile/>
        </Route>

        <Route path= "/login">
          <Login isLoggedIn= {isLoggedIn} setIsLoggedIn= {setIsLoggedIn}/>
        </Route>
        <Route exact path= "/">
          <div>
            <PostList isLoggedIn= {isLoggedIn} setIsLoggedIn= {setIsLoggedIn} />
          </div>
        </Route>
          <Route exact path= "/PostList">
        </Route>
        <Route exact path= "/RegisterForm">
          <RegisterForm/>
        </Route>
        <Route exact path= "/Create">
          <Create/>
        </Route>
        <Route exact path= "/edit">
          <Edit />
        </Route>
        <Route exact path= "/MessageViewer">
          <MessageViewer />
          </Route>
      </Switch>
    </Router>
</div>








  );
}

export default hot(App);
