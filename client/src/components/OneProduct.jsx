import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {useParams} from "react-router"
import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom";


const OneProduct = () => {

    const [productObj, setProductObj] = useState({})

    const {id} = useParams();

    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                // console.log("response when retrieving one product: ",res)
                setProductObj(res.data.results)
                console.log("Logging the productObj--->", productObj)
            })
            .catch(err=>console.log("Error when trying to get a single product: ",err))
    },[])

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                console.log("Logging the deleted product: ",res)
                history.push("/")
            .catch(err=>console.log("Error when trying to delete a product: ",err))
            })
    }

    return (
        <div className="text-center">
            <div className="p-3 mb-2 bg-dark text-white">
                <h3>Product Details</h3>
                <hr />
                <p><strong>{productObj.title}</strong></p>
                <p>Description: {productObj.description}</p>
                <p>Price: ${productObj.price}</p>
                <hr />
                <button onClick={deleteProduct} className="btn btn-danger">Delete Product</button>
            </div>
        </div>
    );
};



export default OneProduct;