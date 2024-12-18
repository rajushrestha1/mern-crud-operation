const express = require('express')
const mongoose = require('mongoose');
const Product =require('./models/productmodels.jsx');
const productRoute = require('./routes/productroutes.jsx')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/products/',productRoute)

app.listen(3000,()=>{
    console.log("server is running on port 3000");

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

