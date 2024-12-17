const express = require('express')
const mongoose = require('mongoose');
const Product =require('./models/productmodels.jsx');
const app = express()

app.use(express.json());

app.listen(3000,()=>{
    console.log("server is running on port 3000");

})

app.get('/api/products', async(req,res)=>{

    try{
        const products = await Product.find({});
        res.status(200).json(products);
    } catch  (error){
        res.status(500).json({message: error.message});
    }
})

        app.get('/api/products/:id', async(req,res)=>{
            try{
                    const {id} =req.params;
                    const product=await Product.findById(id);
                    res.status(200).json(product)
            }catch (error){
                res.status(500).json({message:error.message})
            }
        })


app.post('/api/products', async (req,res)=>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }catch (error){
        res.status(500).json({message:error.message});
    }
})

//Update a product
app.put('/api/products/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const product= await Product.findByIdAndUpdate(id, req.body);

        if(!product){
            return res.status(404).json({message:"product not found"});
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);

    }catch (error){
        res.status(500).json({message: error.message})
    }
})

app.get("/" ,(req,res) => {
        res.send("hello from node API server");
});
mongoose.connect("mongodb+srv://admin:admin@backenddb.l9f5d.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")


    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection Failed!" );
    });

