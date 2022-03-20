import React, {useState} from "react";
import { loginUser } from "./api";

const Login = (props) => {
    const {isLoggedIn, setIsLoggedIn} = props;
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');



    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            user: {
              username: userName,
              password: password
            }
          }
          console.log(localStorage.getItem('userUsing'))
        await loginUser(user);
        setIsLoggedIn(localStorage.getItem("token") ? true : false)
        localStorage.setItem("userUsing", userName)
        setUserName('');
        setPassword('');
    }
    const updateUserName = (event) => {
        setUserName(event.target.value)
    }
    const updatePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div>
        <form className = "loginer" onSubmit={handleSubmit}>
            <input className = 'loginbar'style={isLoggedIn ? {display: "none"} : {display: "inline"}} placeholder = "Login username" value = {userName}
            type = 'text' onChange={updateUserName} />
            <input className = 'loginbar' style={isLoggedIn ? {display: "none"} : {display: "inline"}} placeholder = "Login password" value = {password}
            type = 'password' onChange={updatePassword}/>
            <button className = "searchBarButton" style={isLoggedIn ? {display: "none"} : {display: "inline"}}>Login</button>
        </form>

        </div>
    )
}
export default Login;