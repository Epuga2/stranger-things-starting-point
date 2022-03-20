import React, {useState} from 'react';

const MessageViewer = (props) => {
    const [user, setUser] = useState({})
    const [messages, setMessages] = useState('');

    const {messageId, messageContent, messageFromUser} = props
    return (
        <div>
         <div key = {messageId}>{`Message: ${messageContent}: from ${messageFromUser}`} </div>
    </div>
    )
}
export default MessageViewer;

{/* <MessageViewer messageId = {message._id} messageContent = {message.content} messageFromUser = {message.fromUser.username}/> */}