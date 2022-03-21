import React, { useState } from 'react';
import {editPost} from './api'

const Edit = (props) =>{
   const {title, description, price, location} = props;
   const [isForm,setIsForm] = useState(false)
   const [editTitle,setEditTitle] = useState(title);
   const [editDescription,setEditDescription] = useState(description);
   const [editPrice, setEditPrice] = useState(price);
   const [editLocation, setEditLocation]  = useState(location);


   const createPostObject = (title_, description_, price_, location_) => {

    return {
        title: title_,
        description: description_,
        price: price_,
        location: location_
    }
  
};
    const clickEdit  = () =>{
        console.log(title,price,description,location)
        setIsForm(!isForm);
};
    const updateTitle = (event) =>{
        setEditTitle(event.target.value)
};

    const updateDescription = (event) =>{
        setEditDescription(event.target.value)
};
    const updatePrice = (event) => {
        setEditPrice(event.target.value)
}
    const updateLocation = (event) => {
        setEditLocation(event.target.value)
}

    return(
        <div>
            {isForm? <p>form</p>:<button className = "deleter" onClick = {clickEdit}>Edit</button> }
        </div>
    )

}

export default Edit;

// export const editPost = async (postObject, id) =>{
//     const url = `${baseurl}/posts/${id}`;
//     try{
//         const response = await fetch(url, {
//            method: "PATCH" ,
//            headers:makeHeaders(),
//            body: JSON.stringify({
//             post:postObject
//            })
//         });
//         const json = await response.json();
//         return json
//     }
//     catch(error){
//         console.error(error)
//     }
// }



{/* <form onSubmit = {handleSubmit}>
<input  placeholder = "Title" value = {editTitle} type = 'text' onChange={updateTitle} />
<input  placeholder = "Description" value = {editDescription} type = 'text' onChange={updateDescription} />
<input  placeholder = "Price" value = {editPrice} type = 'text' onChange={updatePrice} />
<input  placeholder = "Location" value = {editLocation} type = 'text' onChange={updateLocation} />
<button>Create Post</button> 
</form> */}