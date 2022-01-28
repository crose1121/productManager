// import controller file using require() and save it as a variable (ex: NameController)

const controllerFile = "product.controller" //change this for each project

const ProductController = require(`../controllers/${controllerFile}`) //change NameController for each project

module.exports = (app) => {
    // routes go here along with functions from controller
    app.get('/api/products',ProductController.findAllProducts)
    app.get('/api/products/:id', ProductController.findOneProduct)
    app.post('/api/products',ProductController.createProduct)
}
