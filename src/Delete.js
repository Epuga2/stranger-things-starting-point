import React from 'react';
import {deletePost} from './api';


const Delete = (props) =>{
    const {id} = props;
    const handleDelete = () =>{
        deletePost(id);
        
    } 
    return(
            <div className = 'deleter'>
                <button className = 'deleteButton'onClick = {handleDelete}>Delete</button>
            </div>

)};

export default Delete;


// export const deletePost = async (id) => {
//     const url = `${baseurl}/posts/POST_ID/${id}`;
//     try{
//         const response = await fetch (url,{
//             method: "DELETE",
//             headers:makeHeaders()
//         })
//         const json = await response.json();
//         return json;
//     }
//     catch(error){
//         console.error(error);
//     }
// };