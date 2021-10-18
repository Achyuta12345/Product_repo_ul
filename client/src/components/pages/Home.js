
import {useState} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';



function Home() {
    const [productList,setproductList] = useState([]);
    const getProduct = ()=>{
    Axios.get("http://localhost:3002/api/product").then((response)=>{
      setproductList(response.data);
      
    });
  };

  return (
     <div className="App">
     {<Link to="/product">Add Product</Link>}
     <button onClick={getProduct}>Show Product</button>
     
     <div className="showInfo"> 
        
         {productList.map((val,key)=>{
           return (
             <div className="prodshow">
               <div>
               <h6>Name:{val.name}</h6>
               <h6>Catagory:{val.catagory}</h6>
               <h6>Price:{val.price}</h6>
               <h6>CountInstock:{val.countInstock}</h6>
               <h6>Brand:{val.brand}</h6>
               <h6>Rating:{val.rating}</h6>
               <h6>Reviews:{val.numReviews}</h6>
               <h6> Description:{val.description}</h6>
            </div>
            
               {/* <div>
                 <input type="text" placeholder="Review...." onChange={(event)=>{
                 setNewReview(event.target.value)}}/>
                 <button onClick={()=>{updateProduct(val.id)}}>Update</button>
                 <button onClick={deleteProduct(val.id)}>Delete</button>
               </div> */}
             </div>
           );
         })} 
     </div>
    </div>
    
  );
}

export default Home;
