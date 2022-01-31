import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";



const NewProductForm = (props) => {

    //state variable object to keep track of form info
    let [productObj, setProductObj] = useState({
        title: "",
        price: "",
        description: ""
    });

    let [formErrors, setFormErrors] = useState({});

    const history = useHistory();

    // changehandler function to attach to event listeners
    const changeHandler = (e) => {
        setProductObj({
            ...productObj,
            [e.target.name]: e.target.value
        })
    }

    // function to call the backend api endpoints on submit
    const submitNewProductForm = (e) => {
        e.preventDefault();
        
        axios.post(`http://localhost:8000/api/products`, productObj)
            .then(res=>{
                console.log("Trying to create a new product", res)
                if (res.data.errors) {
                    setFormErrors(res.data.errors)
                }
                else{
                    props.setNewProductAdded(!props.newProductAdded)
                    history.push("/")
                }
            })
            .catch(err=>console.log("There was an error when trying to create new Product: ",err))
    }

    return (
        <div>
            <h5><strong>Create New Product</strong></h5>
            <form action="" onSubmit={submitNewProductForm}>
                <div className="form-group">
                    <label htmlFor="">Title: </label>
                    <input type="text" className="form-control" name="title" onChange={changeHandler}/>
                    <p className="text-danger">{formErrors.title?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price: </label>
                    <input type="number" min="1" step="any" className="form-control" name="price" onChange={changeHandler}/>
                    <p className="text-danger">{formErrors.price?.message}</p>
                </div>
                <div className="form-group">
                    <label name="description" htmlFor="">Description: </label>
                    <textarea name="description" onChange={changeHandler} className="form-control" id="" cols="10" rows="5"></textarea>
                    <p className="text-danger">{formErrors.description?.message}</p>
                </div>
                <hr />
                <input type="submit" value="Submit New Product" className="btn btn-info" />
            </form>
        </div>
    );
};



export default NewProductForm;