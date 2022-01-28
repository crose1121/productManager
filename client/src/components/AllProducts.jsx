import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';




const AllProducts = () => {

    const [allProducts,setAllProducts] = useState([])


    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res=>{
                console.log("Logging the res: ",res)
                setAllProducts(res.data.results)
                console.log(allProducts)
            })
            .catch(err=>console.log("There was an error when trying to find all the ninjas", err))
    },[])
        


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
                            <p><Link to={`/products/${item._id}`} className="btn btn-info">Details</Link></p>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default AllProducts