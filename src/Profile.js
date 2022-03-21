import React, {useState, useEffect} from 'react';
import { seeMe } from './api';
import Edit from './Edit';
import Delete from './Delete';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import MessageViewer from './MessageViewer'


const Profile = ()  =>{
    const [viewMessages, setViewMessages] = useState(false);
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([]);
    const [messages, setMessages] = useState([])
    

    const createUser = async () => {
         console.log(user)
         console.log(posts)

    };

    const clickHandler = (event) => {
        setViewMessages(!viewMessages)
    }

    useEffect(async () => {
        const userObject = await seeMe();
        setUser(userObject);
        setPosts(userObject.data.posts)
        setMessages(userObject.data.messages)
    },[]);
    
    return(
        <div>
            {viewMessages? 
            <button onClick = {clickHandler}>Hide Messages</button> :
            <button onClick = {clickHandler}>View Messages</button>}
            
            {posts.map(post => 
                
                <div className = 'userPosts'key ={post._id}>
                    
                    <h2 className = 'ptitle'>{post.title}</h2>
                    <p className='pdescription'>Description: {post.description}</p>
                    <p className='pprice'>Price: {post.price}</p>
                    <p className='plocation'>Location: {post.location}</p>
                    <div> 
                        {viewMessages? post.messages.map(message => 
                        <MessageViewer key = {message._id} messageId = {message._id} messageContent = {message.content} messageFromUser = {message.fromUser.username}/>
                        ):<p></p>}
                    </div>
                    <p>{post.description}</p>

                    <Edit title = {post.title} description = {post.description} price = {post.price} location = {post.location}/>
                    <Delete id = {post._id} />
                </div>) }
                
            
            
        </div>
    )
};

export default Profile;


{/* <div>
          {posts.map((post) =>
                 <div  key={post._id}>
                     <div className='userPosts'>
                      <h2 className='ptitle'>{post.active ? ` ${post.title}` : "Deleted Post"}</h2>
                      <p className='pdescription'>Description: {post.description}</p>
                      <p className='pprice'>Price: {post.price}</p>
                      <p className='plocation'>Location: {post.location}</p>
                      <h3 className='pmessages'>Messages - {post.messages.length}</h3>
                      {post.messages.map(message => <div className='pallmessages' key = {message._id}>{`From ${message.fromUser.username}-- ${message.content} `} </div>)}
                      <Delete id = {post._id} />
                    </div>
                 </div>
          )}
    </div> */}