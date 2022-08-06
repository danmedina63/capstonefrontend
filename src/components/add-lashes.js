import React, { useState } from 'react';
import axios from 'axios';

export default function addLash() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [imgUrl, setimgUrl] = useState("");

    const clearForm = () => {
            setName("");
            setPrice("");
            setDescription("");
            setimgUrl("");
    }

    const postLash = (event) => {
        
        axios
            .post(`https://dm-rosepetallashes-capbe.herokuapp.com/add-product`,
                { 
                name: name,
                description: description,
                price: price,
                img_url: imgUrl
            },
            {
                headers: { "Access-Control-Allow-Origin": "*" },
              })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => console.log(error));
           clearForm();
        event.preventDefault();
    }

  return (
        <div className="add-lash">
            <h1 className="add-lash-title">
                Enter your Lash info
            </h1>
            <form className="add-lash-form" onSubmit={postLash}>
                <input className="add-lash-form-input" onChange={(event) => setName(event.target.value)} 
                type="text" 
                placeholder="name" 
                value={name}
                />
                <input className="add-lash-form-input" onChange={(event) => setPrice(event.target.value)}  
                type="number" 
                placeholder="price" 
                value={price}
                />
                <textarea
                className="add-lash-form-textarea"
                onChange={(event) => setDescription(event.target.value)}
                type="text"
                placeholder="description"
                value={description}
                />
                <input className="add-lash-form-image"
                onChange={(event) => setimgUrl(event.target.value)} 
                type="url" 
                placeholder="url"
                value={imgUrl}
                />
                <button type="submit" className="add-lash-form-button">Add Lash!!!</button>
            </form>
        </div>

  )
}
