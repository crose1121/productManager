const modelFile = 'product.model'; //change the modelFile for each project

// import model and save as a variable

const Product = require(`../models/${modelFile}`) //change Name for each project

// module.exports.mongooseCommands here

module.exports.createProduct = (req,res) => {
    Product.create(req.body)
        .then(newProduct=>{
        res.json({results:newProduct})
        }) 
        .catch(err=>console.log("There was an error when trying to create a product: ",err))
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