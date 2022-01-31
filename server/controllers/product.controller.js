const modelFile = 'product.model'; //change the modelFile for each project

// import model and save as a variable

const Product = require(`../models/${modelFile}`) //change Name for each project

// module.exports.mongooseCommands here

module.exports.createProduct = (req,res) => {
    Product.create(req.body)
        .then(newProduct=>{
        console.log("Logging the result after creating new product: ",newProduct)
        res.json({results:newProduct})
        }) 
        .catch(err=>{
            res.json(err)
            console.log("There was an error when trying to create a product: ",err)})
}

module.exports.findAllProducts = (req,res) => {
    Product.find()
        .then(allProducts=>{
        res.json({results:allProducts})
        })
        .catch(err=>console.log("Error when trying to find all products: ",err))
}

module.exports.findOneProduct = (req,res) => {
    Product.findOne({_id:req.params.id})
        .then(singleProduct=>{
        res.json({results: singleProduct})
        })
        .catch(err=>console.log("Error when trying to get a single product: ",err))
}

module.exports.updateProduct = (req,res) => {
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedProduct=>res.json({results:updatedProduct}))
        .catch(err=>{
            res.json(err)
            console.log("Error when trying to update a single product: ",err)})
}

module.exports.deleteProduct = (req,res) => {
    Product.remove({_id:req.params.id})
        .then(deletedProduct=>res.json({results:deletedProduct}))
        .catch(err=>console.log("There was an error when trying to delete a product: ",err))
}