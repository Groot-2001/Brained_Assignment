import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

const data = [
    { id: 1, name: "Asus Laptop", brand: "Asus", category: "Accessories", price: 20, description: "Asus Description", img: "backend_Engineer.png" },
    { id: 2, name: "Asus Laptop", brand: "Asus", category: "Accessories", price: 20, description: "Asus Description", img: "backend_Engineer.png" },
    { id: 3, name: "Asus Laptop", brand: "Asus", category: "Accessories", price: 20, description: "Asus Description", img: "backend_Engineer.png" },
    { id: 4, name: "Asus Laptop", brand: "Asus", category: "Accessories", price: 20, description: "Asus Description", img: "backend_Engineer.png" },
    { id: 5, name: "Asus Laptop", brand: "Asus", category: "Accessories", price: 20, description: "Asus Description", img: "backend_Engineer.png" },

]

function Update() {
    const [datum, setDatum] = useState(null);
    const param = useParams(null);

    useEffect(() => {
        const res = data.find((obj) => obj.id === Number(param.id))
        setDatum(res)
    }, [datum]);

    return (
        datum ?
            <div className='container text-center'>
                <form className="flex" action="/products/update" method="put">
                    <h1 className='header text-center' style={{ "color": "white" }}>Update The Data</h1>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' placeholder='Enter Product Name' defaultValue={datum.name} />
                    <label htmlFor="brand">Brand</label>
                    <input type="text" id='brand' placeholder='Enter Product brand' defaultValue={datum.brand} />
                    <label htmlFor="cat">Category</label>
                    <input type="text" id='cat' placeholder='Enter Product category' defaultValue={datum.category} />
                    <label htmlFor="Price">Price</label>
                    <input type="text" id='Price' placeholder='Enter Product Price' defaultValue={datum.price} />
                    <label htmlFor="desc">Description</label>
                    <input type="text" id='desc' placeholder='Enter Product Price' defaultValue={datum.description} />
                    <label htmlFor="image">Image</label>
                    <label htmlFor="file-upload" className="custom-file-upload" defaultValue={datum.img}>
                        Select Image
                    </label>
                    <input id="file-upload" type="file" />
                    <div className='btn-group'>
                        <button type="submit">Update</button>
                        <Link className='link' to={"/"}>Cancel</Link>
                    </div>
                </form>
            </div> : <h1 className=' header text-center'>Not Found</h1>
    );
}

export default Update;
