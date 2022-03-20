import React, { useState } from 'react';
import {addPost} from "./api"

const Create = () => {
    const [title, setTitle] = useState('');
    const [description , setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [delivery,setDelivery] = useState("not willing to deliver");

    const createPostObject = (title_, description_, price_, location_) => {
        return {
            title: title_,
            description: description_,
            price: price_,
            location: location_
        }

        
    };
    const updateTitle = (event) =>{
            setTitle(event.target.value)
    };

    const updateDescription = (event) =>{
        setDescription(event.target.value)
};
    const updatePrice = (event) => {
        setPrice(event.target.value)
    }
    const updateLocation = (event) => {
        setLocation(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await addPost(createPostObject(title, description, price, location));
        setTitle('');
        setDescription('');
        setPrice('');
        setLocation('');

    }



    return(
        <form className='createPost' onSubmit = {handleSubmit}>
            <input  className='createTitle' placeholder = "Title" value = {title} type = 'text' onChange={updateTitle} />
            <input  className='createDescription' placeholder = "Description" value = {description} type = 'text' onChange={updateDescription} />
            <input  className='createPrice' placeholder = "Price" value = {price} type = 'text' onChange={updatePrice} />
            <input  className='createButton' placeholder = "Location" value = {location} type = 'text' onChange={updateLocation} />
            <button>Create Post</button> 
        </form>
    )
};

export default Create;

