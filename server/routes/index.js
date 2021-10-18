const express = require('express');
const router = express.Router();


const {Product} = require('../models/product');

//Post Api
router.post('/api/product/add',(req,res)=>{
    const prod = new Product({
            name: req.body.name,
            catagory: req.body.catagory,
            price: req.body.price,
            countInstock: req.body.countInstock,
            brand: req.body.brand,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            description: req.body.description
           
    });

    prod.save((err,data) => {
        res.status(200).json({
            code:200, 
            message: 'Product added Sucessfully',
            addProduct:data})
    });
});

//Get Api
router.get('/api/product',(req,res)=>{
    Product.find({},(err,data)=>{
      if(!err){
          res.send(data);
      }else{
          console.log(err);
      }
    });
});

//

router.get("/api/product/:id",(req,res)=>{
    Product.findById(req.params.id,(err,data)=>{
        if(!err){
            res.send(data);
        }else{
            console.log(err);
        }
    });
});

// update 
router.put('/api/product/edit/:id',(req,res)=>{
    const prod = {
        name: req.body.name,
        catagory: req.body.catagory,
        price: req.body.price,
        countInstock: req.body.countInstock,
        brand: req.body.brand,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        description: req.body.description
    };
    Product.findByIdAndUpdate(req.params.id,{$set:prod},{new:true},(err,data)=>{
        if(!err){
            res.status(200).json({code:200, message: 'Product updated Sucessfuly',
        updateProduct: data })
        } else{
            console.log(err);
        }
    });
});

// Delete emp
router.delete('/api/employees/:id',(req,res)=>{
    Product.findByIdAndRemove(req.params.id,(err,data)=>{
        if(!err){
            res.status(200).json({code:200, message:"Product deleted Succefully",
        deleteProduct: data});
        }
    });
});

module.exports = router;