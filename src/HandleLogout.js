import React from 'react';

const HandleLogout = (props) => {
    const {isLoggedIn, setIsLoggedIn} = props;
    console.log(isLoggedIn)
    const loggingOut = (event) => {
    event.preventDefault();
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    localStorage.removeItem("userUsing")
}
  return (
        <div className ='logInPhrase'>
            <form onSubmit={loggingOut}>
                <button className = 'logoutButton' style={!isLoggedIn ? {display: "none"} : {display: "inline"}}>Log Out</button>
            </form>
            <h3>Your <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in. </h3>
        </div>
    )
}
export default HandleLogout;