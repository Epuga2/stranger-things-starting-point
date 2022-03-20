import React, { useState } from 'react';
import { registerUser, testAuthentication } from './api';


const RegisterForm = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password === passwordConfirmation){
        const Creds = {
            user: {
                username: userName,
                password: password
            }
        }         
        await registerUser(Creds);
        await testAuthentication(Creds)
        setUserName('');
        setPassword('');
        setPasswordConfirmation('');
        }
        else{
            setPassword('');
            setPasswordConfirmation(''); 
            console.log("passwrong")           
        }
    }    
    const updateUserName = (event) => {
        setUserName(event.target.value);
    }
    const updatePassword = (event) => {
        setPassword(event.target.value);
    }
    const updatePasswordConfirmation = (event) => {
        setPasswordConfirmation(event.target.value);
    }

    return(
        <div>
            <form className='regForm' onSubmit={handleSubmit}>
                <input className='regin' placeholder = "New username" value = {userName}
                type = 'text' onChange={updateUserName} />
                <input className='regin' placeholder = "New password" value = {password}
                type = 'password' onChange={updatePassword}/>
                <input className='regin' placeholder = "confirm new password" value = {passwordConfirmation}
                type = 'password' onChange={updatePasswordConfirmation} />
                <button className='regsub'>Submit</button>
            </form>
        </div>
    
        
)}

export default RegisterForm;