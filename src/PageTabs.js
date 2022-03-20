import React from 'react';
import './Login'
import './PostList'
import './RegisterForm'
import './Create'
import '/'
import { Switch } from 'react-router-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

const PageTabs = (props) => {
    const {isLoggedIn} = props
return (
<div>
        <div className='links'>
            <h1 className='pgLinkHead'>Very Strange Things</h1>
            <Link to='/' className='pgLink'>Home</Link>
            {isLoggedIn?<></>:<Link to='/login' className='pgLink'>login</Link>}
            {isLoggedIn?<></>:<Link to='/RegisterForm' className='pgLink'>Sign up</Link>}
            <Link to='/Create'className='pgLink'>Create Post</Link>
            <Link to='/Profile' className='pgLink'>Profile Page</Link>
        </div>
    </div>
)
}
export default PageTabs;