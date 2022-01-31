import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams} from "react-router"
import {useHistory} from "react-router-dom";




const AllProducts = (props) => {

    const [allProducts,setAllProducts] = useState([])
    const [isDeleted, setIsDeleted] = useState(false)

    const {id} = useParams();

    const history = useHistory();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res=>{
                console.log("Logging the res: ",res)
                setAllProducts(res.data.results)
                console.log(allProducts)
            })
            .catch(err=>console.log("There was an error when trying to find all the ninjas", err))
    },[isDeleted,props.newProductAdded])
        

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                console.log("Successfully deleted product: ",res)
                setIsDeleted(!isDeleted)
                history.push("/")
            })
            .catch(err=>console.log("Error when trying to delete a product: ",err))
    }


    return (
        <div>
            <h3>All Products</h3>
            {
                allProducts.map((item,i)=>{
                    return (
                        <div style={{border: "1px solid black"}} key={i}>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                            <p>${item.price} </p>
                            <p >
                            <Link to={`/products/${item._id}`} className="btn btn-info">Details</Link>
                            <Link to={`/products/edit/${item._id}`} className="btn btn-warning">Edit</Link>
                            <button onClick={()=>deleteProduct(item._id)} className="btn btn-danger">Delete Product</button>
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default AllProducts