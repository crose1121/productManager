import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router'
import axios from 'axios';
import {useHistory} from "react-router-dom";
import {Link} from 'react-router-dom';

const EditProductForm = () => {

    const {id} = useParams();
    const history = useHistory();

    //state variable object to keep track of form info
    let [productObj, setProductObj] = useState({
        title: "",
        price: "",
        description: ""
    });

    let [formErrors,setFormErrors] = useState({})

    // changehandler function to attach to event listeners
    const changeHandler = (e) => {
        setProductObj({
            ...productObj,
            [e.target.name]: e.target.value
        })
    }

    // function to call the backend api endpoints on submit
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                // console.log("response when retrieving one product: ",res)
                setProductObj(res.data.results)
                console.log("Logging the productObj--->", productObj)

                })
            .catch(err=>console.log("Error when trying to get a single product: ",err))
    },[])


    const updateProductForm = (e) => {
        e.preventDefault();
        
        axios.put(`http://localhost:8000/api/products/edit/${id}`, productObj)
            .then(res=>{
                console.log("Logging response after submitting update form: ",res)
                if (res.data.errors) {
                    setFormErrors(res.data.errors)
                }
                else {
                    history.push("/")
                }
            })
            .catch(err=>console.log("There was an error when trying to edit a Product: ",err))
    }

    return (
        <div>
            <h3>Edit Product</h3>
            <form action="" onSubmit={updateProductForm}>
                <div className="form-group">
                    <label htmlFor="">Title: </label>
                    <input type="text" value={productObj.title} className="form-control" name="title" onChange={changeHandler}/>
                    <p className="text-danger">{formErrors.title?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price: </label>
                    <input type="number" min="1" step="any" className="form-control" name="price" value={productObj.price} onChange={changeHandler}/>
                    <p className="text-danger">{formErrors.price?.message}</p>
                </div>
                <div className="form-group">
                    <label name="description" htmlFor="">Description: </label>
                    <textarea name="description" value={productObj.description} onChange={changeHandler} className="form-control" id="" cols="10" rows="5"></textarea>
                    <p className="text-danger">{formErrors.description?.message}</p>

                </div>
                <hr />
                <p>
                <input type="submit" value="Submit Changes" className="btn btn-info" />
                <Link to="/" className="btn btn-warning">Abort</Link>
                </p>
            </form>
        </div>
    );
};



export default EditProductForm;