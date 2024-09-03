import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function ProductList() {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/api/products")
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error();
            }).then((data) => {
                console.log(data)
                setProduct(data);
            }).catch((err) => {
                alert(`unable to get data err:`)
            })
    }, [])

    function deleteProduct(_id) {
        fetch("http://localhost:3001/api/products/" + _id, {
            method: "DELETE"
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error();
            }).then((data) => {
                console.log(data)
                alert("Data Deleted Successfully")
            }).catch((err) => {
                console.log(err)
                alert(`unable to delete a Product:`)
            })
    }

    return (
        <div className='container'>
            <div className="btn-list">
                <Link to="/products/page">Create Product</Link>
                <Link to="/products">Refresh</Link>
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
                        {product ? (product.data.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.name}</td>
                                    <td>{val.brand}</td>
                                    <td>{val.category}</td>
                                    <td>{val.price}</td>
                                    <td>{val.description}</td>
                                    <td><img src={"http://localhost:3001/uploads/" + val.img} style={{ "width": "50px" }} /></td >
                                    <td className='action-btn'><Link to={`/update/${val._id}`}>Edit</Link> <Link onClick={() => deleteProduct(val._id)}>Delete</Link></td>
                                </tr>
                            )
                        })) : null}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductList;
