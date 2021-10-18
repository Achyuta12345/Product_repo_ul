import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';


export default function AddProductComponent() {
    const [name,setName] = useState("");
    const [catagory,setCatagory] = useState("");
    const [price,setPrice] = useState(0);
    const [countInstock,setCountInStock] = useState(0);
    const [brand,setBrand] = useState("");
    const [rating,setRating] = useState("");
    const [numReviews,setNumReviews] = useState("");
    const [description,setDescription] = useState("");
    const [productList,setproductList] = useState([]);
    const [newReview,setNewReview] = useState("");
    const [newName,setNewName] = useState("");

    const addProduct = ()=>{
        Axios.post("http://localhost:3002/api/product/add",{
          name:name,
          catagory:catagory,
          price:price,
          countInstock:countInstock,
          brand:brand,
          rating:rating,
          numReviews:numReviews,
          description:description
        }).then((response)=>{
          setproductList([...response.data,{
           name:name,
           catagory:catagory,
           price:price,
           countInstock:countInstock,
           brand:brand,
           rating:rating,
           numReviews:numReviews,
           description:description
         }
       ]);
       console.log(response);
        });
    };


    const updateProduct = (id)=>{
        Axios.put("http://localhost:3002/update",{name:newName,id:id}).then((response)=>{
          setproductList(productList.map((val) => {
             return val.id === id ? {id:val.id, name:val.name, catagory:val.catagory,price:val.price,countInstock:val.countInstock,
                brand:val.brand,
                rating:val.rating,
                numReviews:val.numReviews,
                description:val.description}:val
          }))
        });
      };

      const deleteProduct = (id)=>{
        Axios.delete(`http://localhost:3002/${id}`);
      };

    return (
        <div className="information">
        {<Link to="/">Show Product</Link>}
        <label>Name:</label>
        <input type="text" onChange={(event)=>{
          setName(event.target.value);
        }}/>
 
        <label>Catagory:</label>
        <input type="text" onChange={(event)=>{
          setCatagory(event.target.value);
        }}/>
 
        <label>Price:</label>
        <input type="number" onChange={(event)=>{
          setPrice(event.target.value);
        }}/>
 
        <label>CountInstock:</label>
        <input type="text" onChange={(event)=>{
          setCountInStock(event.target.value);
        }}/>
 
        <label>Brand:</label>
        <input type="text" onChange={(event)=>{
          setBrand(event.target.value);
        }}/>
 
        <label>Rating:</label>
        <input type="text" onChange={(event)=>{
          setRating(event.target.value);
        }}/>
 
        <label>Reviews:</label>
        <input type="text" onChange={(event)=>{
          setNumReviews(event.target.value);
        }}/>
 
        <label>Description:</label>
        <input type="text" onChange={(event)=>{
          setDescription(event.target.value);
        }}/>
 
        <button onClick={addProduct}>Submit</button>
      </div>
    )
}
