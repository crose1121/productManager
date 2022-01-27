// import mongoose
const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({ //change NameSchema for each project
    // key names here, with values that are objects with validations like type and minlength
    title: {
        type: String,
        minlength: [5, "Title must be at least 5 characters long!"],
        maxlength: [25, "Title cannot be greater than 25 characters"],
        required: [true, "Title is required!"]
    },
    price: {
        type: Number,
        min: [0, "Minimum price is $0!"],
        required: [true, "Price is required!"]
    },
    description: {
        type: String,
        minlength: [10, "Description must be 10 characters long"],
        maxlength: [50, "Description cannot be more than 50 characters long"],
        required: [true, "Description is required!"]
    }
})





const Product = mongoose.model('Products', ProductSchema) //change Name, tableName and NameSchema for each project
//mongoose creates a table named ___ using instructions for ____ above

module.exports = Product //change Name for each project