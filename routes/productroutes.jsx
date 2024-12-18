const express=require("express")
const ProductModel = require('../models/productmodels.jsx');

const router=express.Router()
const {getProducts,getProduct,createProduct, updateProduct, deleteProduct}=require("../controllers/productcontroller.jsx")


router.get('/',getProducts);
router.get("/:id",getProduct);


router.post("/",createProduct);

router.put("/:id",updateProduct);

router.delete("/:id",deleteProduct);




module.exports = router;

