import React, {useState} from 'react';
import {createMessage} from './api';

const Message = (props) =>{
    const {id} = props;
    const [textField, setTextField]= useState(false);
    const [message,setMessage] = useState('');

    const messageHandler = () =>{
        setTextField(true);
    }

    const sendMessageHandler = (event) => {
                event.preventDefault();
                setTextField(false);
                createMessage(id,message);
                setMessage('')
    }

    const updateMessage = (event)=>{
        setMessage(event.target.value);

    }
    return(
    <div className = 'messageButton'>

        {textField ?
         <form onSubmit = {sendMessageHandler}>
             <input type ="text" placeholder = "Message..." value = {message} onChange = {updateMessage}/>
             <button className = 'mssButton'>Send Message</button>
         </form>
        : <button  className = 'mssButton'onClick = {messageHandler}> Message </button> }

    </div>
    )};

export default Message;

