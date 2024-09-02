import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// Example of a data array that
// you might receive from an API
const data = [
    { id: 1, name: "Asus Laptop", brand: "Asus", category: "Accessories", price: 20, description: "Asus Description", img: "backend_Engineer.png" },
    { id: 2, name: "Asus Laptop", brand: "Asus", category: "Accessories", price: 20, description: "Asus Description", img: "backend_Engineer.png" },
    { id: 3, name: "Asus Laptop", brand: "Asus", category: "Accessories", price: 20, description: "Asus Description", img: "backend_Engineer.png" },
    { id: 4, name: "Asus Laptop", brand: "Asus", category: "Accessories", price: 20, description: "Asus Description", img: "backend_Engineer.png" },
    { id: 5, name: "Asus Laptop", brand: "Asus", category: "Accessories", price: 20, description: "Asus Description", img: "backend_Engineer.png" },

]

function ProductList() {
    return (
        <div className='container'>
            <div className="btn-list">
                <Link to="/products/page">Create Product</Link>
                <Link to="product">Refresh</Link>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val, key) => (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.brand}</td>
                                <td>{val.category}</td>
                                <td>{val.price}</td>
                                <td>{val.description}</td>
                                <td><img src={`/${val.img}`} style={{ "width": "50px" }} /></td >
                                <td className='action-btn'><Link to={`/update/${val.id}`}>Edit</Link> <Link onClick={() => deleteProduct(val.id)}>Delete</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductList;
